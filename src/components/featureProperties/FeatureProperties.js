import React from "react";
import FeaturePropertyItem from "./FeaturePropertyItem";

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
                image="../../assets/images/600x400.jpg"
                description="vila in coral gables"
                image2="../../assets/images/80x80.jpg"
              />

              <FeaturePropertyItem
                image="../../assets/images/600x400.jpg"
                description="Ample Apartment At Last Floor"
                image2="../../assets/images/80x80.jpg"
              />

              <FeaturePropertyItem
                image="../../assets/images/600x400.jpg"
                description="  Contemporary Apartment"
                image2="../../assets/images/80x80.jpg"
              />
              <FeaturePropertyItem
                image="../../assets/images/600x400.jpg"
                description="     Family Home For Sale"
                image2="../../assets/images/80x80.jpg"
              />

              <FeaturePropertyItem
                image="../../assets/images/600x400.jpg"
                description=" 184 Lexington Avenue"
                image2="../../assets/images/80x80.jpg"
              />
              <FeaturePropertyItem
                image="../../assets/images/600x400.jpg"
                description="  Luxury Villa With Pool"
                image2="../../assets/images/80x80.jpg"
              />
              <FeaturePropertyItem
                image="../../assets/images/600x400.jpg"
                description="      Family Home For Sale"
                image2="../../assets/images/80x80.jpg"
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
