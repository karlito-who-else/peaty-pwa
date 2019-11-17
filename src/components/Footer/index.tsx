import clsx from "clsx";
import PropTypes, { InferProps } from "prop-types";
import React from "react";
// import PropTypes, { InferProps } from "prop-types";

import {
  // Avatar,
  CssBaseline,
  Divider,
  // IconButton,
  List,
  ListItem,
  // ListItemAvatar,
  ListItemIcon,
  // ListItemSecondaryAction,
  ListItemText,
  Theme,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Delete as DeleteIcon,
  Folder as FolderIcon,
  Inbox as InboxIcon,
  Mail as MailIcon
} from "@material-ui/icons";

import useSiteMetadata from "../SiteMetadata";
// import MaterialTheme from "../MaterialUI/Theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   backgroundColor: theme.palette.background.paper
    // },
    copyright: {},
    // full: {
    //   gridColumn: `auto / span 2`,
    //   [theme.breakpoints.up("lg")]: {
    //     gridColumn: `auto / span 3`
    //   }
    // },
    title: {
      margin: theme.spacing(4, 2, 2)
    }
  })
);

export const Footer = (
  {
    classesProvided,
    showDividers,
    showTitles
  }: InferProps<typeof DrawerMain.propTypes> = {
    classesProvided: {
      root: {},
      copyright: {}
    },
    showDividers: false,
    showTitles: false
  }
): ReactElement => {
  const { title } = useSiteMetadata();
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <footer className={clsx(classes.root, classesProvided.root)}> */}
      <CssBaseline />
      <div>
        {showTitles && (
          <Typography variant="h6" className={classes.title}>
            Help and Support
          </Typography>
        )}
        <List>
          <ListItem
            button
            component="a"
            href="/documentation"
            key="Documentation"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>
          <ListItem button component="a" href="/help" key="Help Center">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Help Center" />
          </ListItem>
          <ListItem button component="a" href="/faq" key="FAQ">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
          <ListItem button component="a" href="/contact" key="Contact">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
      {showDividers && <Divider />}
      <div>
        {showTitles && (
          <Typography variant="h6" className={classes.title}>
            Usage
          </Typography>
        )}
        <List>
          <ListItem
            button
            component="a"
            href="/privacy-policy"
            key="Privacy Policy"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/terms-of-use"
            key="Terms of Use"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Terms of Use" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/sales-and-refunds"
            key="Sales and Refunds"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Sales and Refunds" />
          </ListItem>
          <ListItem button component="a" href="/legal" key="Legal">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Legal" />
          </ListItem>
        </List>
      </div>
      {showDividers && <Divider />}
      <div>
        {showTitles && (
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        )}
        <List>
          <ListItem
            button
            component="a"
            href="https://twitter.com/peaty"
            key="Twitter"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Twitter" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://linkedin.com/peaty"
            key="LinkedIn"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://reddit.com/r/peaty"
            key="Reddit"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Reddit" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://youtube.com/peaty"
            key="YouTube"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="YouTube" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://peaty.com/newsletter"
            key="Newsletter"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Newsletter" />
          </ListItem>
        </List>
      </div>
      {showDividers && <Divider />}
      <div>
        {showTitles && (
          <Typography variant="h6" className={classes.title}>
            Peaty Rota
          </Typography>
        )}
        <List>
          <ListItem
            button
            component="a"
            href="https://rota.peaty.com/information"
            key="Product Information"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Product Information" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://rota.peaty.com/news"
            key="Product News"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Product News" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://rota.peaty.com/release-notes"
            key="Release Notes"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Release Notes" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://rota.peaty.com/roadmap"
            key="Roadmap"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Roadmap" />
          </ListItem>
        </List>
      </div>
      {showDividers && <Divider />}
      <div>
        {showTitles && (
          <Typography variant="h6" className={classes.title}>
            Peaty
          </Typography>
        )}
        <List>
          <ListItem
            button
            component="a"
            href="https://peaty.com/information"
            key="Company Information"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Company Information" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://peaty.com/news"
            key="Company News"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Company News" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://peaty.com/jobs"
            key="Jobs"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItem>
        </List>
      </div>
      {showDividers && <Divider />}
      <div>
        {showTitles && (
          <Typography variant="h6" className={classes.title}>
            Products
          </Typography>
        )}
        <List>
          <ListItem
            button
            component="a"
            href="https://rota.peaty.com"
            key="Rota"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Rota" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://scheduler.peaty.com"
            key="Scheduler"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Scheduler" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://register.peaty.com"
            key="Register"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="https://job-market.peaty.com"
            key="Job Market"
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Job Market" />
          </ListItem>
        </List>
      </div>
      {showDividers && <Divider />}
      <div
        className={clsx(
          classes.copyright,
          classes.full,
          classesProvided.copyright,
          classesProvided.full
        )}
      >
        <span>© Peaty Ltd. All rights reserved.</span>
        <span>{title} is a registered trademark of Peaty Ltd.</span>
      </div>
    </React.Fragment>
  );
};

Footer.propTypes = {
  classesProvided: PropTypes.shape({
    classesProvided: PropTypes.shape({
      copyright: PropTypes.object,
      full: PropTypes.object
    })
  }),
  showDividers: PropTypes.bool,
  showTitles: PropTypes.bool
};

export default withStyles({
  root: {},
  copyright: {}
})(Footer);
