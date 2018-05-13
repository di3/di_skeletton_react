import {
  SKELETON_GET_DONE
} from '../constants';

import changeAction from './change';

export default () => (dispatch) => {
  dispatch(changeAction({[SKELETON_GET_DONE]: 0}));
};
