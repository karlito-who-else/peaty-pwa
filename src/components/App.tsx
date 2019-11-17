import React from "react";
import { Helmet } from "react-helmet";
import PropTypes, { InferProps } from "prop-types";

import { withPrefix } from "gatsby";

import {
  // AppBar,
  CssBaseline
  // Drawer,
  // Hidden,
  // IconButton,
  // Toolbar,
  // Typography
} from "@material-ui/core";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
// import { Menu as MenuIcon } from "@material-ui/icons";

// import Logotype from "../img/logo/logotype.inline.svg";

// import BottomNavigationMobile from "./BottomNavigationMobile";
// import DrawerContent from "./DrawerContent";
// import Footer from "./Footer";
// import DrawerResponsive from "./DrawerResponsive";
import useSiteMetadata from "./SiteMetadata";

import CustomProperties from "react-custom-properties";

import MaterialTheme from "./MaterialUI/Theme";
// import "../styles/all.scss";

const App = ({
  children,
  pathname
}: InferProps<typeof App.propTypes>): ReactElement => {
  const { title, description } = useSiteMetadata();

  return (
    <MaterialTheme>
      <Helmet
        bodyAttributes={{
          class: "loading",
          pathname
        }}
      >
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <script
          async
          crossOrigin="anonymous"
          integrity="sha384-I1iiXcTSM6j2xczpDckV+qhhbqiip6FyD6R5CpuqNaWXvyDUvXN5ZhIiyLQ7uuTh"
          src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.10/pwacompat.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>

      <CustomProperties global properties={{ "--branding-color": "#FF0000" }} />

      <CssBaseline />

      {children}
    </MaterialTheme>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.node.isRequired
};

export default App;
