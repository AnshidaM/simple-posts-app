import React, { Fragment } from "react";
import MainNavigation from "./main-navigation";
const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
