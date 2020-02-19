import React from 'react';
import  { render } from 'react-dom';
import './index.css';
import App from './App';
import {createBrowserHistory} from 'history'
import { Provider } from 'react-redux'; // to connect react with redux
// import { configureStore, configureDefaultState} from './store/index';
import store from './store/getStore';
import {
  Router,
  Route,
} from "react-router-dom";




const history = createBrowserHistory();

const router = (
  <Provider store={store}>
    <Router history={history}>
        <Route component={App}/>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));