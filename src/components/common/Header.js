import React from "react";
import logoStiky from "../../assets/images/logo-blue-stiky.png";
import Navbar from "./Navbar";
import Hero from "./Hero";
const Header = () => {
  return (
    <div>
      {/* <!-- HEADER --> */}
      <header className="jumbotron bg-theme">
        <div className="bg-overlay"></div>
        {/* <!-- NAVBAR --> */}
        <Navbar />
        {/* <!-- END NAVBAR -->
        <!-- HERO --> */}
        <Hero />
        {/* <!-- END HERO --> */}
      </header>
    </div>
  );
};

export default Header;
