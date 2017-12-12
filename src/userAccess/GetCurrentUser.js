// @flow

import { UserAccessActionTypes } from 'micro-business-common-react';
import * as UserAccessActions from 'micro-business-common-react/src/userAccess/Actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../services';
import Common from './Common';

function* getCurrentUserAsync(action) {
  try {
    yield put(UserAccessActions.getCurrentUserInProgress(Common.createOperationIdMap(action)));

    const userInfo = yield call(UserService.getCurrentUserInfo);

    if (userInfo) {
      yield put(UserAccessActions.getCurrentUserSucceeded(Common.createUserInfoMap(action, userInfo)));
    } else {
      yield put(UserAccessActions.getCurrentUserSucceeded(Common.createEmptyUserInfoMap(action)));
    }
  } catch (exception) {
    yield put(UserAccessActions.getCurrentUserFailed(Common.createErrorMap(action, exception.message)));
  }
}

const watcher = function* watchGetCurrentUser() {
  yield takeLatest(UserAccessActionTypes.USER_ACCESS_GET_CURRENT_USER, getCurrentUserAsync);
};

export default watcher;
