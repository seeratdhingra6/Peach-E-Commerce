import React from "react";
import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ price, productTitle, backgroundImage, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes.wrapper}
      onClick={() => navigate(`/product?id=${id}`)}
    >
      <img
        className={classes.productImage}
        src={backgroundImage}
        alt={productTitle}
      />
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <h1 className={classes.line}></h1>
        <div className={classes.startingRate}>From ${price}</div>
        <h4 className={classes.productTitle}>{productTitle}</h4>
      </div>
    </div>
  );
};
export default ProductCard;
