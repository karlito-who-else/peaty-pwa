import React from "react";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";

export const Thanks = ({ location }): ReactElement => (
  <Layout pathname={location.pathname}>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>This is a custom thank you page for form submissions</p>
        </div>
      </div>
    </section>
  </Layout>
);

Thanks.propTypes = {
  location: PropTypes.object
};

export default Thanks;
