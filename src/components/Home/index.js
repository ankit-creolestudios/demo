import React, { Fragment, useEffect } from "react";
import coverImage from "../../assets/images/cover.jfif";
// import { CgMouse } from "react-icons/all";
import Loader from "../Layout/Loader";
import ProductCard from "./ProductCard";

const Home = () => {
  return (
    <Fragment>
      <div
        className="banner"
        style={{
          background: `url(${coverImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p>Welcome to SHOPVI</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
      </div>

      <h2 className="product_feature_title">Featured Products</h2>

      <div className="container" id="container">
        <ProductCard />
      </div>
    </Fragment>
  );
};

export default Home;
