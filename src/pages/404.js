import React from "react";
import PropTypes from "prop-types";

import Layout from "../components/Layout";

const NotFoundPage = ({ location }): ReactElement => (
  <Layout pathname={location.pathname}>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
);

NotFoundPage.propTypes = {
  location: PropTypes.object
};

export default NotFoundPage;
