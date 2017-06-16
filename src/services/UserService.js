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

    user.setEmail(userInfo.get('emailAddress'));
    user.set('emailVerified', userInfo.get('emailVerified'));

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
        const profile = await UserService.queryFacebookAPI('/me', { fields: 'name,email' });

        return Map({
          id: user.id,
          username: user.getUsername(),
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

  static getUserInfo = async (username: string) => {
    const results = await ParseWrapperService.createUserQuery().equalTo('username', username).find();

    if (results.length === 0) {
      throw new Exception(`No user found with username: ${username}`);
    } else if (results.length > 1) {
      throw new Exception(`Multiple user found with username: ${username}`);
    } else {
      return Map({
        id: results[0].id,
        username: results[0].getUsername(),
      });
    }
  };
}
