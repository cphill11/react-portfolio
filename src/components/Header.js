import React from "react";
import nzImg from "../assets/images/nz.jpg";

function Header(props) {
  return (
    <header className="my-5">
      <img src={nzImg} alt="" />
      <h2> Criste Phillips</h2>
    </header>
  );
}

export default Header;
