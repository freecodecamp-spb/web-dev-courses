import React, { Component, PropTypes as T } from 'react';
import { AuthService , auth}  from '../../utils/auth';

export class Login extends Component {
  static contextTypes = {
    auth: T.instanceOf(AuthService)
  };

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  };

  constructor(props, context) {
    super(props, context);

    this.context = context;
  }

  render() {
    console.log("auth: ", auth);

    return (
      <div className="AuthPage">
        <button className="btn btn-primary" onClick={auth.login.bind(this)}>Login</button>
      </div>
    );
  }
}