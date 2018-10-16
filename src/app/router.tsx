import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { ErrorBoundary, Home } from '../view';
import { urls } from '../utils';

export class Router extends React.Component<any, any> {
  constructor(props: any, context?: any) {
    super(props, context);
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Switch>
            <Route exact path={urls.home()} component={Home} />
          </Switch>
        </ErrorBoundary>
      </ConnectedRouter>
    );
  }
}
