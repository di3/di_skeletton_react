import {
  SKELETON_STORE,
  SKELETON_GET_DONE
} from '../constants';

import changeAction from './change';

export default () => (dispatch, getState) => {
  const state = getState()[SKELETON_STORE];
  dispatch(changeAction({[SKELETON_GET_DONE]: state.get(SKELETON_GET_DONE) +1}));
};
