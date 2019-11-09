import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";

import Layout from "../../components/Layout";

import withLocation from "../../components/withLocation";

const CustomQueryStringComponent = ({ location, search }): ReactElement => {
  const { username } = search;
  return (
    <Layout pathname={location.pathname}>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Thank you!</h1>
            <p>Account creation confirmed for {username}</p>
            <Link className="button" to="/">
              Continue
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

CustomQueryStringComponent.propTypes = {
  location: PropTypes.object,
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
