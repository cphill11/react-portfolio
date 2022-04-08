import React, { useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Work from "./components/Work";
import NavTabs from "./components/NavTabs";

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
    if (currentPage === "Work") {
      return <Work />;
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
      {/* // stuff gets rendered */}
      {renderPage()}
    </div>
  );
}
