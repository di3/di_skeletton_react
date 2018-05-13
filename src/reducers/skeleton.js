import { Map } from 'immutable';

import {
  SKELETON_TYPE_INIT,
  SKELETON_TYPE_CHANGE,
  SKELETON_STATUS_LOADING,
  SKELETON_STATUS_INIT,
  SKELETON_GET_STATUS,
  SKELETON_GET_TITLE,
  SKELETON_GET_ERROR
} from '../constants';

const initialState = Map({
  [SKELETON_GET_STATUS]: SKELETON_STATUS_LOADING,
  [SKELETON_GET_TITLE]: 'skeleton',
  [SKELETON_GET_ERROR]: false
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SKELETON_TYPE_INIT:
      return state.set(SKELETON_GET_STATUS, SKELETON_STATUS_INIT);
    case SKELETON_TYPE_CHANGE:
      return state.merge(action.data);
  }
  return state;
}
