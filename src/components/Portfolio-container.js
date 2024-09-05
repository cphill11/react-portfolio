import React, { useState } from "react";
import About from "./About";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import Ancillary from "./Ancillary";
import NavTabs from "./NavTabs";
// import Footer from "./Footer";
import Header from "./Header";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // when an individual selects various tabs, individuals will see what is on those specific pages
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Stack") {
      return <Stack/>;
    }
    // portfolio renamed to projects
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Ancillary") {
      return <Ancillary/>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* // handlePageChange fxns as a way to change the current page state variable */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
