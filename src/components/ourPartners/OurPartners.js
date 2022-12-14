import React from "react";
import logo6 from "../../assets/images/partner-logo6.png";
import logo7 from "../../assets/images/partner-logo7.png";
import logo8 from "../../assets/images/partner-logo8.png";
import logo9 from "../../assets/images/partner-logo9.png";
import logo5 from "../../assets/images/partner-logo5.png";

const OurPartners = () => {
  return (
    <section className="projects__partner bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="title__head">
              <h2 className="text-center text-capitalize">our partners</h2>
              <p className="text-center text-capitalize">
                brand partners successful projects trusted many clients real
                estate{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="projects__partner-logo">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <img src={logo6} alt="" className="img-fluid" />
                </li>
                <li className="list-inline-item">
                  <img src={logo7} alt="" className="img-fluid" />
                </li>
                <li className="list-inline-item">
                  <img src={logo8} alt="" className="img-fluid" />
                </li>
                <li className="list-inline-item">
                  <img src={logo9} alt="" className="img-fluid" />
                </li>
                <li className="list-inline-item">
                  <img src={logo5} alt="" className="img-fluid" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
