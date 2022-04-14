// appears on all pages.

import React from "react";

function Footer() {
  return (
    <section className="my-5">
      <li>
        <a href="https://www.linkedin.com/in/cristephillips/" class="linkedIn">
          linkedIn
        </a>
      </li>
      <br></br>
      <li>
        <a href="https://github.com/cphill11" class="gitHub">
          GitHub
        </a>
      </li>
      <br></br>
      <li>
        <a
          href="https://stackoverflow.com/users/17097977/criste-phillips"
          class="stackOverflow">
          Stack Overflow
        </a>
      </li>
    </section>
  );
}

export default Footer;
