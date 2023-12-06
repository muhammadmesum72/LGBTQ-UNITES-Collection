import React from "react";
import HomeBanner from "../Data/banner.png";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center w-full pt-24 pb-12 px-6 md:px-0 xl:pb-24">
        <div className="md:w-9/12 mx-auto py-9">
          <img
            src={HomeBanner}
            alt=""
            className="rounded-xl my-6 md:my-6 w-full"
          />
        </div>
        <div className="leading-10 space-y-9 text-lg  xl:space-y-12">
          <h1 className="text-center md:text-2xl xl:text-3xl text-secondary">We Love, Unite for Love</h1>
          <p>
            Unites NFT aims to biggest love base in base community, direct for
            the LGBT empowerment and promoting love.
          </p>
          <p>What is your love language.?</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
