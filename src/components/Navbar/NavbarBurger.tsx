import React from "react";
import PropTypes, { InferProps } from "prop-types";

const NavbarBurger = ({
  navBarActiveClass,
  toggleHamburger
}: InferProps<typeof NavbarBurger.propTypes>): ReactElement => (
  <div
    className={`navbar-burger burger ${navBarActiveClass}`}
    data-target="navMenu"
    onClick={toggleHamburger}
  >
    <span />
    <span />
    <span />
  </div>
);

NavbarBurger.propTypes = {
  navBarActiveClass: PropTypes.node.isRequired,
  toggleHamburger: PropTypes.node.isRequired
};

export default NavbarBurger;
