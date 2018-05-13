import {
  SKELETON_TYPE_INIT,
  SKELETON_GET_NAME,
  SKELETON_GET_DONE
} from '../constants';
import changeAction from './change';
import requestAction from './request';

export default (config) => (dispatch) => {
  dispatch({type: SKELETON_TYPE_INIT});
  dispatch(changeAction({[SKELETON_GET_NAME]: config.name, [SKELETON_GET_DONE]: 0}));
  dispatch(requestAction());
}


