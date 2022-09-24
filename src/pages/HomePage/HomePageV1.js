import React from "react";
import About from "../../components/about/About";
import Blogs from "../../components/blog/Blogs";

import CallToAction from "../../components/callToAction/CallToAction";
import Header from "../../components/common/Header";
import FeatureProperties from "../../components/featureProperties/FeatureProperties";
import Footer from "../../components/footer/Footer";
import MostPopulerPlaces from "../../components/mostpopulerPlaces/MostPopulerPlaces";
import OurPartners from "../../components/ourPartners/OurPartners";
import RecentProperties from "../../components/recentProperties/RecentProperties";
import Testimonials from "../../components/testimonial/Testimonials";

const HomePageV1 = () => {
  return (
    <div>
      <Header />
      <FeatureProperties />
      <RecentProperties />
      <MostPopulerPlaces />
      <About />
      <OurPartners />
      <Testimonials />
      <CallToAction />
      <Blogs />
      <Footer />
    </div>
  );
};

export default HomePageV1;
