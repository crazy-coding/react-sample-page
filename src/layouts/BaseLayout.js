import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "components/Header.js";
import Footer from "components/Footer.js";
import WalletPopup from "components/WalletPopup.js";

import Home from "views/Home.js";

class Base extends React.Component {
  render() {
    return (
      <>
        <Header brandText="Home Page" />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <WalletPopup />
        <Footer />
      </>
    );
  }
}

export default Base;
