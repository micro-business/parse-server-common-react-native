Object.defineProperty(exports,"__esModule",{value:true});exports.configParseServerSdk=exports.watchSignOut=exports.watchSignInWithFacebook=exports.watchSignInWithUsernameAndPassword=exports.watchSignUpWithUsernameAndPassword=exports.watchGetCurrentUser=exports.Status=exports.UserAccessReducer=exports.ActionTypes=exports.Exception=exports.UserService=exports.ParseWrapperService=exports.BaseObject=undefined;var _schema=require('./schema');Object.defineProperty(exports,'BaseObject',{enumerable:true,get:function get(){return _schema.




BaseObject;}});var _services=require('./services');Object.defineProperty(exports,'ParseWrapperService',{enumerable:true,get:function get(){return _services.
ParseWrapperService;}});Object.defineProperty(exports,'UserService',{enumerable:true,get:function get(){return _services.UserService;}});Object.defineProperty(exports,'Exception',{enumerable:true,get:function get(){return _services.Exception;}});var _userAccess=require('./userAccess');Object.defineProperty(exports,'ActionTypes',{enumerable:true,get:function get(){return _userAccess.

ActionTypes;}});Object.defineProperty(exports,'UserAccessReducer',{enumerable:true,get:function get(){return _userAccess.
UserAccessReducer;}});Object.defineProperty(exports,'Status',{enumerable:true,get:function get(){return _userAccess.
Status;}});Object.defineProperty(exports,'watchGetCurrentUser',{enumerable:true,get:function get(){return _userAccess.
watchGetCurrentUser;}});Object.defineProperty(exports,'watchSignUpWithUsernameAndPassword',{enumerable:true,get:function get(){return _userAccess.
watchSignUpWithUsernameAndPassword;}});Object.defineProperty(exports,'watchSignInWithUsernameAndPassword',{enumerable:true,get:function get(){return _userAccess.
watchSignInWithUsernameAndPassword;}});Object.defineProperty(exports,'watchSignInWithFacebook',{enumerable:true,get:function get(){return _userAccess.
watchSignInWithFacebook;}});Object.defineProperty(exports,'watchSignOut',{enumerable:true,get:function get(){return _userAccess.
watchSignOut;}});var _reactNative=require('parse/react-native');var _reactNative2=_interopRequireDefault(_reactNative);var _facebook=require('./facebook');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}


var configParseServerSdk=exports.configParseServerSdk=function configParseServerSdk(serverUrl,applicationId,javascriptKey){
_reactNative2.default.initialize(applicationId,javascriptKey);
_reactNative2.default.serverURL=serverUrl;

_facebook.FacebookSDK.init();
_reactNative2.default.FacebookUtils.init();
};