'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchGetCurrentUser = watchGetCurrentUser;
exports.watchSignUpWithEmailAndPassword = watchSignUpWithEmailAndPassword;

var _immutable = require('immutable');

var _effects = require('redux-saga/effects');

var _services = require('../../services');

var _redux = require('../redux');

var _marked = [getCurrentUserAsync, watchGetCurrentUser, signUpWithEmailAndPasswordAsync, watchSignUpWithEmailAndPassword].map(regeneratorRuntime.mark);

function createOperationIdMap(action) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId')
  });
}

function createUserInfoMap(action, userInfo) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId'),
    userExists: true,
    userInfo: userInfo
  });
}

function createEmptyUserInfoMap(action) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId'),
    userExists: false
  });
}

function createErrorMap(action, errorMessage) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId'),
    errorMessage: errorMessage
  });
}

function getCurrentUserAsync(action) {
  var userInfo;
  return regeneratorRuntime.wrap(function getCurrentUserAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)(_redux.UserAccessActions.getCurrentUserInProgress(createOperationIdMap(action)));

        case 3:
          _context.next = 5;
          return (0, _effects.call)(_services.UserService.getCurrentUserInfo);

        case 5:
          userInfo = _context.sent;

          if (!userInfo) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0, _effects.put)(_redux.UserAccessActions.getCurrentUserSucceeded(createUserInfoMap(action, userInfo)));

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.next = 13;
          return (0, _effects.put)(_redux.UserAccessActions.getCurrentUserSucceeded(createEmptyUserInfoMap(action)));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context['catch'](0);
          _context.next = 19;
          return (0, _effects.put)(_redux.UserAccessActions.getCurrentUserFailed(createErrorMap(action, _context.t0.message)));

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 15]]);
}

function watchGetCurrentUser() {
  return regeneratorRuntime.wrap(function watchGetCurrentUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_redux.ActionTypes.USER_ACCESS_GET_CURRENT_USER, getCurrentUserAsync);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function signUpWithEmailAndPasswordAsync(action) {
  var userInfo;
  return regeneratorRuntime.wrap(function signUpWithEmailAndPasswordAsync$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.put)(_redux.UserAccessActions.signUpInProgress(createOperationIdMap(action)));

        case 3:
          _context3.next = 5;
          return (0, _effects.call)(_services.UserService.signUpWithEmailAndPassword);

        case 5:
          userInfo = _context3.sent;

          if (!userInfo) {
            _context3.next = 11;
            break;
          }

          _context3.next = 9;
          return (0, _effects.put)(_redux.UserAccessActions.signUpWithEmailAndPasswordSucceeded(createUserInfoMap(action, userInfo)));

        case 9:
          _context3.next = 13;
          break;

        case 11:
          _context3.next = 13;
          return (0, _effects.put)(_redux.UserAccessActions.signUpWithEmailAndPasswordSucceeded(createEmptyUserInfoMap(action)));

        case 13:
          _context3.next = 19;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3['catch'](0);
          _context3.next = 19;
          return (0, _effects.put)(_redux.UserAccessActions.signUpWithEmailAndPasswordFailed(createErrorMap(action, _context3.t0.message)));

        case 19:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 15]]);
}

function watchSignUpWithEmailAndPassword() {
  return regeneratorRuntime.wrap(function watchSignUpWithEmailAndPassword$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(_redux.ActionTypes.USER_ACCESS_SIGNUP_WITH_EMAIL_AND_PASSWORD, signUpWithEmailAndPasswordAsync);

        case 2:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this);
}