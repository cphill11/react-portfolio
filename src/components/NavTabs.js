import React from "react";
import '../index.css';
import '../media-queries.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav nav-tabs" class="container">
        <li className="nav-item" class="row">
          <a
            href="#about"
            class="col-2 col-3-sm"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            class="col-2 col-3-sm"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            class="col-2 col-3-sm"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            class="col-2 col-3-sm"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
