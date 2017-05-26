Object.defineProperty(exports,"__esModule",{value:true});var _this=this;

var _immutable=require('immutable');
var _ParseWrapperService=require('./ParseWrapperService');var _ParseWrapperService2=_interopRequireDefault(_ParseWrapperService);
var _Exception=require('./Exception');var _Exception2=_interopRequireDefault(_Exception);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

UserService=function UserService(){_classCallCheck(this,UserService);};UserService.
signUpWithUsernameAndPassword=function _callee(username,password,emailAddress){var user,result;return regeneratorRuntime.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:
user=_ParseWrapperService2.default.createNewUser();

user.setUsername(username);
user.setPassword(password);

if(emailAddress){
user.setEmail(emailAddress);
}_context.next=6;return regeneratorRuntime.awrap(

user.signUp());case 6:result=_context.sent;return _context.abrupt('return',

(0,_immutable.Map)({
id:result.id,
username:result.getUsername(),
emailAddress:result.getEmail(),
emailAddressVerified:result.get('emailVerified')}));case 8:case'end':return _context.stop();}}},null,_this);};UserService.



signInWithUsernameAndPassword=function _callee2(username,password){var result;return regeneratorRuntime.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return regeneratorRuntime.awrap(
_ParseWrapperService2.default.logIn(username,password));case 2:result=_context2.sent;return _context2.abrupt('return',

(0,_immutable.Map)({
id:result.id,
username:result.getUsername(),
emailAddress:result.getEmail(),
emailAddressVerified:result.get('emailVerified')}));case 4:case'end':return _context2.stop();}}},null,_this);};UserService.



signOut=function(){return _ParseWrapperService2.default.logOut();};UserService.

sendEmailVerification=function _callee3(){var user;return regeneratorRuntime.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.next=2;return regeneratorRuntime.awrap(
_ParseWrapperService2.default.getCurrentUserAsync());case 2:user=_context3.sent;


user.setEmail(user.getEmail());return _context3.abrupt('return',

user.save());case 5:case'end':return _context3.stop();}}},null,_this);};UserService.


resetPassword=function _callee4(emailAddress){var user;return regeneratorRuntime.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return regeneratorRuntime.awrap(
_ParseWrapperService2.default.getCurrentUserAsync());case 2:user=_context4.sent;return _context4.abrupt('return',

user.requestPasswordReset(emailAddress));case 4:case'end':return _context4.stop();}}},null,_this);};UserService.


updatePassword=function _callee5(newPassword){var user;return regeneratorRuntime.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.next=2;return regeneratorRuntime.awrap(
_ParseWrapperService2.default.getCurrentUserAsync());case 2:user=_context5.sent;

user.setPassword(newPassword);return _context5.abrupt('return',

user.save());case 5:case'end':return _context5.stop();}}},null,_this);};UserService.


getCurrentUserInfo=function _callee6(){var user;return regeneratorRuntime.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return regeneratorRuntime.awrap(
_ParseWrapperService2.default.getCurrentUserAsync());case 2:user=_context6.sent;return _context6.abrupt('return',

(0,_immutable.Map)({
id:user.id,
username:user.getUsername(),
emailAddress:user.getEmail(),
emailAddressVerified:user.get('emailVerified')}));case 4:case'end':return _context6.stop();}}},null,_this);};UserService.



getUserInfo=function _callee7(username){var results;return regeneratorRuntime.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:_context7.next=2;return regeneratorRuntime.awrap(
_ParseWrapperService2.default.createUserQuery().equalTo('username',username).find());case 2:results=_context7.sent;if(!(

results.length===0)){_context7.next=7;break;}throw(
new _Exception2.default('No user found with username: '+username));case 7:if(!(
results.length>1)){_context7.next=11;break;}throw(
new _Exception2.default('Multiple user found with username: '+username));case 11:return _context7.abrupt('return',

(0,_immutable.Map)({
id:results[0].id,
username:results[0].getUsername()}));case 12:case'end':return _context7.stop();}}},null,_this);};exports.default=UserService;