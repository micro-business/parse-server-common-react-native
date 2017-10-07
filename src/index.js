// @flow

import Parse from 'parse/react-native';
import { FacebookSDK } from './facebook';

export { BaseObject } from './schema';
export { ParseWrapperService, UserService } from './services';
export {
  ActionTypes as UserAccessActionTypes,
  UserAccessReducer,
  Status as UserAccessStatus,
  watchGetCurrentUser,
  watchSignUpWithUsernameAndPassword,
  watchSignInWithUsernameAndPassword,
  watchSignInWithFacebook,
  watchSignOut,
} from './userAccess';

export const configParseServerSdk = (serverUrl: string, applicationId: string, javascriptKey: string) => {
  Parse.initialize(applicationId, javascriptKey);
  Parse.serverURL = serverUrl;

  FacebookSDK.init();
  Parse.FacebookUtils.init();
};
