import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import request from 'di_request';

import store from 'di_store';

import Skeleton from './reducers/skeleton';
import initAction from './actions/init';
import App from './components/App';
import { SKELETON_STORE } from './constants';
store.inject(SKELETON_STORE, Skeleton);

export const init = (config) =>  {
  store.dispatch(initAction(config));
  let element = document.getElementById(config.container);
  render(<Provider store={store}><App /></Provider>, element);
}

