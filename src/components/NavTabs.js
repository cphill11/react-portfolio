import React from "react";
import "../index.css";
import "../media-queries.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Coding Overview
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Coding Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#ancillary"
            onClick={() => handlePageChange("Ancillary")}
            className={
              currentPage === "Ancillary" ? "nav-link active" : "nav-link"
            }
          >
            Ancillary Skillset
          </a>
        </li>
        {/* <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li> */}
      </ul>
    </header>
  );
}

export default NavTabs;
