import React, { useEffect, useContext } from "react";
import classes from "./CheckoutBill.module.scss";
import ProductsData from "../../data/home";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import axios from "axios";
const CheckoutBill = ({ onClickHandler }) => {
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {});
  }, []);

  const subtotalPrices = cart.map(({ price, quantity }) => {
    return Number(price) * Number(quantity);
  });

  let subTotal = 0;
  subtotalPrices.forEach((price) => (subTotal += price));

  return (
    <div className={classes.cartTotal}>
      <h5 className={classes.heading}>Cart Total</h5>
      <div className={classes.SubTotal}>
        <p>Subtotal:</p>
        <p>${subTotal}</p>
      </div>
      <div className={classes.delievery}>
        <p>delievery:</p>
        <p>free</p>
      </div>
      <div className={classes.total}>
        <p>Total:</p>
        <p>${subTotal}</p>
      </div>
      {/* <Link to="/orderconfirmed"> */}
      <button
        onClick={onClickHandler}
        type="submit"
        className={classes.CheckOut}
      >
        Checkout
      </button>
      {/* </Link> */}
    </div>
  );
};
export default CheckoutBill;
