import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';

import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

function ProviderMock(props) {
  return (
    <Provider store={store}>
      <Router history={history}>
        { props.children }
      </Router>
    </Provider>
  );
}

export default ProviderMock;
