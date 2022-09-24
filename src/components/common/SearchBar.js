import React from "react";

const SearchBar = () => {
  return (
    <div className="wrapper__section">
      <div className="wrapper__section__components">
        <div className="row">
          <div className="col-lg-12">
            {/* <!-- <h3 className="section_heading mt-4">Form Search with Categories</h3> --> */}
            <div className=" search__container">
              <div className="row input-group no-gutters">
                <div className="col-sm-12 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input"
                    placeholder="Search for Homes by Address, City . . . ."
                  />
                </div>

                <div className="col-sm-12 col-md-4 input-group">
                  <select
                    className="select_option form-control"
                    name="select"
                    id="categories"
                  >
                    <option selected>All Categories</option>
                    <option>House</option>
                    <option>Apartement </option>
                    <option>Hotel</option>
                    <option>Residential</option>
                    <option>Land</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <div className="col-sm-12 col-md-3 input-group-append">
                  <button className="btn btn-primary btn-block" type="submit">
                    <i className="fa fa-search"></i>{" "}
                    <span className="ml-1 text-uppercase">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
