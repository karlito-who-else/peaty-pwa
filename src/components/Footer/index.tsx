import React from "react";

import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Theme,
  Typography
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Delete as DeleteIcon, Folder as FolderIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: "grid",
      gap: `${theme.spacing(2)}px`,
      gridArea: "footer",
      gridAutoRows: `minmax(100px, auto)`,
      gridTemplateColumns: `repeat(2, 1fr)`,
      [theme.breakpoints.up("lg")]: {
        gridTemplateColumns: `repeat(4, 1fr)`
      },
      padding: theme.spacing(2)
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  })
);

function generate(element: React.ReactElement): ReactElement[] {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value
    })
  );
}

export const Footer = (): ReactElement => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <div>
        <Typography variant="h6" className={classes.title}>
          Text only
        </Typography>
        <List>
          {generate(
            <ListItem>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )}
        </List>
      </div>
      <div>
        <Typography variant="h6" className={classes.title}>
          Icon with text
        </Typography>
        <List>
          {generate(
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )}
        </List>
      </div>
      <div>
        <Typography variant="h6" className={classes.title}>
          Avatar with text
        </Typography>
        <List>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )}
        </List>
      </div>
      <div>
        <Typography variant="h6" className={classes.title}>
          Avatar with text and icon
        </Typography>
        <List>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </div>
    </footer>
  );
};

export default Footer;
