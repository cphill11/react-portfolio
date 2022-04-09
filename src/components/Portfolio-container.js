import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./NavTabs";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // when an individual selects various tabs, individuals will see what is on those specific pages
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // handlePageChange fxns as a way to change the current page state variable */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
