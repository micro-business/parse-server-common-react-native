// @flow

import { Map } from 'immutable';
import ParseWrapperService from './ParseWrapperService';
import Exception from './Exception';
import { FacebookSDK } from '../facebook';

export default class UserService {
  static signUpWithUsernameAndPassword = async (username: string, password: string, emailAddress: ?string) => {
    const user = ParseWrapperService.createNewUser();

    user.setUsername(username);
    user.setPassword(password);

    if (emailAddress) {
      user.setEmail(emailAddress);
    }

    const result = await user.signUp();

    return Map({
      id: result.id,
      username: result.getUsername(),
      emailAddress: result.getEmail(),
      emailAddressVerified: result.get('emailVerified'),
    });
  };

  static signInWithUsernameAndPassword = async (username: string, password: string) => {
    const result = await ParseWrapperService.logIn(username, password);

    return Map({
      id: result.id,
      username: result.getUsername(),
      emailAddress: result.getEmail(),
      emailAddressVerified: result.get('emailVerified'),
    });
  };

  static signInWithFacebook = async (scope: string) => {
    await ParseWrapperService.logInWithFacebook(scope);
    const userInfo = await UserService.getCurrentUserInfo();
    const user = await ParseWrapperService.getCurrentUserAsync();

    user.set('providerEmail', userInfo.get('emailAddress'));

    await user.save();

    return userInfo;
  };

  static signOut = async () => ParseWrapperService.logOut();

  static sendEmailVerification = async () => {
    const user = await ParseWrapperService.getCurrentUserAsync();
    // Re-saving the email address triggers the logic in parse server back-end to re-send the verification email
    user.setEmail(user.getEmail());

    await user.save();
  };

  static resetPassword = async (emailAddress: string) => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    await user.requestPasswordReset(emailAddress);
  };

  static updatePassword = async (newPassword: string) => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    user.setPassword(newPassword);

    await user.save();
  };

  static queryFacebookAPI = (path, ...args): Promise =>
    new Promise((resolve, reject) => {
      FacebookSDK.api(path, ...args, (response) => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response && response.error);
        }
      });
    });

  static getCurrentUserInfo = async () => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    if (user) {
      const authData = user.get('authData');

      if (authData && authData.facebook) {
        const profile = await UserService.queryFacebookAPI('/me', {
          fields: 'name,email,picture',
        });

        return Map({
          id: user.id,
          username: user.getUsername(),
          name: profile.name,
          avatar: profile.picture,
          emailAddress: profile.email,
          emailAddressVerified: true,
        });
      }
      return Map({
        id: user.id,
        username: user.getUsername(),
        emailAddress: user.getEmail(),
        emailAddressVerified: user.get('emailVerified'),
      });
    }
    return undefined;
  };

  static getCurrentUserSession = async () => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    return user ? user.getSessionToken() : null;
  };

  static getUserForProvidedSessionToken = async (sessionToken) => {
    const result = await ParseWrapperService.createSessionQuery().equalTo('sessionToken', sessionToken).first();

    return result ? result.fetch() : null;
  };

  static getUser = async (username: string) => {
    const result = await ParseWrapperService.createUserQuery().equalTo('username', username).first();

    if (!result) {
      throw new Exception(`No user found with username: ${username}`);
    } else {
      return result;
    }
  };

  static getUserInfo = async (username: string) => {
    const result = await UserService.getUser(username);

    return Map({
      id: result.id,
      username: result.getUsername(),
    });
  };
}
