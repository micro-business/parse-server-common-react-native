// @flow

import { UserAccessActionTypes } from '@microbusiness/common-react';
import * as UserAccessActions from '@microbusiness/common-react/src/userAccess/Actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../services';
import Common from './Common';

function* signInWithFacebookAsync(action) {
  try {
    yield put(UserAccessActions.signInInProgress(Common.createOperationIdMap(action)));
    const userInfo = yield call(UserService.signInWithFacebook, action.payload.get('scope'), action.payload.get('userType'));

    if (userInfo) {
      yield put(UserAccessActions.signInWithFacebookSucceeded(Common.createUserInfoMap(action, userInfo)));
    } else {
      yield put(UserAccessActions.signInWithFacebookSucceeded(Common.createEmptyUserInfoMap(action)));
    }
  } catch (exception) {
    yield put(UserAccessActions.signInWithFacebookFailed(Common.createErrorMap(action, exception.message)));
  }
}

const watcher = function* watchSignInWithFacebook() {
  yield takeLatest(UserAccessActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK, signInWithFacebookAsync);
};

export default watcher;
