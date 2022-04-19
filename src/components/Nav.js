// bar that we see; operates w/ in header that will conditionally render different sections of the portfolio
// useState hook gives the option to change categories in future
import React from "react";
import '../index.css';
import '../media-queries.css';

function Nav() {
  return <header data-testid="header" className="flex-row px-1"></header>;
}

export default Nav;
