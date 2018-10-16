import thunk from 'redux-thunk';
// TODO: stitch client
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { applyMiddleware, createStore, compose, Middleware, Store } from 'redux';

import { AppState, reducers } from '../state';

const ENV_PROD = 'production';

const initialState: AppState = {
  // players: {},
  routing: {
    location: null
  }
};

export class Harness {
  public history: History;
  private middlewares: Middleware[];
  public store: Store<AppState>;

  constructor(
    // public stitchClient: StitchClient,
    public env: ProcessEnv,
  ) {
    this.history = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
    this.middlewares = [thunk.withExtraArgument({ env })]; // TODO: inject stitch client

    let composeEnhancers: <R>(a: R) => R;
    if (this.env.NODE_ENV !== ENV_PROD) {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
      composeEnhancers = compose;
    }

    this.store = createStore(
      reducers,
      initialState,
      composeEnhancers(applyMiddleware(...this.middlewares))
    );
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}
