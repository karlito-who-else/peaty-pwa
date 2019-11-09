import React from "react";
import { Link } from "gatsby";
import PropTypes, { InferProps } from "prop-types";

import github from "../../img/github-icon.svg";

const NavbarMenu = ({
  navBarActiveClass,
  signOut
}: InferProps<typeof NavbarMenu.propTypes>): ReactElement => (
  <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
    <div className="navbar-start has-text-centered">
      <Link className="navbar-item" to="/about">
        About
      </Link>
      <Link className="navbar-item" to="/jobs">
        Jobs
      </Link>
      <Link className="navbar-item" to="/products">
        Products
      </Link>
      <Link className="navbar-item" to="/blog">
        Blog
      </Link>
      <Link className="navbar-item" to="/contact">
        Contact
      </Link>
      <Link className="navbar-item" to="/contact/examples">
        Form Examples
      </Link>
    </div>
    <div className="navbar-end has-text-centered">
      <a
        className="navbar-item"
        href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon">
          <img src={github} alt="Github" />
        </span>
      </a>
      <div className="buttons">
        <button onClick={signOut} className="button is-primary signOutButton">
          Sign Out
        </button>
      </div>
    </div>
  </div>
);

NavbarMenu.propTypes = {
  navBarActiveClass: PropTypes.node.isRequired,
  signOut: PropTypes.node.isRequired
};

export default NavbarMenu;
