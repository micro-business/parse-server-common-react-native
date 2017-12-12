// @flow

import { UserAccessActionTypes } from 'micro-business-common-react';
import * as UserAccessActions from 'micro-business-common-react/src/userAccess/Actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../services';
import Common from './Common';

function* signOutAsync(action) {
  try {
    yield put(UserAccessActions.signOutInProgress(Common.createOperationIdMap(action)));
    yield call(UserService.signOut);
    yield put(UserAccessActions.signOutSucceeded(Common.createOperationIdMap(action)));
  } catch (exception) {
    yield put(UserAccessActions.signOutFailed(Common.createErrorMap(action, exception.message)));
  }
}

const watcher = function* watchSignOut() {
  yield takeLatest(UserAccessActionTypes.USER_ACCESS_SIGNOUT, signOutAsync);
};

export default watcher;
