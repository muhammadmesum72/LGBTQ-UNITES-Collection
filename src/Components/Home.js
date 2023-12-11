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
        <div className="leading-10 space-y-9 text-sm md:text-xl  xl:space-y-12">
          <h1 className="text-center text-xl md:text-2xl xl:text-3xl text-secondary">
            We Love, Unite for Love
          </h1>
          <p>
            Embark on a visual journey celebrating love, diversity, and unity
            with our LGBQT NFT collection. Each digital artwork in this
            collection is a vibrant testament to the kaleidoscope of love,
            embracing every color of the rainbow. From the soft whispers of
            romance to the bold declarations of passion, these NFTs are crafted
            to resonate with the essence of unity, inviting individuals from all
            walks of life to join hands in a celebration of love that knows no
            boundaries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
