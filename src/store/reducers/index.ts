import { combineReducers } from 'redux';

import user from './user.reducer';
import progress from './progress.reducer';
import document from './document.reducer';

export default combineReducers({
  user,
  progress,
  document
});
