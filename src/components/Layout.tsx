import React from "react";
import { Helmet } from "react-helmet";
import PropTypes, { InferProps } from "prop-types";

import { withPrefix } from "gatsby";

// import Amplify, {
// Analytics,
// Storage,
// API,
// graphqlOperation
// } from "aws-amplify";
import Amplify from "aws-amplify";

import awsconfig from "../aws-exports";

import {
  // ConfirmSignIn,
  // ConfirmSignUp,
  // ForgotPassword,
  // RequireNewPassword,
  // SignIn,
  // SignUp,
  // VerifyContact,
  withAuthenticator
} from "aws-amplify-react";

import CustomProperties from "react-custom-properties";

import { CssBaseline, Typography } from "@material-ui/core";

import useSiteMetadata from "./SiteMetadata";

import AmplifyTheme from "./Amplify/Theme";
import MaterialTheme from "./MaterialUI/Theme";

import ResponsiveDrawer from "./ResponsiveDrawer";

// import "../styles/all.scss";

Amplify.configure(awsconfig);

const TemplateWrapper = ({
  children,
  pathname
}: InferProps<typeof TemplateWrapper.propTypes>): ReactElement => {
  const { title, description } = useSiteMetadata();

  return (
    <MaterialTheme>
      <Typography component="div">
        <Helmet
          bodyAttributes={{
            class: "has-AppBar-fixed-top loading",
            pathname
          }}
        >
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link rel="icon" type="image/svg+xml" href="/img/logomark.svg" />

          {/* {iconsConfiguration.map((icon, key) => (
          <link
            key={key}
            rel="icon"
            type="image/${icon.size}"
            href={`${withPrefix("/")}img/favicon-${icon.size}x${icon.size}.${
              icon.type
            }`}
            sizes="${icon.size}x${icon.size}"
          />
        ))} */}

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

        <CustomProperties
          global
          properties={{ "--branding-color": "#FF0000" }}
        />

        <CssBaseline />

        <ResponsiveDrawer>{children}</ResponsiveDrawer>
      </Typography>
    </MaterialTheme>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.node.isRequired
};

export default withAuthenticator(
  TemplateWrapper,
  false, // set to true to show default AWS-supplied log out button
  [],
  null,
  AmplifyTheme
);
