import React from "react";
import classes from "./CheckoutBill.module.scss";
const CheckoutBill = () => {
  return (
    <div className={classes.cartTotal}>
      <h5 className={classes.heading}>Cart Total</h5>
      <div className={classes.SubTotal}>
        <p>Subtotal:</p>
        <p>$140</p>
      </div>
      <div className={classes.delievery}>
        <p>delievery:</p>
        <p>free</p>
      </div>
      <div className={classes.total}>
        <p>Total:</p>
        <p>$140</p>
      </div>
      <button className={classes.CheckOut}>Checkout</button>
    </div>
  );
};
export default CheckoutBill;
