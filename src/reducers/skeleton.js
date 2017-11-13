import { Map } from 'immutable';

import {
  SKELETON_TYPE_INIT,
  SKELETON_TYPE_CHANGE,
  SKELETON_STATUS_LOADING,
  SKELETON_STATUS_INIT
} from '../constants';

const initialState = Map({
  status: SKELETON_STATUS_LOADING,
  title: 'skeleton',
  error: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SKELETON_TYPE_INIT:
      return state.set("status", SKELETON_STATUS_INIT);
    case SKELETON_TYPE_CHANGE:
      return state.merge(action.data);
  }
  return state;
}
