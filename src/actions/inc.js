import { SKELETON_STORE } from '../constants';

import changeAction from './change';

export default () => (dispatch, getState) => {
  const state = getState()[SKELETON_STORE];
  dispatch(changeAction({done: state.get("done") +1}));
};
