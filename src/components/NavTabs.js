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
            Bio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#stack"
            onClick={() => handlePageChange("Stack")}
            className={
              currentPage === "Stack" ? "nav-link active" : "nav-link"
            }
          >
            Stack
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
            Projects
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
            Auxiliary 
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
