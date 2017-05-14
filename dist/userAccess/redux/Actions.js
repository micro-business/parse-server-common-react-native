Object.defineProperty(exports,"__esModule",{value:true});

var _immutable=require('immutable');
var _v=require('uuid/v4');var _v2=_interopRequireDefault(_v);
var _ActionTypes=require('./ActionTypes');var _ActionTypes2=_interopRequireDefault(_ActionTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

Actions=function Actions(){_classCallCheck(this,Actions);};Actions.
acknowledgeFailedOperation=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_ACKNOWLEDGE_FAILED_OPERATION,
payload:payload};};Actions.


getCurrentUser=function(){return{
type:_ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER,
payload:(0,_immutable.Map)({
operationId:(0,_v2.default)()})};};Actions.



getCurrentUserSucceeded=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_SUCCEEDED,
payload:payload};};Actions.


getCurrentUserFailed=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_FAILED,
payload:payload};};Actions.


resetGetCurrentUserStatus=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_RESET_GET_CURRENT_USER_STATUS,
payload:payload};};Actions.


getCurrentUserInProgress=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_GET_CURRENT_USER_IN_PROGRESS,
payload:payload};};Actions.


signUpWithUsernameAndPassword=function(
username,
password,
emailAddress){return(
{
type:_ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD,
payload:(0,_immutable.Map)({
operationId:(0,_v2.default)(),
username:username,
password:password,
emailAddress:emailAddress})});};Actions.



signUpWithUsernameAndPasswordSucceeded=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_SUCCEEDED,
payload:payload};};Actions.


signUpWithUsernameAndPasswordFailed=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_SIGNUP_WITH_USERNAME_AND_PASSWORD_FAILED,
payload:payload};};Actions.


resetSignUpStatus=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_RESET_SIGNUP_STATUS,
payload:payload};};Actions.


signUpInProgress=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_SIGNUP_IN_PROGRESS,
payload:payload};};Actions.


signInWithUsernameAndPassword=function(
username,
password,
emailAddress){return(
{
type:_ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD,
payload:(0,_immutable.Map)({
operationId:(0,_v2.default)(),
username:username,
password:password,
emailAddress:emailAddress})});};Actions.



signInWithUsernameAndPasswordSucceeded=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_SUCCEEDED,
payload:payload};};Actions.


signInWithUsernameAndPasswordFailed=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_SIGNIN_WITH_USERNAME_AND_PASSWORD_FAILED,
payload:payload};};Actions.


resetSignInStatus=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_RESET_SIGNIN_STATUS,
payload:payload};};Actions.


signInInProgress=function(payload){return{
type:_ActionTypes2.default.USER_ACCESS_SIGNIN_IN_PROGRESS,
payload:payload};};exports.default=Actions;