import React from "react";
import NewsAndUpdates from "../../components/News And Updates";
import WhoWeAre from "../../components/whoweare";
import WhatWeDo from "../../components/What We Do";
import HomeOurProduct from "../../components/HomeOurProducts";
import NewsEvents from "../../components/HomeNewsEvents";
import NewsletterSubscription from "../../components/SubscribeNewsLetter";
import Testimonials from "../../components/WhatPeopleSay";
const Home = () => {
  return (
    <>
      <div className="mt-24">
        <NewsAndUpdates />
      </div>
      <div className="m-12">
        <WhoWeAre />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div>
        <HomeOurProduct />
      </div>
      <div>
        <NewsEvents />
      </div>
      <div className="my-4">
        <NewsletterSubscription />
      </div>
      <div><Testimonials /></div>
    </>
  );
};
export default Home;
