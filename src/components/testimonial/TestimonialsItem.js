import React from "react";

const TestimonialsItem = (props) => {
  const { description, image, jobs, name } = props;
  return (
    <div className="testimonial owl-carousel owl-theme">
      {/* <!-- TESTIMONIAL --> */}
      <div className="item testimonial__block">
        <div className="testimonial__block-card bg-reviews">
          <p>{description}</p>
        </div>
        <div className="testimonial__block-users">
          <div className="testimonial__block-users-img">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="testimonial__block-users-name">
            {name} <br />
            <span>{jobs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
