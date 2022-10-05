import React from "react";

const BlogsItem = (props) => {
  const { image, image2, description, name, title } = props;
  return (
    <div className="card__image">
      {/* <!-- BLOG  --> */}
      <div className="card__image-header h-250">
        <img src={image} alt="" className="img-fluid w100 img-transition" />
        <div className="info"> event</div>
      </div>
      <div className="card__image-body">
        {/* <!-- <span className="badge badge-secondary p-1 text-capitalize mb-3">May 08, 2019 </span> --> */}
        <h6 className="text-capitalize">
          <a href="/blog-single.html">{title} </a>
        </h6>
        <p className=" mb-0">{description}</p>
      </div>
      <div className="card__image-footer">
        <figure>
          <img src={image2} alt="" className="img-fluid rounded-circle" />
        </figure>
        <ul className="list-inline my-auto">
          <li className="list-inline-item ">
            <a href="#">{name}</a>
          </li>
        </ul>
        <ul className="list-inline my-auto ml-auto">
          <li className="list-inline-item ">
            <a href="/blog-single.html" className="btn btn-sm btn-primary ">
              <small className="text-white ">
                read more <i className="fa fa-angle-right ml-1"></i>
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
