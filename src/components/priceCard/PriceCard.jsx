import React, { useState } from "react";
import classes from "./PriceCard.module.scss";
import Star from "../../assets/icons/Star";
import { getArrayByNumber } from "../../helpers/common";
import Added from "../../assets/icons/Added";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions";
const PriceCard = ({ productImage, price, name, rating, id }) => {
  const authToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const ratings = getArrayByNumber(rating);
  const [showStrip, setShowStrip] = useState(false);
  const dispatch = useDispatch();

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
                if (!authToken) {
                  navigate("/login");
                }
                event.stopPropagation();
                dispatch(updateCart(id, 1));
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
