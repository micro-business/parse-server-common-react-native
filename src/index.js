// @flow

import Parse from 'parse/react-native';

export { BaseObject } from './schema';
export { ParseWrapperService, UserService } from './services';
export {
  ActionTypes,
  UserAccessReducer,
  Status,
  watchGetCurrentUser,
  watchSignUpWithUsernameAndPassword,
  watchSignInWithUsernameAndPassword,
} from './userAccess';

export function configParseServerSdk(
  serverUrl: string,
  applicationId: string,
  javascriptKey: string,
) {
  Parse.initialize(applicationId, javascriptKey);
  Parse.serverURL = serverUrl;
}
