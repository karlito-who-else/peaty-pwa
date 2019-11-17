import clsx from "clsx";
import PropTypes, { InferProps } from "prop-types";
import React, { ReactElement } from "react";

import {
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Inbox as InboxIcon, Mail as MailIcon } from "@material-ui/icons";

import useSiteMetadata from "../SiteMetadata";
import Footer from "../Footer";
import Logotype from "../../img/logo/logotype.inline.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      alignContent: "center",
      display: "grid",
      justifyContent: "center",
      padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar
  })
);

const useStylesFooter = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "transparent"
    },
    copyright: {
      padding: theme.spacing(2)
    }
  })
);

export const DrawerContent = ({
  children
}: InferProps<typeof DrawerMain.propTypes>): ReactElement => {
  const { title } = useSiteMetadata();
  const classes = useStyles();
  const classesFooter = useStylesFooter();

  return (
    <React.Fragment>
      <div className={clsx(classes.logo, classes.toolbar)}>
        <Logotype
          alt={title}
          fill="#fff"
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <Divider />
      <List>
        <ListItem button component="a" href="/" key="Home">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/dashboard" key="Dashboard">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component="a" href="/scheduler" key="Scheduler">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Scheduler" />
        </ListItem>
        <ListItem button component="a" href="/settings" key="Settings">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>

      {children && <Divider />}

      {children}

      <Divider />

      <Hidden mdUp>
        <Footer classesProvided={classesFooter} showDividers={true} />
      </Hidden>
    </React.Fragment>
  );
};

DrawerContent.propTypes = {
  children: PropTypes.node
};

export default DrawerContent;
