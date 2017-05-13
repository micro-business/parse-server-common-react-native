'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function Common() {
  _classCallCheck(this, Common);
};

Common.createOperationIdMap = function (action) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId')
  });
};

Common.createUserInfoMap = function (action, userInfo) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId'),
    userExists: true,
    userInfo: userInfo
  });
};

Common.createEmptyUserInfoMap = function (action) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId'),
    userExists: false
  });
};

Common.createErrorMap = function (action, errorMessage) {
  return (0, _immutable.Map)({
    operationId: action.payload.get('operationId'),
    errorMessage: errorMessage
  });
};

exports.default = Common;