import request from 'di_request';

import {
  SKELETON_GET_STATUS,
  SKELETON_GET_TITLE,
  SKELETON_GET_ERROR,
  SKELETON_STATUS_LOADING,
  SKELETON_STATUS_INIT
} from '../constants';

import changeAction from './change';

export default () => (dispatch) => {
  dispatch(changeAction({[SKELETON_GET_STATUS]: SKELETON_STATUS_LOADING}));
  request({url: "index.json"})
    .then((r1) => {
      dispatch(changeAction({[SKELETON_GET_STATUS]: SKELETON_STATUS_INIT}))
      return r1.get();
    })
    .then((r2) => {
      dispatch(changeAction({[SKELETON_GET_TITLE]: r2.responseBody.title}))
    }, (r2) => {
      dispatch(changeAction({[SKELETON_GET_ERROR]: r2.error}));
    })
};
