import React from "react";
import MostPopulerPlacesItem from "./MostPopulerPlacesItem";
import image700x980 from "../../assets/images/placeholder/700x980.jpg";
import image600x400 from "../../assets/images/placeholder/600x400.jpg";

const MostPopulerPlaces = () => {
  return (
    <section className="wrap__heading ">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="title__head">
              <h2 className="text-center text-capitalize">
                most popular places
              </h2>
              <p className="text-center text-capitalize">
                find properties in these cities.
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-xl-5 col-padd">
            {/* <!-- CARD IMAGE --> */}
            <MostPopulerPlacesItem
              image={image700x980}
              country="tokyo"
              properties="70 properties"
            />
          </div>

          <div className="col-lg-7 col-xl-7">
            <div className="row">
              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image={image600x400}
                  country="australia"
                  properties="70 properties"
                />
              </div>

              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image={image600x400}
                  country="rome"
                  properties="70 properties"
                />
              </div>

              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image={image600x400}
                  country="new york"
                  properties="70 properties"
                />
              </div>

              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image={image600x400}
                  country="london"
                  properties="70 properties"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostPopulerPlaces;
