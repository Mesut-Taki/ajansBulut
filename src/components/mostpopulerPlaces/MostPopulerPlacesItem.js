import React from "react";

const MostPopulerPlacesItem = (props) => {
  const { image, country, properties } = props;
  return (
    <a href="#">
      <div className="card__image-hover-style-v3">
        <div className="card__image-hover-style-v3-thumb h-475">
          <img src={image} alt="" className="img-fluid w-100" />
        </div>
        <div className="overlay">
          <div className="desc">
            <h6 className="text-capitalize">{country}</h6>
            <p className="text-capitalize">{properties}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MostPopulerPlacesItem;
