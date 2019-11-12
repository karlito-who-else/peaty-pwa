import PropTypes, { InferProps } from "prop-types";
import React, { ReactElement } from "react";

import {
  AppBar,
  createStyles,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useTheme
} from "@material-ui/core";
import {
  Inbox as InboxIcon,
  Mail as MailIcon,
  Menu as MenuIcon
} from "@material-ui/icons";

import BottomNavigationDesktop from "../BottomNavigationDesktop";
import BottomNavigationMobile from "../BottomNavigationMobile";
import useSiteMetadata from "../SiteMetadata";

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
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        gridTemplateAreas: gridTemplateAreasLarge,
        gridTemplateColumns: `${drawerWidth}px 1fr`,
        gridTemplateRows: "48px 1fr auto"
      },
      [theme.breakpoints.up("sm")]: {
        gridTemplateAreas: gridTemplateAreasLarge,
        gridTemplateColumns: `${drawerWidth}px 1fr`,
        gridTemplateRows: "64px 1fr auto"
      },
      minHeight: "100vh"
    },
    drawer: {
      gridArea: "navigation",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth
      }
    },
    appBar: {
      gridArea: "header",
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth
      // },
      gridArea: "content"
      // padding: theme.spacing(3)
    },
    bottomNavigation: {
      gridArea: "footer"
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth
      // }
    }
  })
);

export const ResponsiveDrawer = ({
  children
}: InferProps<typeof DrawerMain.propTypes>): ReactElement => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { title } = useSiteMetadata();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
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
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        {children}
      </div>
      <footer className={classes.bottomNavigation}>
        <Hidden smDown>
          <BottomNavigationDesktop />
        </Hidden>

        <Hidden mdUp>
          <BottomNavigationMobile />
        </Hidden>
      </footer>
    </div>
  );
};

ResponsiveDrawer.propTypes = {
  children: PropTypes.node.isRequired
};

export default ResponsiveDrawer;
