import React from "react";
import BlogsItem from "./BlogsItem";
import image500x400 from "../../assets/images/placeholder/500x400.jpg";
import image80x80 from "../../assets/images/placeholder/80x80.jpg";

const Blogs = () => {
  return (
    <section class="blog__home">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-lg-6 mx-auto">
            <div class="title__head">
              <h2 class="text-center text-capitalize">lastest news</h2>
              <p class="text-center text-capitalize">
                find of the most popular real estate company all around
                indonesia.{" "}
              </p>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <BlogsItem
              image={image500x400}
              image2={image80x80}
              title="Best Interior Oppertunity"
              description=" Real estate festival is one of the famous feval for explain to
              you how all this mistaolt deand praising pain wasnad I will
              give complete"
              name="tom wilson"
            />
            {/* <!-- BLOG  --> */}

            {/* <!-- END BLOG --> */}
          </div>
          <div class="col-md-4">
            {/* <!-- BLOG  --> */}
            <BlogsItem
              image={image500x400}
              image2={image80x80}
              title="Tips & Trick buy real estate"
              description=" Real estate festival is one of the famous feval for explain to
              you how all this mistaolt deand praising pain wasnad I will
              give complete"
              name="tom wilson"
            />

            {/* <!-- END BLOG --> */}
          </div>
          <div class="col-md-4">
            {/* <!-- BLOG  --> */}
            <BlogsItem
              image={image500x400}
              image2={image80x80}
              title="Our Must Popular Deluxe House"
              description=" Real estate festival is one of the famous feval for explain to
              you how all this mistaolt deand praising pain wasnad I will
              give complete"
              name="tom wilson"
            />

            {/* <!-- END BLOG --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
