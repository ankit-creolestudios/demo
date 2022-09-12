import { Slider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productActions } from "../../app/feature/productSlice";
import ProductCard from "../Home/ProductCard";

const Product = () => {
  const categories = ["SmartPhones", "Laptop", "Tv", "Camera"];
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const [category, setCategory] = useState("");
  useEffect(() => {
    dispatch(productActions.getAllProduct());
  }, [dispatch]);
  console.log(state);
  return (
    <div>
      Product
      <div>
        <div>
          <h2 className="product_heading">Products</h2>
          <div className="products">
            {state?.products?.product?.map((product) => {
              return <ProductCard product={product} key={product._id} />;
            })}
          </div>

          <div className="filter_box">
            {/* <Typography>Price</Typography> */}

            <Typography>Categories</Typography>
            <ul className="category_box">
              {categories.map((category) => (
                <li
                  className="category_link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
