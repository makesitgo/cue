import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { Harness, Router } from "./app";
import { Stitch } from "mongodb-stitch-browser-sdk";

require("../static/favicon.ico");
require("../static/main.less");

const CLIENT_APP_ID = "mongodb-cue-rirpg";

if (!Stitch.hasAppClient(CLIENT_APP_ID)) {
  Stitch.initializeDefaultAppClient(CLIENT_APP_ID);
}

const app = new Harness(Stitch.defaultAppClient, process.env);

const renderApp = (Component: typeof Router) =>
  render(
    <Provider store={app.store}>
      <AppContainer>
        <Component history={app.history} />
      </AppContainer>
    </Provider>,
    document.getElementById("root")
  );

renderApp(Router);

if ((module as any).hot) {
  (module as any).hot.accept("./app/router", () => {
    const appRouter = require("./app/router");
    renderApp(appRouter);
  });
}
