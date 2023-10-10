import React from "react";
import classes from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
const ProductCard = ({ price, productTitle, backgroundImage }) => {
  return (
    <Link to="/product">
      <div className={classes.wrapper}>
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
    </Link>
  );
};
export default ProductCard;
