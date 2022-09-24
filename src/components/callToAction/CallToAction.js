import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-theme-v1">
      <div className="cta">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-12 text-center">
              <h2 className="text-uppercase text-white">
                signup & build your dream house
              </h2>
              <p className="text-capitalize text-white">
                We'll help you to grow your career and growth, please contact
                team walls real estate and get this offer promo
              </p>
              <a href="#" className="btn btn-primary text-uppercase ">
                request a quote
                <i className="fa fa-angle-right ml-3 arrow-btn "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
