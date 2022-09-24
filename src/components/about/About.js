import React from "react";

const About = () => {
  return (
    <section className="home__about bg-theme-v4">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="title__leading">
              {/* <!-- <h6 className="text-uppercase">trusted By thousands</h6> --> */}
              <h2 className="text-capitalize"> why choose use?</h2>
              <p>
                The first step in selling your property is to get a valuation
                from local experts. They will inspect your home and take into
                account its unique features, the area and market conditions
                before providing you with the most accurate valuation.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                libero amet, laborum qui nulla quae alias tempora. Placeat
                voluptatem eum numquam quas distinctio obcaecati quaerat,
                repudiandae qui! Quia, omnis, doloribus! Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Quod libero amet, laborum
                qui nullas tempora.
              </p>

              <a href="#" className="btn btn-primary mt-3 text-capitalize">
                {" "}
                read more
                <i className="fa fa-angle-right ml-3 "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
