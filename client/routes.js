import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './common/home';
import Slate from './common/Slate'
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Slate} />
    <Route path="survey/:survey" component={Home} />
  </Route>
);
