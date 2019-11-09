import React from "react";
// import { Link } from "gatsby";
import { Auth } from "aws-amplify";

import NavbarBrand from "./NavbarBrand";
import NavbarBurger from "./NavbarBurger";
import NavbarMenu from "./NavbarMenu";

const Navbar = class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = (): ReactElement => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  signOut = (): void => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render(): ReactElement {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <NavbarBrand />
          <NavbarBurger
            navBarActiveClass={this.state.navBarActiveClass}
            toggleHamburger={this.toggleHamburger}
          />
          <NavbarMenu signOut={this.signOut} />
        </div>
      </nav>
    );
  }
};

export default Navbar;
