import React from "react";
import RecentPropertiesItem from "./RecentPropertiesItem";
import image600x400 from "../../assets/images/placeholder/600x400.jpg";
import image80x80 from "../../assets/images/placeholder/80x80.jpg";

const RecentProperties = () => {
  return (
    <section className="featured__property bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="title__head">
              <h2 className="text-center text-capitalize">Recent Property</h2>
              <p className="text-center text-capitalize">
                We provide full service at every step.
              </p>
            </div>
          </div>
        </div>
        <div className="featured__property-carousel owl-carousel owl-theme">
          <RecentPropertiesItem
            image={image600x400}
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />

          <RecentPropertiesItem
            image={image600x400}
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />

          <RecentPropertiesItem
            image={image600x400}
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />
          <RecentPropertiesItem
            image={image600x400}
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />
          <RecentPropertiesItem
            image={image600x400}
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />
          <RecentPropertiesItem
            image={image600x400}
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />
          <RecentPropertiesItem
            image="../../assets/images/600x400.jpg"
            description=" vila in coral gables"
            image2={image80x80}
            name=" tom wilson"
            total="$350.000"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentProperties;
