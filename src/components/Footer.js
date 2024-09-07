import React from "react";
import '../index.css';
// import '../media-queries.css';
// import '../header-footer-media-queries.css';
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
          Public GitHub Repositories
        </a>
      </li>
      <br></br>
      <li>
        <a href="mailto:cristephillips@gmail.com">
          Email
        </a>
      </li>
    </section>
    </footer>
  );
}

export default Footer;
