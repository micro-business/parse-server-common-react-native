// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../../services';
import Common from './Common';
import { ActionTypes } from '../redux';
import * as UserAccessActions from '../redux/Actions';

function* signInWithFacebookAsync(action) {
  try {
    yield put(UserAccessActions.signInInProgress(Common.createOperationIdMap(action)));
    const userInfo = yield call(UserService.signInWithFacebook, action.payload.get('scope'));

    if (userInfo) {
      yield put(UserAccessActions.signInWithFacebookSucceeded(Common.createUserInfoMap(action, userInfo)));
    } else {
      yield put(UserAccessActions.signInWithFacebookSucceeded(Common.createEmptyUserInfoMap(action)));
    }
  } catch (exception) {
    yield put(UserAccessActions.signInWithFacebookFailed(Common.createErrorMap(action, exception.message)));
  }
}

export default function* watchSignInWithFacebook() {
  yield takeLatest(ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK, signInWithFacebookAsync);
}
