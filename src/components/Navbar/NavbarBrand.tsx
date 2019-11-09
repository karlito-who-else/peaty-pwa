import React from "react";
import { Link } from "gatsby";

import metadata from "../../../config/site-metadata";

import Logotype from "../../img/logotype.inline.svg";

import TestButton from "./TestButton";

const NavbarBrand = (): ReactElement => (
  <div className="navbar-brand">
    <Link to="/" className="navbar-item" title="Logo">
      <Logotype alt={metadata.title} style={{ width: "88px" }} />
      <TestButton />
    </Link>
  </div>
);

export default NavbarBrand;
