import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/lab";
import product from "../../assets/images/products/mb_img_58.jpg";
const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <>
      <div>
        <Link className="product_card" to={`/product/${product._id}`}>
          <img src={product.images[0].url} alt={"..."} />
          <p>{product.name}</p>
          <div>
            {/* <Rating {...options} />{" "} */}
            <span className="product_review">
              {" "}
              {product.numOfReview} Reviews
            </span>
          </div>
          <span className="product_price">₹ {product.price}</span>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
