import { navigate } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Appointments,
  Scheduler,
  WeekView
} from "@devexpress/dx-react-scheduler-material-ui";
import { Paper } from "@material-ui/core";

import Layout from "../../components/Layout";
import withLocation from "../../components/withLocation";
import { appointments } from "./data";

const CustomQueryStringComponent = ({ location, search }): ReactElement => {
  const [data, setData] = React.useState(appointments);

  return (
    <Layout pathname={location.pathname}>
      <main>
        <Paper>
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
