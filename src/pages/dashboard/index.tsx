import PropTypes from "prop-types";
import React, { useState } from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  DayView,
  Scheduler
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Authenticator from "../../components/Authenticator";
import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";
import { appointments } from "../../tmp/data";

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
      [theme.breakpoints.up("xl")]: {
        gridTemplateColumns: `repeat(4, 1fr)`
      },
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2)
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

  const chartData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  return (
    <Authenticator>
      <Layout pathname={location.pathname}>
        <main className={classes.root}>
          <Paper className={classes.paper}>
            <VictoryChart
              // domainPadding will add space to each side of VictoryBar to
              // prevent it from overlapping the axis
              domainPadding={20}
              theme={VictoryTheme.material}
            >
              <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4]}
                tickFormat={[
                  "Quarter 1",
                  "Quarter 2",
                  "Quarter 3",
                  "Quarter 4"
                ]}
              />
              <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x): string => `$${x / 1000}k`}
              />
              <VictoryBar data={chartData} x="quarter" y="earnings" />
            </VictoryChart>
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
        </main>
      </Layout>
    </Authenticator>
  );
};

CustomQueryStringComponent.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
