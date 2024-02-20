import React, { useEffect } from "react";
import classes from "./CheckoutBill.module.scss";
import ProductsData from "../../data/home";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const CheckoutBill = ({ onClickHandler }) => {
  // const dispatch = useDispatch();
  const [cartProducts, setCartProducts] = useState(null);
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // console.log("DEBUG CARTT", cart);
  console.log("DEBUG CARTPRODUCTS", cartProducts);

  useEffect(() => {
    if (auth.token) {
      axios("http://localhost:3001/cart/", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => {
          console.log("DEBUG CARTRESPONSE", response);
          setCartProducts(response.data.result);
        })
        .catch(() => {});
    }
  }, [auth.token]);

  let subTotal = 0;

  cartProducts?.forEach(
    (cartProduct) =>
      (subTotal += Number(cartProduct.price * cart[cartProduct._id]))
  );

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
