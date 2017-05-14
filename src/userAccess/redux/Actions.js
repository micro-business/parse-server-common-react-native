// @flow

import { Map } from 'immutable';
import uuid from 'uuid/v4';
import ActionTypes from './ActionTypes';

export default class Actions {
  static acknowledgeFailedOperation = payload => ({
    type: ActionTypes.USER_ACCESS_ACKNOWLEDGE_FAILED_OPERATION,
    payload,
  });

  static getCurrentUser = () => ({
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER,
    payload: Map({
      operationId: uuid(),
    }),
  });

  static getCurrentUserSucceeded = payload => ({
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER_SUCCEEDED,
    payload,
  });

  static getCurrentUserFailed = payload => ({
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER_FAILED,
    payload,
  });

  static resetGetCurrentUserStatus = payload => ({
    type: ActionTypes.USER_ACCESS_RESET_GET_CURRENT_USER_STATUS,
    payload,
  });

  static getCurrentUserInProgress = payload => ({
    type: ActionTypes.USER_ACCESS_GET_CURRENT_USER_IN_PROGRESS,
    payload,
  });

  static signUpWithUsernameAndPassword = (
    username: string,
    password: string,
    emailAddress: ?string,
  ) => ({
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD,
    payload: Map({
      operationId: uuid(),
      username,
      password,
      emailAddress,
    }),
  });

  static signUpWithUsernameAndPasswordSucceeded = payload => ({
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_SUCCEEDED,
    payload,
  });

  static signUpWithUsernameAndPasswordFailed = payload => ({
    type: ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_FAILED,
    payload,
  });

  static resetSignUpStatus = payload => ({
    type: ActionTypes.USER_ACCESS_RESET_SIGNUP_STATUS,
    payload,
  });

  static signUpInProgress = payload => ({
    type: ActionTypes.USER_ACCESS_SIGNUP_IN_PROGRESS,
    payload,
  });

  static signInWithUsernameAndPassword = (
    username: string,
    password: string,
    emailAddress: ?string,
  ) => ({
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD,
    payload: Map({
      operationId: uuid(),
      username,
      password,
      emailAddress,
    }),
  });

  static signInWithUsernameAndPasswordSucceeded = payload => ({
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_SUCCEEDED,
    payload,
  });

  static signInWithUsernameAndPasswordFailed = payload => ({
    type: ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_FAILED,
    payload,
  });

  static resetSignInStatus = payload => ({
    type: ActionTypes.USER_ACCESS_RESET_SIGNIN_STATUS,
    payload,
  });

  static signInInProgress = payload => ({
    type: ActionTypes.USER_ACCESS_SIGNIN_IN_PROGRESS,
    payload,
  });
}
