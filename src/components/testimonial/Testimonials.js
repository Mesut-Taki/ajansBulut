import React from "react";
import TestimonialsItem from "./TestimonialsItem";
import image80x80 from "../../assets/images/placeholder/80x80.jpg";

const Testimonials = () => {
  return (
    // <!-- TESTIMONIAL -->
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto">
            <div className="title__head">
              <h2 className="text-center text-capitalize">what people says</h2>
              <p className="text-center text-capitalize">
                people says about walls property.
              </p>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="testimonial owl-carousel owl-theme">
          {/* <!-- TESTIMONIAL --> */}
          <TestimonialsItem
            description="Thank you walls property help me, choice dream home We were
          impressed with the build quality, Plus they are competitively
          priced."
            name=" jhon doe"
            jobs="owner, digital agency"
            image={image80x80}
          />

          {/* <!-- END TESTIMONIAL -->
                <!-- TESTIMONIAL --> */}

          <TestimonialsItem
            description="Thank you walls property help me, choice dream home We were
          impressed with the build quality, Plus they are competitively
          priced."
            name=" jhon doe"
            jobs="owner, digital agency"
            image={image80x80}
          />
          <TestimonialsItem
            description="Thank you walls property help me, choice dream home We were
          impressed with the build quality, Plus they are competitively
          priced."
            name=" jhon doe"
            jobs="owner, digital agency"
            image={image80x80}
          />
          {/* <!-- END TESTIMONIAL -->
                <!-- TESTIMONIAL --> */}
          <TestimonialsItem
            description="Thank you walls property help me, choice dream home We were
          impressed with the build quality, Plus they are competitively
          priced."
            name=" jhon doe"
            jobs="owner, digital agency"
            image={image80x80}
          />
          {/* <!-- END TESTIMONIAL -->
                <!-- TESTIMONIAL --> */}
          <TestimonialsItem
            description="Thank you walls property help me, choice dream home We were
          impressed with the build quality, Plus they are competitively
          priced."
            name=" jhon doe"
            jobs="owner, digital agency"
            image={image80x80}
          />
          {/* <!-- END TESTIMONIAL --> */}
        </div>
      </div>
      {/* <!-- END TESTIMONIAL --> */}
    </section>
  );
};

export default Testimonials;
