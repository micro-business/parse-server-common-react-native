Object.defineProperty(exports, '__esModule', { value: true });

var _ActionTypes = require('./ActionTypes');
var _ActionTypes2 = _interopRequireDefault(_ActionTypes);
var _InitialState = require('./InitialState');
var _InitialState2 = _interopRequireDefault(_InitialState);
var _Status = require('./Status');
var _Status2 = _interopRequireDefault(_Status);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
exports.default = function() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _InitialState2.default;
  var action = arguments[1];
  switch (action.type) {
    case _ActionTypes2.default.USER_ACCESS_ACKNOWLEDGE_FAILED_OPERATION:
      return state.update('failedOperations', function(failedOperations) {
        return failedOperations.filterNot(function(operation) {
          return operation.get('operationId') === action.payload.get('operationId');
        });
      });

    case _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_SUCCEEDED:
      return state
        .set('getCurrentUserStatus', _Status2.default.SUCCEEDED)
        .set('userExists', action.payload.get('userExists'))
        .set('userInfo', action.payload.get('userInfo'));

    case _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_FAILED:
      return state
        .set('getCurrentUserStatus', _Status2.default.FAILED)
        .set('userExists', false)
        .remove('userInfo')
        .update('failedOperations', function(failedOperations) {
          return failedOperations.push(action.payload);
        });

    case _ActionTypes2.default.USER_ACCESS_RESET_GET_CURRENT_USER_STATUS:
      return state.set('getCurrentUserStatus', _Status2.default.NOT_STARTED);

    case _ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_IN_PROGRESS:
      return state.set('getCurrentUserStatus', _Status2.default.IN_PROGRESS);

    case _ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_SUCCEEDED:
      return state.set('signUpStatus', _Status2.default.SUCCEEDED).set('userExists', true).set('userInfo', action.payload.get('userInfo'));

    case _ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_FAILED:
      return state
        .set('signUpStatus', _Status2.default.FAILED)
        .set('userExists', false)
        .remove('userInfo')
        .update('failedOperations', function(failedOperations) {
          return failedOperations.push(action.payload);
        });

    case _ActionTypes2.default.USER_ACCESS_RESET_SIGNUP_STATUS:
      return state.set('signUpStatus', _Status2.default.NOT_STARTED);

    case _ActionTypes2.default.USER_ACCESS_SIGNUP_IN_PROGRESS:
      return state.set('signUpStatus', _Status2.default.IN_PROGRESS);

    case _ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_SUCCEEDED:
      return state.set('signInStatus', _Status2.default.SUCCEEDED).set('userExists', true).set('userInfo', action.payload.get('userInfo'));

    case _ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_FAILED:
      return state
        .set('signInStatus', _Status2.default.FAILED)
        .set('userExists', false)
        .remove('userInfo')
        .update('failedOperations', function(failedOperations) {
          return failedOperations.push(action.payload);
        });

    case _ActionTypes2.default.USER_ACCESS_RESET_SIGNIN_STATUS:
      return state.set('signInStatus', _Status2.default.NOT_STARTED);

    case _ActionTypes2.default.USER_ACCESS_SIGNIN_IN_PROGRESS:
      return state.set('signInStatus', _Status2.default.IN_PROGRESS);

    case _ActionTypes2.default.USER_ACCESS_SIGNOUT_SUCCEEDED:
      return state.set('signOutStatus', _Status2.default.SUCCEEDED).set('userExists', false).remove('userInfo');

    case _ActionTypes2.default.USER_ACCESS_SIGNOUT_FAILED:
      return state.set('signOutStatus', _Status2.default.FAILED);

    case _ActionTypes2.default.USER_ACCESS_RESET_SIGNOUT_STATUS:
      return state.set('signOutStatus', _Status2.default.NOT_STARTED);

    case _ActionTypes2.default.USER_ACCESS_SIGNOUT_IN_PROGRESS:
      return state.set('signOutStatus', _Status2.default.IN_PROGRESS);

    default:
      return state;
  }
};
