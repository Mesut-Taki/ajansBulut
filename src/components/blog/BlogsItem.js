import React from "react";

const BlogsItem = (props) => {
  const { image, image2, description, name, title } = props;
  return (
    <div class="card__image">
      {/* <!-- BLOG  --> */}
      <div class="card__image-header h-250">
        <img src={image} alt="" class="img-fluid w100 img-transition" />
        <div class="info"> event</div>
      </div>
      <div class="card__image-body">
        {/* <!-- <span class="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
        <h6 class="text-capitalize">
          <a href="/blog-single.html">{title} </a>
        </h6>
        <p class=" mb-0">{description}</p>
      </div>
      <div class="card__image-footer">
        <figure>
          <img src={image2} alt="" class="img-fluid rounded-circle" />
        </figure>
        <ul class="list-inline my-auto">
          <li class="list-inline-item ">
            <a href="#">{name}</a>
          </li>
        </ul>
        <ul class="list-inline my-auto ml-auto">
          <li class="list-inline-item ">
            <a href="/blog-single.html" class="btn btn-sm btn-primary ">
              <small class="text-white ">
                read more <i class="fa fa-angle-right ml-1"></i>
              </small>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- END BLOG --> */}
    </div>
  );
};

export default BlogsItem;
