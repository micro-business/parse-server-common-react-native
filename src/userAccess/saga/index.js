// @flow

import { Map } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../../services';
import { UserAccessActions, ActionTypes } from '../redux';

function createOperationIdMap(action) {
  return Map({
    operationId: action.payload.get('operationId'),
  });
}

function createUserInfoMap(action, userInfo) {
  return Map({
    operationId: action.payload.get('operationId'),
    userExists: true,
    userInfo,
  });
}

function createEmptyUserInfoMap(action) {
  return Map({
    operationId: action.payload.get('operationId'),
    userExists: false,
  });
}

function createErrorMap(action, errorMessage) {
  return Map({
    operationId: action.payload.get('operationId'),
    errorMessage,
  });
}

function* getCurrentUserAsync(action) {
  try {
    yield put(
      UserAccessActions.getCurrentUserInProgress(createOperationIdMap(action)),
    );

    const userInfo = yield call(UserService.getCurrentUserInfo);

    if (userInfo) {
      yield put(
        UserAccessActions.getCurrentUserSucceeded(
          createUserInfoMap(action, userInfo),
        ),
      );
    } else {
      yield put(
        UserAccessActions.getCurrentUserSucceeded(
          createEmptyUserInfoMap(action),
        ),
      );
    }
  } catch (exception) {
    yield put(
      UserAccessActions.getCurrentUserFailed(
        createErrorMap(action, exception.message),
      ),
    );
  }
}

export function* watchGetCurrentUser() {
  yield takeLatest(
    ActionTypes.USER_ACCESS_GET_CURRENT_USER,
    getCurrentUserAsync,
  );
}

function* signUpWithEmailAndPasswordAsync(action) {
  try {
    yield put(UserAccessActions.signUpInProgress(createOperationIdMap(action)));

    const userInfo = yield call(UserService.signUpWithEmailAndPassword);

    if (userInfo) {
      yield put(
        UserAccessActions.signUpWithEmailAndPasswordSucceeded(
          createUserInfoMap(action, userInfo),
        ),
      );
    } else {
      yield put(
        UserAccessActions.signUpWithEmailAndPasswordSucceeded(
          createEmptyUserInfoMap(action),
        ),
      );
    }
  } catch (exception) {
    yield put(
      UserAccessActions.signUpWithEmailAndPasswordFailed(
        createErrorMap(action, exception.message),
      ),
    );
  }
}

export function* watchSignUpWithEmailAndPassword() {
  yield takeLatest(
    ActionTypes.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD,
    signUpWithEmailAndPasswordAsync,
  );
}
