import React from 'react'

const RecentPropertiesItem = (props) => {
    const { image, image2, description ,name,total} = props;
  return (
    <div className="item">
    {/* <!-- ONE --> */}
    <div className="card__image card__box">
      <div className="card__image-header h-250">
        <div className="ribbon text-capitalize">featured</div>
        <img
          src={image}
          alt=""
          className="img-fluid w100 img-transition"
        />
        <div className="info"> for sale</div>
      </div>
      <div className="card__image-body">
        <span className="badge badge-primary text-capitalize mb-2">
          house
        </span>
        <h6 className="text-capitalize">{description}</h6>

        <p className="text-capitalize">
          <i className="fa fa-map-marker"></i>
          west flaminggo road, las vegas
        </p>
        <ul className="list-inline card__content">
          <li className="list-inline-item">
            <span>
              baths <classNameName />
              <i className="fa fa-bath"></i> 2
            </span>
          </li>
          <li className="list-inline-item">
            <span>
              beds <classNameName />
              <i className="fa fa-bed"></i> 3
            </span>
          </li>
          <li className="list-inline-item">
            <span>
              rooms <classNameName />
              <i className="fa fa-inbox"></i> 3
            </span>
          </li>
          <li className="list-inline-item">
            <span>
              area <classNameName />
              <i className="fa fa-map"></i> 4300 sq ft
            </span>
          </li>
        </ul>
      </div>
      <div className="card__image-footer">
        <figure>
          <img
            src={image2}
            alt=""
            className="img-fluid rounded-circle"
          />
        </figure>
        <ul className="list-inline my-auto">
          <li className="list-inline-item">
            <a href="#">
             {name} <classNameName />
            </a>
          </li>
        </ul>
        <ul className="list-inline my-auto ml-auto">
          <li className="list-inline-item">
            <h6>{total}</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default RecentPropertiesItem