var _require=



























require('react-native-fbsdk'),LoginManager=_require.LoginManager,AccessToken=_require.AccessToken,GraphRequest=_require.GraphRequest,GraphRequestManager=_require.GraphRequestManager;

var emptyFunction=function emptyFunction(){};
var mapObject=require('fbjs/lib/mapObject');












var _authResponse=null;

function loginWithFacebookSDK(options){var scope,permissions,loginResult,accessToken;return regeneratorRuntime.async(function loginWithFacebookSDK$(_context){while(1){switch(_context.prev=_context.next){case 0:
scope=options.scope||'public_profile';
permissions=scope.split(',');_context.next=4;return regeneratorRuntime.awrap(

LoginManager.logInWithReadPermissions(permissions));case 4:loginResult=_context.sent;if(!
loginResult.isCancelled){_context.next=7;break;}throw(
new Error('Canceled by user'));case 7:_context.next=9;return regeneratorRuntime.awrap(


AccessToken.getCurrentAccessToken());case 9:accessToken=_context.sent;if(
accessToken){_context.next=12;break;}throw(
new Error('No access token'));case 12:


_authResponse={
userID:accessToken.userID,
accessToken:accessToken.accessToken,
expiresIn:Math.round((accessToken.expirationTime-Date.now())/1000)};return _context.abrupt('return',

_authResponse);case 14:case'end':return _context.stop();}}},null,this);}


var FacebookSDK={
init:function init(){

window.FB=FacebookSDK;
},

login:function login(callback,options){
loginWithFacebookSDK(options).then(function(authResponse){return callback({authResponse:authResponse});},function(error){return callback({error:error});});
},

getAuthResponse:function getAuthResponse(){
return _authResponse;
},

logout:function logout(){
LoginManager.logOut();
},
























api:function api(path){
var argByType={};for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}
args.forEach(function(arg){
argByType[typeof arg]=arg;
});

var httpMethod=(argByType.string||'get').toUpperCase();
var params=argByType.object||{};
var callback=argByType.function||emptyFunction;




var parameters=mapObject(params,function(value){return{string:value};});

function processResponse(error,result){

if(!error&&typeof result==='string'){
try{
result=JSON.parse(result);
}catch(e){
error=e;
}
}

var data=error?{error:error}:result;
callback(data);
}

var request=new GraphRequest(path,{parameters:parameters,httpMethod:httpMethod},processResponse);
new GraphRequestManager().addRequest(request).start();
}};


module.exports=FacebookSDK;