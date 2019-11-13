import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes, { InferProps } from "prop-types";

import { withPrefix } from "gatsby";

import {
  AppBar,
  CssBaseline,
  // Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";

// import Amplify, {
// Analytics,
// Storage,
// API,
// graphqlOperation
// } from "aws-amplify";
import Amplify from "aws-amplify";

import BottomNavigationMobile from "./BottomNavigationMobile";
import DrawerContent from "./DrawerContent";
import Footer from "./Footer";
import DrawerResponsive from "./DrawerResponsive";
import useSiteMetadata from "./SiteMetadata";

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

import AmplifyTheme from "./Amplify/Theme";
import MaterialTheme from "./MaterialUI/Theme";

// import "../styles/all.scss";

Amplify.configure(awsconfig);

const drawerWidth = 240;

const gridTemplateAreasSmall = `"header" "content" "footer"`;
const gridTemplateAreasLarge = `"header header" "navigation content" "navigation footer"`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateAreas: gridTemplateAreasSmall,
      gridTemplateColumns: `1fr`,
      gridTemplateRows: "56px 1fr auto",
      // [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      //   gridTemplateAreas: gridTemplateAreasLarge,
      //   gridTemplateColumns: `${drawerWidth}px 1fr`,
      //   gridTemplateRows: "48px 1fr auto"
      // },
      [theme.breakpoints.up("sm")]: {
        gridTemplateAreas: gridTemplateAreasLarge,
        gridTemplateColumns: `${drawerWidth}px 1fr`,
        gridTemplateRows: "64px 1fr auto"
      },
      minHeight: "100vh"
    },
    appBar: {
      gridArea: "header",
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    drawer: {
      gridArea: "navigation",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar
  })
);

const Layout = ({
  children,
  pathname
}: InferProps<typeof Layout.propTypes>): ReactElement => {
  const { title, description } = useSiteMetadata();
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <MaterialTheme>
      <Typography className={classes.root} component="div">
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

        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <DrawerResponsive
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        >
          <DrawerContent />
        </DrawerResponsive>

        {children}

        <Hidden smDown>
          <Footer />
        </Hidden>

        <Hidden mdUp>
          <BottomNavigationMobile />
        </Hidden>
      </Typography>
    </MaterialTheme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.node.isRequired
};

export default withAuthenticator(
  Layout,
  false, // set to true to show default AWS-supplied log out button
  [],
  null,
  AmplifyTheme
);
