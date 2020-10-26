import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer'

import BaseLayout from "layouts/BaseLayout.js";

import 'bootstrap/dist/css/bootstrap.css';
import "assets/scss/custom.scss?v=1.1.0";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" render={props => <BaseLayout {...props} />} />
        {/* <Redirect from="/" to="/home" /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)