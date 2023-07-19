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
          GitHub Repositories
        </a>
      </li>
      <br></br>
      <li>
        <a href="mailto:criste.phillips@phillipstechnologygroup.com?">
          Email
        </a>
      </li>
    </section>
    </footer>
  );
}

export default Footer;
