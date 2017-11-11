import {
  SKELETON_TYPE_CHANGE
} from '../constants';

export default (data) => (dispatch) => dispatch({type: SKELETON_TYPE_CHANGE, data});
