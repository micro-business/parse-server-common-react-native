// @flow

import { Map } from 'immutable';
import uuid from 'uuid/v4';
import ActionTypes from './ActionTypes';

export function acknowledgeFailedOperation(payload) {
  return {
    type: ActionTypes.USER_ACCESS_ACKNOWLEDGE_FAILED_OPERATION,
    payload,
  };
}

export function getCurrentUser() {
  return {
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER,
    payload: Map({
      operationId: uuid(),
    }),
  };
}

export function getCurrentUserSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER_SUCCEEDED,
    payload,
  };
}

export function getCurrentUserFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER_FAILED,
    payload,
  };
}

export function resetGetCurrentUserStatus(payload) {
  return {
    type: ActionTypes.USER_ACCESS_RESET_GET_CURRENT_USER_STATUS,
    payload,
  };
}

export function getCurrentUserInProgress(payload) {
  return {
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER_IN_PROGRESS,
    payload,
  };
}

export function signUpWithEmailAndPassword(emailAddress, password) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD,
    payload: Map({
      operationId: uuid(),
      emailAddress,
      password,
    }),
  };
}

export function signUpWithEmailAndPasswordSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD_SUCCEEDED,
    payload,
  };
}

export function signUpWithEmailAndPasswordFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD_FAILED,
    payload,
  };
}

export function resetSignUpStatus(payload) {
  return {
    type: ActionTypes.USER_ACCESS_RESET_SIGNUP_STATUS,
    payload,
  };
}

export function signUpInProgress(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_IN_PROGRESS,
    payload,
  };
}

export function signInWithEmailAndPassword(emailAddress, password) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_EMAIL_AND_PASSWORD,
    payload: Map({
      operationId: uuid(),
      emailAddress,
      password,
    }),
  };
}

export function signInWithEmailAndPasswordSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_EMAIL_AND_PASSWORD_SUCCEEDED,
    payload,
  };
}

export function signInWithEmailAndPasswordFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_EMAIL_AND_PASSWORD_FAILED,
    payload,
  };
}

export function resetSignInStatus(payload) {
  return {
    type: ActionTypes.USER_ACCESS_RESET_SIGNIN_STATUS,
    payload,
  };
}

export function signInInProgress(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_IN_PROGRESS,
    payload,
  };
}
