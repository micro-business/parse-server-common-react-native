// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../services';
import Common from './Common';
import ActionTypes from './ActionTypes';
import * as UserAccessActions from './Actions';

function* signInWithUsernameAndPasswordAsync(action) {
  try {
    yield put(UserAccessActions.signInInProgress(Common.createOperationIdMap(action)));

    const userInfo = yield call(UserService.signInWithUsernameAndPassword, action.payload.get('username'), action.payload.get('password'));

    if (userInfo) {
      yield put(UserAccessActions.signInWithUsernameAndPasswordSucceeded(Common.createUserInfoMap(action, userInfo)));
    } else {
      yield put(UserAccessActions.signInWithUsernameAndPasswordSucceeded(Common.createEmptyUserInfoMap(action)));
    }
  } catch (exception) {
    yield put(UserAccessActions.signInWithUsernameAndPasswordFailed(Common.createErrorMap(action, exception.message)));
  }
}

const watcher = function* watchSignInWithUsernameAndPassword() {
  yield takeLatest(ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD, signInWithUsernameAndPasswordAsync);
};

export default watcher;
