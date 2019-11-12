import React from "react";

import {
  Avatar,
  Container,
  createStyles,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
  Typography
} from "@material-ui/core";
import { Delete as DeleteIcon, Folder as FolderIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      flexGrow: 1
    },
    container: {},
    demo: {
      backgroundColor: theme.palette.background.paper
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

export const BottomNavigationDesktop = (): ReactElement => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container className={classes.container} component="div" fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.title}>
              Text only
            </Typography>
            <div className={classes.demo}>
              <List>
                {generate(
                  <ListItem>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.title}>
              Icon with text
            </Typography>
            <div className={classes.demo}>
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
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text
            </Typography>
            <div className={classes.demo}>
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
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" className={classes.title}>
              Avatar with text and icon
            </Typography>
            <div className={classes.demo}>
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
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default BottomNavigationDesktop;
