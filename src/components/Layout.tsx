import React, { useState } from "react";
// import { Helmet } from "react-helmet";
import PropTypes, { InferProps } from "prop-types";

// import { withPrefix } from "gatsby";

import {
  AppBar,
  Box,
  Container,
  // CssBaseline,
  // Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";

import Logotype from "../img/logo/logotype.inline.svg";

import App from "./App";
import BottomNavigationMobile from "./BottomNavigationMobile";
import DrawerContent from "./DrawerContent";
import Footer from "./Footer";
import DrawerResponsive from "./DrawerResponsive";
import useSiteMetadata from "./SiteMetadata";

// import CustomProperties from "react-custom-properties";

// import MaterialTheme from "./MaterialUI/Theme";

// import "../styles/all.scss";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gridTemplateAreas: `"header" "content" "footer"`,
      // gridTemplateColumns: `1fr`,
      gridTemplateRows: "56px 1fr auto",
      // [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      //   gridTemplateAreas: gridTemplateAreasLarge,
      //   gridTemplateColumns: `${drawerWidth}px 1fr`,
      //   gridTemplateRows: "48px 1fr auto"
      // },
      [theme.breakpoints.up("sm")]: {
        // gridTemplateAreas: gridTemplateAreasLarge,
        // gridTemplateColumns: `${drawerWidth}px 1fr`,
        gridTemplateRows: "64px 1fr auto"
      },
      minHeight: "100vh"
    },
    appBar: {
      gridArea: "header"
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${drawerWidth}px)`
      // }
    },
    drawer: {
      gridArea: "navigation",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth
      }
    },
    footer: {
      gridArea: "footer"
    },
    footerContainer: {
      // backgroundColor: theme.palette.background.paper,
      // backgroundColor: theme.palette.primary.main,
      display: "grid",
      gap: `${theme.spacing(2)}px`,
      gridAutoRows: `minmax(100px, auto)`,
      gridTemplateColumns: `repeat(2, 1fr)`,
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: `repeat(3, 1fr)`
      }
      // padding: theme.spacing(2)
    },
    menuButton: {
      marginRight: theme.spacing(2)
      // [theme.breakpoints.up("sm")]: {
      //   display: "none"
      // }
    },
    toolbar: theme.mixins.toolbar
  })
);

const useStylesFooter = makeStyles((theme: Theme) =>
  createStyles({
    copyright: {
      alignContent: "center",
      display: "grid",
      gap: `${theme.spacing(1)}px`,
      gridAutoFlow: "column",
      justifyContent: "center"
    },
    full: {
      gridColumn: `auto / span 2`,
      [theme.breakpoints.up("lg")]: {
        gridColumn: `auto / span 3`
      }
    }
  })
);

const Layout = ({
  children,
  pathname
}: InferProps<typeof Layout.propTypes>): ReactElement => {
  const { title } = useSiteMetadata();
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const classesFooter = useStylesFooter();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <App pathname={pathname}>
      <Typography className={classes.root} component="div">
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
            {/* <Typography variant="h6" noWrap>
              {title}
            </Typography> */}
            <Logotype
              alt={title}
              fill="#fff"
              style={{ height: "auto", width: "240px" }}
            />
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
          <Box
            bgcolor="background.paper"
            className={classes.footer}
            component="footer"
          >
            <Container className={classes.footerContainer} fixed>
              <Footer classesProvided={classesFooter} showTitles={true} />
            </Container>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <BottomNavigationMobile />
        </Hidden>
      </Typography>
    </App>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.node.isRequired
};

export default Layout;
