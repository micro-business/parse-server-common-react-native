// @flow

import { Map } from 'immutable';
import ParseWrapperService from './ParseWrapperService';
import { FacebookSDK } from '../facebook';

export default class UserService {
  static signUpWithUsernameAndPassword = async (username: string, password: string, emailAddress: ?string, userType: ?string) => {
    const user = ParseWrapperService.createNewUser({
      username,
      password,
      emailAddress,
      userType,
    });
    const result = await user.signUp();

    return Map({
      id: result.id,
      username: result.getUsername(),
      emailAddress: result.getEmail(),
      emailAddressVerified: result.get('emailVerified'),
      userType: result.get('userType'),
    });
  };

  static signInWithUsernameAndPassword = async (username: string, password: string) => {
    const result = await ParseWrapperService.logIn(username, password);

    return Map({
      id: result.id,
      username: result.getUsername(),
      emailAddress: result.getEmail(),
      emailAddressVerified: result.get('emailVerified'),
      userType: result.get('userType'),
    });
  };

  static signInWithFacebook = async (scope: string, userType: ?string) => {
    await ParseWrapperService.logInWithFacebook(scope);
    const userInfo = await UserService.getCurrentUserInfo();
    const user = await ParseWrapperService.getCurrentUserAsync();

    user.set('providerEmail', userInfo.get('emailAddress'));

    if (userType) {
      user.set('userType', userType);
    }

    await user.save();

    return userInfo;
  };

  static signOut = () => ParseWrapperService.logOut();

  static sendEmailVerification = async () => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    // Re-saving the email address triggers the logic in parse server back-end to re-send the verification email
    user.setEmail(user.getEmail());

    return user.save();
  };

  static resetPassword = async (emailAddress: string) => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    return user.requestPasswordReset(emailAddress);
  };

  static updateUserDetails = async ({
    username, password, emailAddress, userType,
  } = {}, user, sessionToken) => {
    const finalUser = user || (await ParseWrapperService.getCurrentUserAsync());

    if (username) {
      finalUser.setUsername(username);
    }

    if (password) {
      finalUser.setPassword(password);
    }

    if (emailAddress) {
      finalUser.setEmail(emailAddress);
    }

    if (userType) {
      finalUser.set('userType', userType);
    }

    return finalUser.save(null, { sessionToken });
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
          userType: user.get('userType'),
        });
      }

      return Map({
        id: user.id,
        username: user.getUsername(),
        emailAddress: user.getEmail(),
        emailAddressVerified: user.get('emailVerified'),
        userType: user.get('userType'),
      });
    }

    return undefined;
  };

  static getCurrentUserSession = async () => {
    const user = await ParseWrapperService.getCurrentUserAsync();

    return user ? user.getSessionToken() : null;
  };

  static getUserById = async (id: string, sessionToken: ?string) => {
    const result = await ParseWrapperService.createUserQuery()
      .equalTo('objectId', id)
      .first({ sessionToken });

    if (result) {
      return result;
    }

    throw new Error(`No user found with id: ${id}`);
  };

  static getUser = async (username: string, sessionToken: ?string) => {
    const result = await ParseWrapperService.createUserQuery()
      .equalTo('username', username)
      .first({ sessionToken });

    if (result) {
      return result;
    }

    throw new Error(`No user found with username: ${username}`);
  };

  static getUserInfo = async (username: string, sessionToken: ?string) => {
    const result = await UserService.getUser(username, sessionToken);

    return Map({
      id: result.id,
      username: result.getUsername(),
      emailAddress: result.getEmail(),
      userType: result.get('userType'),
      providerEmail: result.get('providerEmail'),
    });
  };

  static getUserInfoById = async (id: string, sessionToken: ?string) => {
    const result = await UserService.getUserById(id, sessionToken);

    return Map({
      id: result.id,
      username: result.getUsername(),
      emailAddress: result.getEmail(),
      userType: result.get('userType'),
      providerEmail: result.get('providerEmail'),
    });
  };
}
