import PropTypes from "prop-types";
import React from "react";

import { createStyles, makeStyles, Theme, Paper } from "@material-ui/core";

import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gap: `${theme.spacing(2)}px`,
      gridAutoRows: `minmax(100px, auto)`,
      gridTemplateColumns: `repeat(3, 1fr)`,
      padding: theme.spacing(2)
    },
    paper: {
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
      textAlign: "center"
    }
  })
);

const CustomQueryStringComponent = ({ location }): ReactElement => {
  const classes = useStyles();

  return (
    <Layout pathname={location.pathname}>
      <main className={classes.root}>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
        <Paper className={classes.paper}>xs</Paper>
      </main>
    </Layout>
  );
};

CustomQueryStringComponent.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
