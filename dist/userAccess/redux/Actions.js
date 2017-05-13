'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acknowledgeFailedOperation = acknowledgeFailedOperation;
exports.getCurrentUser = getCurrentUser;
exports.getCurrentUserSucceeded = getCurrentUserSucceeded;
exports.getCurrentUserFailed = getCurrentUserFailed;
exports.resetGetCurrentUserStatus = resetGetCurrentUserStatus;
exports.getCurrentUserInProgress = getCurrentUserInProgress;
exports.signUpWithEmailAndPassword = signUpWithEmailAndPassword;
exports.signUpWithEmailAndPasswordSucceeded = signUpWithEmailAndPasswordSucceeded;
exports.signUpWithEmailAndPasswordFailed = signUpWithEmailAndPasswordFailed;
exports.resetSignUpStatus = resetSignUpStatus;
exports.signUpInProgress = signUpInProgress;
exports.signInWithEmailAndPassword = signInWithEmailAndPassword;
exports.signInWithEmailAndPasswordSucceeded = signInWithEmailAndPasswordSucceeded;
exports.signInWithEmailAndPasswordFailed = signInWithEmailAndPasswordFailed;
exports.resetSignInStatus = resetSignInStatus;
exports.signInInProgress = signInInProgress;

var _immutable = require('immutable');

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function acknowledgeFailedOperation(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_ACKNOWLEDGE_FAILED_OPERATION,
    payload: payload
  };
}

function getCurrentUser() {
  return {
    type: _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER,
    payload: (0, _immutable.Map)({
      operationId: (0, _v2.default)()
    })
  };
}

function getCurrentUserSucceeded(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_SUCCEEDED,
    payload: payload
  };
}

function getCurrentUserFailed(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_FAILED,
    payload: payload
  };
}

function resetGetCurrentUserStatus(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_RESET_GET_CURRENT_USER_STATUS,
    payload: payload
  };
}

function getCurrentUserInProgress(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_IN_PROGRESS,
    payload: payload
  };
}

function signUpWithEmailAndPassword(emailAddress, password) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD,
    payload: (0, _immutable.Map)({
      operationId: (0, _v2.default)(),
      emailAddress: emailAddress,
      password: password
    })
  };
}

function signUpWithEmailAndPasswordSucceeded(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD_SUCCEEDED,
    payload: payload
  };
}

function signUpWithEmailAndPasswordFailed(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD_FAILED,
    payload: payload
  };
}

function resetSignUpStatus(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_RESET_SIGNUP_STATUS,
    payload: payload
  };
}

function signUpInProgress(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNUP_IN_PROGRESS,
    payload: payload
  };
}

function signInWithEmailAndPassword(emailAddress, password) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_EMAIL_AND_PASSWORD,
    payload: (0, _immutable.Map)({
      operationId: (0, _v2.default)(),
      emailAddress: emailAddress,
      password: password
    })
  };
}

function signInWithEmailAndPasswordSucceeded(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_EMAIL_AND_PASSWORD_SUCCEEDED,
    payload: payload
  };
}

function signInWithEmailAndPasswordFailed(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_EMAIL_AND_PASSWORD_FAILED,
    payload: payload
  };
}

function resetSignInStatus(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_RESET_SIGNIN_STATUS,
    payload: payload
  };
}

function signInInProgress(payload) {
  return {
    type: _ActionTypes2.default.USER_ACCESS_SIGNIN_IN_PROGRESS,
    payload: payload
  };
}