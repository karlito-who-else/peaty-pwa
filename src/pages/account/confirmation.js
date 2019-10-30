import React from "react";
import Link from "gatsby-link";
import Layout from "../../components/Layout";
import PropTypes from "prop-types";

import withLocation from "../../components/withLocation";

const CustomQueryStringComponent = ({ search }) => {
  const { username } = search;
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Thank you!</h1>
            <p>Account creation confirmed for {username}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

CustomQueryStringComponent.propTypes = {
  search: PropTypes.object
};

export default withLocation(CustomQueryStringComponent);
