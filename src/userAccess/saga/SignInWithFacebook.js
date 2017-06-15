// @flow

import { Map } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../../services';
import Common from './Common';
import { ActionTypes } from '../redux';
import * as UserAccessActions from '../redux/Actions';
import { FacebookSDK } from '../../facebook';

const queryFacebookAPI = async (path, ...args): Promise =>
  new Promise((resolve, reject) => {
    FacebookSDK.api(path, ...args, (response) => {
      if (response && !response.error) {
        resolve(response);
      } else {
        reject(response && response.error);
      }
    });
  });

function* signInWithFacebookAsync(action) {
  try {
    yield put(UserAccessActions.signInInProgress(Common.createOperationIdMap(action)));

    const userInfo = yield call(UserService.signInWithFacebook, action.payload.get('scope'));
    const profile = yield queryFacebookAPI('/me', { fields: 'name,email' });

    yield put(
      UserAccessActions.signInWithFacebookSucceeded(
        Map({
          operationId: action.payload.get('operationId'),
          userExists: true,
          userInfo: {
            id: profile.id,
            name: profile.name,
          },
        }),
      ),
    );
  } catch (exception) {
    yield put(UserAccessActions.signInWithFacebookFailed(Common.createErrorMap(action, exception.message)));
  }
}

export default function* watchSignInWithFacebook() {
  yield takeLatest(ActionTypes.USER_ACCESS_SIGNIN_WITH_FACEBOOK, signInWithFacebookAsync);
}
