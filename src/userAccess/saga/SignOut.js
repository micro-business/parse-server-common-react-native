// @flow

import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../../services';
import Common from './Common';
import { ActionTypes } from '../redux';
import * as UserAccessActions from '../redux/Actions';

function* signOutAsync(action) {
  try {
    yield put(UserAccessActions.signOutInProgress(Common.createOperationIdMap(action)));
    yield call(UserService.signOut);
    yield put(UserAccessActions.signOutSucceeded(Common.createOperationIdMap(action)));
  } catch (exception) {
    yield put(UserAccessActions.signOutFailed(Common.createErrorMap(action, exception.message)));
  }
}

export default function* watchSignOut() {
  yield takeLatest(ActionTypes.USER_ACCESS_SIGNOUT, signOutAsync);
}