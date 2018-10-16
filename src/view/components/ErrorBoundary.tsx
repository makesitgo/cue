import * as React from 'react';

interface Props {
  children: JSX.Element | React.ReactNode;
}

interface State {
  err?: Error;
}

const defaultState: State = {
  err: undefined,
};

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = defaultState;

  constructor(props: Props, context?: any) {
    super(props, context);
  }

  componentDidCatch(err: Error, info: Object): void {
    this.setState((state) => ({ ...state, err }));
  }

  render() {
    const { children } = this.props;
    const { err } = this.state;
    if (err) {
      return (
        <div className="Error">
          <h1>Oops...this error is no yolk!</h1>
          <p>Try refreshing the page.  If the problem persists, then we are already aware of this issue. Hang tight!</p>
          <hr />
          <h5>{err.name}</h5>
          <pre>{err.message}</pre>
        </div>
      );
    }

    return children;
  }
}
