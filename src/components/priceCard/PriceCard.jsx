import React, { useState } from "react";
import classes from "./PriceCard.module.scss";
import Star from "../../assets/icons/Star";
import { getArrayByNumber, updateCart } from "../../helpers/common";
import Added from "../../assets/icons/Added";
const PriceCard = ({
  productImage,
  price,
  name,
  rating,
  id,
  cart,
  setCart,
}) => {
  const ratings = getArrayByNumber(rating);
  const [showStrip, setShowStrip] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <img className={classes.productImage} src={productImage}></img>
        <div className={classes.content}>
          <div className={classes.leftContent}>
            <div className={classes.price}>${price}</div>
            <div className={classes.name}>{name}</div>
          </div>
          <div className={classes.rightContent}>
            <div className={classes.rating}>
              {ratings.map(() => (
                <Star />
              ))}
            </div>

            <button
              className={classes.cart}
              onClick={(event) => {
                event.stopPropagation();
                updateCart(id, 1, cart, setCart);
                setShowStrip(true);
                setInterval(() => {
                  setShowStrip(false);
                }, 3000);
              }}
            >
              {" "}
              <img
                className={classes.icons}
                src="https://preview.colorlib.com/theme/amado/img/core-img/cart.png"
              ></img>
            </button>
          </div>
        </div>
      </div>
      {showStrip && (
        <div className={classes.popup}>
          <p className={classes.popupMessage}>added to cart</p>
          <Added className={classes.added} />
        </div>
      )}
    </>
  );
};
export default PriceCard;
