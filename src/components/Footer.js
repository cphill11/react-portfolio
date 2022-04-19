import React from "react";
import '../index.css';
import '../media-queries.css';

function Footer() {
  return (
    <footer>
    <section>
      <li>
        <a href="https://www.linkedin.com/in/cristephillips/" className="linkedIn">
          linkedIn
        </a>
      </li>
      <br></br>
      <li>
        <a href="https://github.com/cphill11" className="gitHub">
          GitHub
        </a>
      </li>
      <br></br>
      <li>
        <a
          href="https://stackoverflow.com/users/17097977/criste-phillips"
          className="stackOverflow">
          Stack Overflow
        </a>
      </li>
    </section>
    </footer>
  );
}

export default Footer;
