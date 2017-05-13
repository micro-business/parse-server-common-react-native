'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = watchSignUpWithUsernameAndPassword;

var _effects = require('redux-saga/effects');

var _services = require('../../services');

var _Common = require('./Common');

var _Common2 = _interopRequireDefault(_Common);

var _redux = require('../redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [signUpWithUsernameAndPasswordAsync, watchSignUpWithUsernameAndPassword].map(regeneratorRuntime.mark);

function signUpWithUsernameAndPasswordAsync(action) {
  var userInfo;
  return regeneratorRuntime.wrap(function signUpWithUsernameAndPasswordAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.put)(_redux.UserAccessActions.signUpInProgress(_Common2.default.createOperationIdMap(action)));

        case 3:
          _context.next = 5;
          return (0, _effects.call)(_services.UserService.signUpWithUsernameAndPassword, action.payload.get('username'), action.payload.get('password'), action.payload.get('emailAddress'));

        case 5:
          userInfo = _context.sent;

          if (!userInfo) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0, _effects.put)(_redux.UserAccessActions.signUpWithUsernameAndPasswordSucceeded(_Common2.default.createUserInfoMap(action, userInfo)));

        case 9:
          _context.next = 13;
          break;

        case 11:
          _context.next = 13;
          return (0, _effects.put)(_redux.UserAccessActions.signUpWithUsernameAndPasswordSucceeded(_Common2.default.createEmptyUserInfoMap(action)));

        case 13:
          _context.next = 19;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context['catch'](0);
          _context.next = 19;
          return (0, _effects.put)(_redux.UserAccessActions.signUpWithUsernameAndPasswordFailed(_Common2.default.createErrorMap(action, _context.t0.message)));

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 15]]);
}

function watchSignUpWithUsernameAndPassword() {
  return regeneratorRuntime.wrap(function watchSignUpWithUsernameAndPassword$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)(_redux.ActionTypes.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD, signUpWithUsernameAndPasswordAsync);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}