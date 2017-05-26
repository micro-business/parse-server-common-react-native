// @flow

import { List, Map } from 'immutable';
import Status from './Status';

export default Map({
  failedOperations: List(),
  userExists: false,
  getCurrentUserStatus: Status.NOT_STARTED,
  signUpStatus: Status.NOT_STARTED,
  signInStatus: Status.NOT_STARTED,
  signOutStatus: Status.NOT_STARTED,
});
