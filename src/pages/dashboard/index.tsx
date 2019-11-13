import PropTypes from "prop-types";
import React, { useState } from "react";
import { VictoryBar } from "victory";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  DayView,
  Scheduler
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";
import { appointments } from "../scheduler/data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "grid",
      gap: `${theme.spacing(2)}px`,
      gridArea: "content",
      gridAutoRows: `minmax(100px, auto)`,
      gridTemplateColumns: `repeat(1, 1fr)`,
      [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
        gridTemplateColumns: `repeat(2, 1fr)`
      },
      [theme.breakpoints.up("sm")]: {
        gridTemplateColumns: `repeat(2, 1fr)`
      },
      // [theme.breakpoints.up("lg")]: {
      //   gridTemplateColumns: `repeat(4, 1fr)`
      // },
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

  const [data, setData] = useState(appointments);

  return (
    <Layout pathname={location.pathname}>
      <main className={classes.root}>
        <Paper className={classes.paper}>
          <VictoryBar />
        </Paper>
        <Paper className={classes.paper}>
          <Scheduler data={data}>
            <ViewState currentDate="2018-06-28" />
            <DayView startDayHour={9} endDayHour={19} />
            <Appointments />
          </Scheduler>
        </Paper>
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
