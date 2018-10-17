import actionCreatorFactory from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';
import { AppState, AsyncContext } from '../';
import { GoogleRedirectCredential } from 'mongodb-stitch-browser-sdk'

const create = actionCreatorFactory('auth');
const createAsync = asyncFactory<AppState, AsyncContext>(create);

export const redirect = createAsync('redirect', (_params, _dispatch, _getState, { client }) => {
  if (client.auth.hasRedirectResult()) {
    client.auth.handleRedirectResult();
  }

  if (!client.auth.isLoggedIn) {
    client.auth.loginWithRedirect(new GoogleRedirectCredential());
  }
}
);

export const logout = createAsync('logout', (_params, _dispatch, _getState, { client }) => 
  client.auth.logout()
);
