import request from 'di_request';

import {
  SKELETON_TYPE_CHANGE,
  SKELETON_STATUS_LOADING,
  SKELETON_STATUS_INIT
} from '../constants';

export default () => (dispatch) => {
  dispatch({type: SKELETON_TYPE_CHANGE, data: {status: SKELETON_STATUS_LOADING}});
  request({url: "index.json"})
    .then((r1) => {
      dispatch({type: SKELETON_TYPE_CHANGE, data: {status: SKELETON_STATUS_INIT}})
      return r1.get();
    })
    .then((r2) => {
      dispatch({type: SKELETON_TYPE_CHANGE, data: {title: r2.responseBody.title}})
    }, (r2) => console.log("er2", r2));
};
