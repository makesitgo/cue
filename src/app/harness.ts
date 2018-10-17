import thunk from 'redux-thunk';
import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import {
  applyMiddleware,
  createStore,
  compose,
  Middleware,
  Store
} from 'redux';
import {
  AppState,
  initialAppState,
  reducers,
  redirect,
  watchTable
} from '../state';

const ENV_PROD = 'production';

export class Harness {
  public history: History;
  private middlewares: Middleware[];
  public store: Store<AppState>;

  constructor(public client: StitchAppClient, public env: ProcessEnv) {
    this.history =
      typeof window !== 'undefined'
        ? createBrowserHistory()
        : createMemoryHistory();
    this.middlewares = [thunk.withExtraArgument({ client, env })];

    let composeEnhancers: <R>(a: R) => R;
    if (this.env.NODE_ENV !== ENV_PROD) {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
      composeEnhancers = compose;
    }

    this.store = createStore(
      reducers,
      initialAppState,
      composeEnhancers(applyMiddleware(...this.middlewares))
    );

    this.store.dispatch<any>(redirect.action());

    // TODO: hack alert: this assumes we are watching the NYC table, ideally this gets pushed to TableView.tsx
    this.store.dispatch<any>(watchTable.action());
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}
