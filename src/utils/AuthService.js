import { EventEmitter } from 'events';
import { isTokenExpired } from './jwtHelper';
import Auth0Lock from 'auth0-lock';

export default class AuthService extends EventEmitter {

  constructor(clientId, domain) {
    super();

    // Configure Auth0
    this.lock = new Auth0Lock(
      clientId,
      domain,
      {
        auth: {
          redirectUrl: `${window.location.origin}/courses`,
          responseType: 'token',
          // user_metadata app_metadata
          // @see https://auth0.com/docs/libraries/lock/v10/sending-authentication-parameters#scope-string-
          params: {scope: 'openid nickname email'}
        }
      });

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this));

    // Add callback for lock `authorization_error` event
    this.lock.on('authorization_error', this._authorizationError.bind(this));

    // binds login functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  _doAuthentication(authResult) {
    // Saves the user token
    this.setToken(authResult.idToken);

    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error);
      } else {
        this.setProfile(profile);
      }
    })
  }

  _authorizationError(error) {
    // Unexpected authentication error
    console.log('Authentication Error', error);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();

    return !!token && !isTokenExpired(token);
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));

    // Triggers profile_updated event to update the UI
    this.emit('profile_updated', profile);
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');


    this.emit('logout');
  }

  /**
   * Browser fetch wrapper
   *
   * @param url
   * @param options
   * @returns {Promise.<TResult>}
   */
  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }
}
