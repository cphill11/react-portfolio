import React from "react";
import nzImg from "../assets/images/nz.jpg";
import '../index.css';
// import '../media-queries.css';
// import '../header-footer-media-queries.css';

function Header(props) {
  return (
    <header>
      <img src={nzImg} alt="" />
      <h2> Criste L. Phillips, Software Engineer Student</h2>
    </header>
  );
}

export default Header;
