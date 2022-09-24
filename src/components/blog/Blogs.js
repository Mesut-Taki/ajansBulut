import React from "react";
import BlogsItem from "./BlogsItem";

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
              image="../../assets/images/500x400.jpg"
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
              image="../../assets/images/500x400.jpg"
              image2=""
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
              image="../../assets/images/500x400.jpg"
              image2="../../assets/images/80x80.jpg"
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
