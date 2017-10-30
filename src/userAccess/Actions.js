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

export function signUpWithUsernameAndPassword(username: string, password: string, emailAddress: ?string, userType: ?string) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD,
    payload: Map({
      operationId: uuid(),
      username,
      password,
      emailAddress,
      userType,
    }),
  };
}

export function signUpWithUsernameAndPasswordSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_SUCCEEDED,
    payload,
  };
}

export function signUpWithUsernameAndPasswordFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_FAILED,
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

export function signInWithUsernameAndPassword(username: string, password: string, emailAddress: ?string) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD,
    payload: Map({
      operationId: uuid(),
      username,
      password,
      emailAddress,
    }),
  };
}

export function signInWithUsernameAndPasswordSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_SUCCEEDED,
    payload,
  };
}

export function signInWithUsernameAndPasswordFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_FAILED,
    payload,
  };
}

export function signInWithFacebook(scope: string, userType: ?string) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK,
    payload: Map({
      operationId: uuid(),
      scope,
      userType,
    }),
  };
}

export function signInWithFacebookSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK_SUCCEEDED,
    payload,
  };
}

export function signInWithFacebookFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK_FAILED,
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

export function signOut() {
  return {
    type: ActionTypes.USER_ACCESS_SIGNOUT,
    payload: Map({
      operationId: uuid(),
    }),
  };
}

export function signOutSucceeded(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNOUT_SUCCEEDED,
    payload,
  };
}

export function signOutFailed(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNOUT_FAILED,
    payload,
  };
}

export function resetSignOutStatus(payload) {
  return {
    type: ActionTypes.USER_ACCESS_RESET_SIGNOUT_STATUS,
    payload,
  };
}

export function signOutInProgress(payload) {
  return {
    type: ActionTypes.USER_ACCESS_SIGNOUT_IN_PROGRESS,
    payload,
  };
}
