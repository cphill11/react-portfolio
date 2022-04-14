// bar that we see; operates w/ in header that will conditionally render different sections of the portfolio
import React from "react";

// import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../utils/helpers";

function Nav() {
  const categories = [
    {
      name: "Resume",
      description: "Listing of skillsets useful for employment opportunities",
    },
    {
      name: "Portfolio",
      description: "Challenges and Projects completed during coding bootcamp",
    },
  ];

  const handleClick = () => {
    console.log("click handled");
  };
  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>{/* <a href="/"></a> */}</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>Contact</span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
