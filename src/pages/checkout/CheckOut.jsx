import React from "react";
import CheckoutBill from "../../components/checkoutForm/CheckoutBill";
import classes from "./CheckOut.module.scss";
const CheckOut = () => {
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Checkout</h1>
      <div className={classes.wrapper}>
        <div className={classes.customerDetails}>
          <div className={classes.userName}>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Country Name" />
          <input type="text" placeholder="Address" />
          <div className={classes.information}>
            <input type="text" placeholder="Zip Code" />
            <input type="number" placeholder=" Phone Number" />
          </div>
          <textarea
            placeholder="Leave a comment about your order"
            rows={6}
            columns={24}
          ></textarea>
        </div>
        <CheckoutBill />
      </div>
    </div>
  );
};
export default CheckOut;
