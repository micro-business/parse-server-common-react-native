Object.defineProperty(exports,"__esModule",{value:true});exports.default=























watchSignInWithFacebook;var _effects=require('redux-saga/effects');var _services=require('../../services');var _Common=require('./Common');var _Common2=_interopRequireDefault(_Common);var _redux=require('../redux');var _Actions=require('../redux/Actions');var UserAccessActions=_interopRequireWildcard(_Actions);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var _marked=[signInWithFacebookAsync,watchSignInWithFacebook].map(regeneratorRuntime.mark);function signInWithFacebookAsync(action){var userInfo;return regeneratorRuntime.wrap(function signInWithFacebookAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return(0,_effects.put)(UserAccessActions.signInInProgress(_Common2.default.createOperationIdMap(action)));case 3:_context.next=5;return(0,_effects.call)(_services.UserService.signInWithFacebook,action.payload.get('scope'));case 5:userInfo=_context.sent;if(!userInfo){_context.next=11;break;}_context.next=9;return(0,_effects.put)(UserAccessActions.signInWithFacebookSucceeded(_Common2.default.createUserInfoMap(action,userInfo)));case 9:_context.next=13;break;case 11:_context.next=13;return(0,_effects.put)(UserAccessActions.signInWithFacebookSucceeded(_Common2.default.createEmptyUserInfoMap(action)));case 13:_context.next=19;break;case 15:_context.prev=15;_context.t0=_context['catch'](0);_context.next=19;return(0,_effects.put)(UserAccessActions.signInWithFacebookFailed(_Common2.default.createErrorMap(action,_context.t0.message)));case 19:case'end':return _context.stop();}}},_marked[0],this,[[0,15]]);}function watchSignInWithFacebook(){return regeneratorRuntime.wrap(function watchSignInWithFacebook$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return(
(0,_effects.takeLatest)(_redux.ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK,signInWithFacebookAsync));case 2:case'end':return _context2.stop();}}},_marked[1],this);}