import React from "react";
import classes from "./ProductCard.module.scss";
const ProductCard = ({
  price,
  productTitle,
  backgroundImage,
  height,
  width,
}) => {
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height,
        width,
      }}
    >
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
