import {
  SKELETON_TYPE_CHANGE,
  SKELETON_STORE
} from '../constants';

export default () => (dispatch, getState) => {
  const state = getState()[SKELETON_STORE];
  dispatch({type: SKELETON_TYPE_CHANGE, data:{done: state.get("done") +1}});
};
