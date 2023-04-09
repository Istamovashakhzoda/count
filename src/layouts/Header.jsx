import React from "react";

import Navbar from "./Navbar";
function Header(){
  return(
    <div className="header">
      <div className="header__logo">
        <h1>React</h1>
      </div>
        <Navbar/>
        <div className="contact">+998917715005</div>
    </div>
  )
};
export default Header;