import PropTypes, { InferProps } from "prop-types";
import React, { ReactElement } from "react";

import { Drawer, Hidden, Theme } from "@material-ui/core";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";

export const DrawerResponsive = ({
  children,
  drawerWidth,
  mobileOpen,
  handleDrawerToggle
}: InferProps<typeof DrawerMain.propTypes>): ReactElement => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth
      }
    })
  );

  const classes = useStyles();
  const theme = useTheme();

  return (
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
          {children}
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
          {children}
        </Drawer>
      </Hidden>
    </nav>
  );
};

DrawerResponsive.propTypes = {
  children: PropTypes.node,
  drawerWidth: PropTypes.number,
  mobileOpen: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

export default DrawerResponsive;
