import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import configureStore from './configureStore';


require('../stylesheets/main.scss');
// require('autotrack/lib/plugins/event-tracker');
// require('autotrack/lib/plugins/outbound-link-tracker');
// require('autotrack/lib/plugins/url-change-tracker');


const store = configureStore();


ReactDOM.render(
  (<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>),
  document.getElementById('main')
);
