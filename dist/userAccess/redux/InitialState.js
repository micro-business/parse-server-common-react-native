Object.defineProperty(exports,"__esModule",{value:true});

var _immutable=require('immutable');
var _Status=require('./Status');var _Status2=_interopRequireDefault(_Status);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=

(0,_immutable.Map)({
failedOperations:(0,_immutable.List)(),
userExists:false,
getCurrentUserStatus:_Status2.default.NOT_STARTED,
signUpStatus:_Status2.default.NOT_STARTED,
signInStatus:_Status2.default.NOT_STARTED});