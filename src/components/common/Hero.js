import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="wrap__intro d-flex align-items-md-center ">
      <div className="container  ">
        <div className="row align-items-center justify-content-start flex-wrap">
          <div className="col-md-10 mx-auto">
            {/* <!-- <h4>the walls property</h4> --> */}
            <h1>Find Your Dream House </h1>
            <p>
              Your Property, Our Priority and From as low as $10 per day with
              limited time offer discounts
            </p>

            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
