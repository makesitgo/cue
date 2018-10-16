import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Harness, Router } from './app';

// TODO: use stitch client factory

require('../static/favicon.ico');
require('../static/main.less');

// TODO: extract url and credentials to env vars
// ApgClientFactory.create('http://localhost:8080', { username: 'admin', password: 'Ma3pb$69' }).then(
//   client => {
    const app = new Harness(process.env);

    const renderApp = (Component: typeof Router) =>
      render(
        <Provider store={app.store}>
          <AppContainer>
            <Component history={app.history} />
          </AppContainer>
        </Provider>,
        document.getElementById('root')
      );

    renderApp(Router);

    if ((module as any).hot) {
      (module as any).hot.accept('./app/router', () => {
        const appRouter = require('./app/router');
        renderApp(appRouter);
      });
    }
//   }
// );
