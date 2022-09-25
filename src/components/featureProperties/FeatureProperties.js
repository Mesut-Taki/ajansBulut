import React from "react";
import FeaturePropertyItem from "./FeaturePropertyItem";
import image600x400 from "../../assets/images/placeholder/600x400.jpg";
import image80x80 from "../../assets/images/placeholder/80x80.jpg";

const FeatureProperties = () => {
  return (
    <section className="featured__property ">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="title__head">
              <h2 className="text-center text-capitalize">
                featured properties
              </h2>
              <p className="text-center text-capitalize">
                handpicked exclusive properties by our team.
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="featured__property-carousel owl-carousel owl-theme">
              <FeaturePropertyItem
                image={image600x400}
                description="vila in coral gables"
                image2={image80x80}
              />

              <FeaturePropertyItem
                image={image600x400}
                description="Ample Apartment At Last Floor"
                image2={image80x80}
              />

              <FeaturePropertyItem
                image={image600x400}
                description="  Contemporary Apartment"
                image2={image80x80}
              />
              <FeaturePropertyItem
                image={image600x400}
                description="     Family Home For Sale"
                image2={image80x80}
              />

              <FeaturePropertyItem
                image={image600x400}
                description=" 184 Lexington Avenue"
                image2={image80x80}
              />
              <FeaturePropertyItem
                image={image600x400}
                description="  Luxury Villa With Pool"
                image2={image80x80}
              />
              <FeaturePropertyItem
                image={image600x400}
                description="      Family Home For Sale"
                image2={image80x80}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  {
    /* <!-- END FEATURED PROPERTIES --> */
  }
};

export default FeatureProperties;
