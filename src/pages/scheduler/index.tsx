import PropTypes from "prop-types";
import React, { useState } from "react";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  Scheduler,
  WeekView
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";
import { appointments } from "./data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      gridArea: "content"
    },
    paper: {
      paddingTop: theme.spacing(2)
    }
  })
);

const CustomQueryStringComponent = ({ location }): ReactElement => {
  const [data, setData] = useState(appointments);
  const classes = useStyles();

  return (
    <Layout pathname={location.pathname}>
      <main className={classes.root}>
        <Paper className={classes.paper}>
          <Scheduler data={data}>
            <ViewState currentDate="2018-06-28" />
            <WeekView startDayHour={9} endDayHour={19} />
            <Appointments />
          </Scheduler>
        </Paper>
      </main>
    </Layout>
  );
};

CustomQueryStringComponent.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
