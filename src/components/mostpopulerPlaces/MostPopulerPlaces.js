import React from "react";
import MostPopulerPlacesItem from "./MostPopulerPlacesItem";

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
              image="../../assets/images/700x980.jpg"
              country="tokyo"
              properties="70 properties"
            />
          </div>

          <div className="col-lg-7 col-xl-7">
            <div className="row">
              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image="../../assets/images/600x400.jpg"
                  country="australia"
                  properties="70 properties"
                />
              </div>

              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image="../../assets/images/600x400.jpg"
                  country="rome"
                  properties="70 properties"
                />
              </div>

              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image="../../assets/images/600x400.jpg"
                  country="new york"
                  properties="70 properties"
                />
              </div>

              <div className="col-md-6 col-padd">
                {/* <!-- CARD IMAGE --> */}
                <MostPopulerPlacesItem
                  image="../../assets/images/600x400.jpg"
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
