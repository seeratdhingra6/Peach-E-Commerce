import React from "react";
import classes from "./PriceCard.module.scss";
const PriceCard = ({ productImage, price, name }) => {
  return (
    <div className={classes.root}>
      <img className={classes.productImage} src={productImage}></img>
      <div className={classes.content}>
        <div className={classes.leftContent}>
          <div className={classes.price}>${price}</div>
          <div className={classes.name}>{name}</div>
        </div>
        <div className={classes.rightContent}>
          <div className={classes.rating}>⭐⭐⭐</div>
          <div className={classes.cart}>
            <img
              className={classes.icons}
              src="https://preview.colorlib.com/theme/amado/img/core-img/cart.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
