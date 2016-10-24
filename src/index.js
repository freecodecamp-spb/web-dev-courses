import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import './index.css';

import App from './App';
import { IndexPage } from './pages/index-page/index-page';
import { CoursesListPage } from './pages/courses-list/couses-list';
import { CoursesItemPage } from './pages/courses-item/courses-item';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        
        <IndexRoute component={CoursesListPage}/>
        
        <Route path="/courses" component={CoursesListPage} />
        <Route path="/courses/:id" component={CoursesItemPage}/>
      
      </Route>
    </Router>
  ), document.getElementById('root')
);
