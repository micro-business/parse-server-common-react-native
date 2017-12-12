// @flow

import AsyncStorage from 'react-native/Libraries/Storage/AsyncStorage';
import Parse from 'parse/react-native';
import { FacebookSDK } from './facebook';

export { BaseObject } from './schema';
export { ParseWrapperService, UserService } from './services';
export {
  watchGetCurrentUser,
  watchSignUpWithUsernameAndPassword,
  watchSignInWithUsernameAndPassword,
  watchSignInWithFacebook,
  watchSignOut,
} from './userAccess';

export const configParseServerSdk = (serverUrl: string, applicationId: string, javascriptKey: string) => {
  Parse.initialize(applicationId, javascriptKey);
  Parse.serverURL = serverUrl;

  Parse.setAsyncStorage(AsyncStorage);

  FacebookSDK.init();
  Parse.FacebookUtils.init();
};
