// @flow

import { Map } from 'immutable';

export default class Common {
  static createOperationIdMap = action =>
    Map({
      operationId: action.payload.get('operationId'),
    });

  static createUserInfoMap = (action, userInfo) =>
    Map({
      operationId: action.payload.get('operationId'),
      userExists: true,
      userInfo,
    });

  static createEmptyUserInfoMap = action =>
    Map({
      operationId: action.payload.get('operationId'),
      userExists: false,
    });

  static createErrorMap = (action, errorMessage) =>
    Map({
      operationId: action.payload.get('operationId'),
      errorMessage,
    });
}
