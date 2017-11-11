import {
  SKELETON_TYPE_INIT
} from '../constants';
import changeAction from './change';
import requestAction from './request';

export default (config) => (dispatch) => {
  dispatch({type: SKELETON_TYPE_INIT});
  dispatch(changeAction({name: config.name, done: 0}));
  dispatch(requestAction());
}


