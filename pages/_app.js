import React from "react";
import PropTypes from "prop-types";
const { nextRedux } = require("../redux/store");
import "./global.css";
import "nx-issue-lib/index.css";
// FIXME: In index.js does not work unless in nx-issue-lib/package.json module and exports remover or provided in exports
// FIXME: In global.css does not work unless in nx-issue-lib/package.json module and exports removed

// Simple functional App component which can be wrapped
function WrappedApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

WrappedApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
};

// wrap the app with higher-order components
export default [nextRedux.withRedux].reduce((cmp, hoc) => hoc(cmp), WrappedApp);
