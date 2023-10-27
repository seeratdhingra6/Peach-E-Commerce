import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Product.module.scss";
import ProductsData from "../../data/home";
import { useState } from "react";
import { getArrayByNumber, updateCart } from "../../helpers/common";
import Star from "../../assets/icons/Star";
import UpArrow from "../../assets/icons/UpArrow";
import Added from "../../assets/icons/Added";
const Product = ({ cart, setCart, quantity, setQuantity }) => {
  const [showStrip, setShowStrip] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const { price, productTitle, rating, backgroundImage, category } =
    ProductsData.find(({ id }) => id === Number(productId));
  const ratings = getArrayByNumber(rating);
  return (
    <>
      <div className={classes.body}>
        <h5 className={classes.breadCrumb}>
          HOME {`>`} {category} {`>`}{" "}
          <span className={classes.activeCrumbTitle}>{productTitle}</span>
        </h5>
        <div className={classes.root}>
          <img className={classes.img} src={backgroundImage}></img>
          <div className={classes.ProductContent}>
            <div className={classes.wrapper}>
              <div className={classes.line}></div>
              <h5 className={classes.heading}>${price}</h5>
              <h1 className={classes.productTitle}>{productTitle}</h1>
              <div className={classes.rating}>
                <p>
                  {ratings.map(() => (
                    <Star />
                  ))}
                </p>
              </div>
              <p className={classes.stockCheck}>
                <span className={classes.availableStock} />
                in stock
              </p>
            </div>
            <p className={classes.discription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              temporibus, iure quis quod at quisquam dolore iusto nemo dolores
              doloribus voluptate, tempore officiis sit consequuntur. Sed
              placeat esse veritatis natus.
            </p>
            <div className={classes.quantity}>
              <div className={classes.totalAmount}>
                <span className={classes.quantityText}>Qty</span>
                <span className={classes.quantity}>{quantity}</span>
                <span className={classes.buttonContainer}>
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <UpArrow />
                  </button>
                  <button
                    onClick={() => {
                      {
                        quantity > 1 && setQuantity(quantity - 1);
                      }
                    }}
                  >
                    <UpArrow className={classes.reverse} />
                  </button>
                </span>
              </div>
            </div>
            <button
              onClick={(event) => {
                updateCart(productId, quantity, cart, setCart);
                setShowStrip(true);
                setInterval(() => {
                  setShowStrip(false);
                }, 3000);
              }}
              className={classes.addToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {showStrip && (
        <div className={classes.popup}>
          <h2 className={classes.popupMessage}>added to cart</h2>

          <Added className={classes.added} />
        </div>
      )}
    </>
  );
};
export default Product;
