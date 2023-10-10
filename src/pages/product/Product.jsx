import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Product.module.scss";
import ProductsData from "../../data/home";
import { useState } from "react";
const Product = ({ cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const { price, productTitle, rating, backgroundImage } = ProductsData.find(
    ({ id }) => id === Number(productId)
  );
  const handleCart = () => {
    setCart({ ...cart, [productId]: quantity });
  };
  return (
    <div className={classes.body}>
      <h5 className={classes.breadCrumb}>
        HOME-FURNITURE-PRODUCT-{productTitle}
      </h5>
      <div className={classes.root}>
        <img className={classes.img} src={backgroundImage}></img>
        <div className={classes.ProductContent}>
          <div className={classes.wrapper}>
            <div className={classes.line}></div>
            <h5 className={classes.heading}>${price}</h5>
            <h1 className={classes.productTitle}>{productTitle}</h1>
            <div className={classes.rating}>
              <p>{rating}</p>
            </div>
            <p className={classes.stockCheck}>🟢in stock</p>
          </div>
          <p className={classes.discription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            temporibus, iure quis quod at quisquam dolore iusto nemo dolores
            doloribus voluptate, tempore officiis sit consequuntur. Sed placeat
            esse veritatis natus.
          </p>
          <div className={classes.quantity}>
            <div className={classes.totalAmount}>
              {quantity}
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  {
                    quantity > 1 && setQuantity(quantity - 1);
                  }
                }}
              >
                -
              </button>
            </div>
          </div>
          <button onClick={handleCart} className={classes.addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
