import React, { useState } from "react";
import About from "./About";
// import Contact from "./Contact";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Header from "./Header";

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
    // if (currentPage === "Contact") {
    //   return <Contact />;
    // }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      {/* // handlePageChange fxns as a way to change the current page state variable */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
