import React from "react";
import logo from "../../assets/images/logo-blue-stiky.png";
import logo1 from "../../assets/images/logo-blue.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-hover navbar-expand-lg navbar-soft navbar-transparent">
      <div className="container">
        <a className="navbar-brand" href="/homepage-v1.html">
          <img src={logo1} alt="" />

          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main_nav99"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav99">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                {" "}
                Home{" "}
              </a>
              <ul className="dropdown-menu dropdown-menu-left animate fade-up">
                <li>
                  <a className="dropdown-item" href="/homepage-v1.html">
                    {" "}
                    Home version one{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="homepage-v2.html">
                    {" "}
                    Home version two{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/homepage-v3.html">
                    {" "}
                    Home version three{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/homepage-v4.html">
                    {" "}
                    Home version four{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/homepage-v5.html">
                    {" "}
                    Home version five{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                {" "}
                Pages{" "}
              </a>
              <ul className="dropdown-menu animate fade-up">
                <li>
                  <a className="dropdown-item icon-arrow" href="#">
                    {" "}
                    Property Listing{" "}
                  </a>
                  <ul className="submenu dropdown-menu  animate fade-up">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listing-style-v1.html"
                      >
                        {" "}
                        Style 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listing-style-v2.html"
                      >
                        {" "}
                        Style 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listing-style-v3.html"
                      >
                        {" "}
                        Style 3
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listing-style-v4.html"
                      >
                        {" "}
                        Style 4
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/listing-style-v5.html"
                      >
                        {" "}
                        Style 5
                      </a>
                    </li>

                    <li>
                      <a className="dropdown-item icon-arrow" href="">
                        Submenu item 3{" "}
                      </a>
                      <ul className="submenu dropdown-menu  animate fade-up">
                        <li>
                          <a className="dropdown-item" href="">
                            Multi level 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="">
                            Multi level 2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        Submenu item 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="">
                        Submenu item 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item icon-arrow" href="#">
                    {" "}
                    Property single detail{" "}
                  </a>
                  <ul className="submenu dropdown-menu  animate fade-up">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/single-detail-v1.html"
                      >
                        Style 1
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/single-detail-v2.html"
                      >
                        Style 2
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/single-detail-v3.html"
                      >
                        Style 3
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/single-detail-v4.html"
                      >
                        Style 4
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/single-detail-v5.html"
                      >
                        Style 5
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a className="dropdown-item icon-arrow" href="#">
                    {" "}
                    Agent{" "}
                  </a>
                  <ul className="submenu dropdown-menu  animate fade-up">
                    <li>
                      <a className="dropdown-item" href="/agents-v1.html">
                        Style 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/agents-v2.html">
                        Style 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/agents-detail.html">
                        Agent detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item icon-arrow" href="#">
                    {" "}
                    Agency{" "}
                  </a>
                  <ul className="submenu dropdown-menu  animate fade-up">
                    <li>
                      <a className="dropdown-item" href="/agency-v1.html">
                        Style 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/agency-v2.html">
                        Style 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/agency-detail.html">
                        Agency detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item" href="/about-us.html">
                    About us{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="/login.html">
                    Login{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="/register.html">
                    {" "}
                    Register{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="/contact.html">
                    {" "}
                    Contact{" "}
                  </a>{" "}
                </li>
                <li>
                  <a className="dropdown-item" href="/404.html">
                    {" "}
                    404 Error{" "}
                  </a>{" "}
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                {" "}
                Blog{" "}
              </a>
              <ul className="dropdown-menu dropdown-menu-left animate fade-up">
                <li>
                  <a className="dropdown-item" href="/blog.html">
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/blog-single.html">
                    {" "}
                    Blog Single{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact.html">
                {" "}
                contact{" "}
              </a>
            </li>
          </ul>

          {/* <!-- Search bar.// --> */}
          <ul className="navbar-nav ">
            <li>
              <a href="#" className="btn btn-primary text-capitalize">
                <i className="fa fa-plus-circle mr-1"></i> add listing
              </a>
            </li>
          </ul>
          {/* <!-- Search content bar.// --> */}
          <div className="top-search navigation-shadow">
            <div className="container">
              <div className="input-group ">
                <form action="#">
                  <div className="row no-gutters mt-3">
                    <div className="col">
                      <input
                        className="form-control border-secondary border-right-0 rounded-0"
                        type="search"
                        value=""
                        placeholder="Search "
                        id="example-search-input4"
                      />
                    </div>
                    <div className="col-auto">
                      <a
                        className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                        href="/search-result.html"
                      >
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- Search content bar.// -->
            <!-- navbar-collapse.// --> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
