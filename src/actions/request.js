import request from 'di_request';

import {
  SKELETON_STATUS_LOADING,
  SKELETON_STATUS_INIT
} from '../constants';

import changeAction from './change';

export default () => (dispatch) => {
  dispatch(changeAction({status: SKELETON_STATUS_LOADING}));
  request({url: "index.json"})
    .then((r1) => {
      dispatch(changeAction({status: SKELETON_STATUS_INIT}))
      return r1.get();
    })
    .then((r2) => {
      dispatch(changeAction({title: r2.responseBody.title}))
    }, (r2) => {
      dispatch(changeAction({error: r2.error}));
    })
};
