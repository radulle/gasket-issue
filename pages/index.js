/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import GasketEmblem from "@gasket/assets/react/gasket-emblem";
import { NxIssueLib } from "nx-issue-lib";
// FIXME: does not work (remove css imports from _app.js), throws Error: Cannot find module '....gasket-issue/node_modules/react/jsx-runtime' imported from ..../gasket-issue/node_modules/nx-issue-lib/index.js Did you mean to import react/jsx-runtime.js?
// Tried adding resolve in webpack-config lifecycle.
const pageStyle = { textAlign: "center" };
const logoStyle = { width: "250px", height: "250px" };

export const IndexPage = () => (
  <div style={pageStyle}>
    <NxIssueLib />
    <Head title="Home" />
    <GasketEmblem style={logoStyle} />
    <h1>Welcome to Gasket!</h1>
    <p>
      To get started, edit <code>pages/index.js</code> and save to reload.
    </p>
    <p>
      <a href="https://gasket.dev">Learn Gasket</a>
    </p>
  </div>
);

export default IndexPage;
