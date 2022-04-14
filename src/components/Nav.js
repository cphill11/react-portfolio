// bar that we see; operates w/ in header that will conditionally render different sections of the portfolio
// useState hook gives the option to change categories in future
import React, { useState } from "react";

import { capitalizeFirstLetter } from "../utils/helpers";

function Nav() {
  const [categories] = useState([
    // {
    //   name: "Resume",
    //   description: "Listing of skillsets useful for employment opportunities",
    // },
    // {
    //   name: "Portfolio",
    //   description: "Challenges and Projects completed during coding bootcamp",
    // },
  ]);

  const handleClick = () => {
    console.log("click handled");
  };

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
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
            <a href="#contact" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
          <li className={"mx-2"}>
            <a href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li className={"mx-2"}>
            <a href="#Porfolio" onClick={() => handleClick()}>
              Portfolio
            </a>
          </li>
          {categories.map((category) => (
            // evaluates category before returning it
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
