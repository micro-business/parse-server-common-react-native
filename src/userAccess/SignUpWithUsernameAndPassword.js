// @flow

import { UserAccessActionTypes } from 'micro-business-common-react';
import * as UserAccessActions from 'micro-business-common-react/src/userAccess/Actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../services';
import Common from './Common';

function* signUpWithUsernameAndPasswordAsync(action) {
  try {
    yield put(UserAccessActions.signUpInProgress(Common.createOperationIdMap(action)));

    const userInfo = yield call(
      UserService.signUpWithUsernameAndPassword,
      action.payload.get('username'),
      action.payload.get('password'),
      action.payload.get('emailAddress'),
      action.payload.get('userType'),
    );

    if (userInfo) {
      yield put(UserAccessActions.signUpWithUsernameAndPasswordSucceeded(Common.createUserInfoMap(action, userInfo)));
    } else {
      yield put(UserAccessActions.signUpWithUsernameAndPasswordSucceeded(Common.createEmptyUserInfoMap(action)));
    }
  } catch (exception) {
    yield put(UserAccessActions.signUpWithUsernameAndPasswordFailed(Common.createErrorMap(action, exception.message)));
  }
}

const watcher = function* watchSignUpWithUsernameAndPassword() {
  yield takeLatest(UserAccessActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD, signUpWithUsernameAndPasswordAsync);
};

export default watcher;
