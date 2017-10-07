// @flow

import ActionTypes from './ActionTypes';
import initialState from './InitialState';
import Status from './Status';

export default (state = initialState, action) => {
  switch (action.type) {
  case ActionTypes.USER_ACCESS_ACKNOWLEDGE_FAILED_OPERATION:
    return state.update('failedOperations', failedOperations =>
      failedOperations.filterNot(operation => operation.get('operationId') === action.payload.get('operationId')));

  case ActionTypes.USER_ACCESS_GET_CURRENT_USER_SUCCEEDED:
    return state
      .set('getCurrentUserStatus', Status.SUCCEEDED)
      .set('userExists', action.payload.get('userExists'))
      .set('userInfo', action.payload.get('userInfo'));

  case ActionTypes.USER_ACCESS_GET_CURRENT_USER_FAILED:
    return state
      .set('getCurrentUserStatus', Status.FAILED)
      .set('userExists', false)
      .remove('userInfo')
      .update('failedOperations', failedOperations => failedOperations.push(action.payload));

  case ActionTypes.USER_ACCESS_RESET_GET_CURRENT_USER_STATUS:
    return state.set('getCurrentUserStatus', Status.NOT_STARTED);

  case ActionTypes.USER_ACCESS_GET_CURRENT_USER_IN_PROGRESS:
    return state.set('getCurrentUserStatus', Status.IN_PROGRESS);

  case ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_SUCCEEDED:
    return state
      .set('signUpStatus', Status.SUCCEEDED)
      .set('userExists', true)
      .set('userInfo', action.payload.get('userInfo'));

  case ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_FAILED:
    return state
      .set('signUpStatus', Status.FAILED)
      .set('userExists', false)
      .remove('userInfo')
      .update('failedOperations', failedOperations => failedOperations.push(action.payload));

  case ActionTypes.USER_ACCESS_RESET_SIGNUP_STATUS:
    return state.set('signUpStatus', Status.NOT_STARTED);

  case ActionTypes.USER_ACCESS_SIGNUP_IN_PROGRESS:
    return state.set('signUpStatus', Status.IN_PROGRESS);

  case ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_SUCCEEDED:
    return state
      .set('signInStatus', Status.SUCCEEDED)
      .set('userExists', true)
      .set('userInfo', action.payload.get('userInfo'));

  case ActionTypes.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_FAILED:
    return state
      .set('signInStatus', Status.FAILED)
      .set('userExists', false)
      .remove('userInfo')
      .update('failedOperations', failedOperations => failedOperations.push(action.payload));

  case ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK_SUCCEEDED:
    return state
      .set('signInStatus', Status.SUCCEEDED)
      .set('userExists', true)
      .set('userInfo', action.payload.get('userInfo'));

  case ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK_FAILED:
    return state
      .set('signInStatus', Status.FAILED)
      .set('userExists', false)
      .remove('userInfo')
      .update('failedOperations', failedOperations => failedOperations.push(action.payload));

  case ActionTypes.USER_ACCESS_RESET_SIGNIN_STATUS:
    return state.set('signInStatus', Status.NOT_STARTED);

  case ActionTypes.USER_ACCESS_SIGNIN_IN_PROGRESS:
    return state.set('signInStatus', Status.IN_PROGRESS);

  case ActionTypes.USER_ACCESS_SIGNOUT_SUCCEEDED:
    return state
      .set('signOutStatus', Status.SUCCEEDED)
      .set('userExists', false)
      .remove('userInfo');

  case ActionTypes.USER_ACCESS_SIGNOUT_FAILED:
    return state.set('signOutStatus', Status.FAILED);

  case ActionTypes.USER_ACCESS_RESET_SIGNOUT_STATUS:
    return state.set('signOutStatus', Status.NOT_STARTED);

  case ActionTypes.USER_ACCESS_SIGNOUT_IN_PROGRESS:
    return state.set('signOutStatus', Status.IN_PROGRESS);

  default:
    return state;
  }
};
