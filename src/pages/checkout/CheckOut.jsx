import React from "react";
import CheckoutBill from "../../components/checkoutForm/CheckoutBill";
import classes from "./CheckOut.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CheckOut = ({ onClickHandler }) => {
  const navigate = useNavigate();
  const authToken = useSelector((state) => state.auth.token);
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Checkout</h1>
      <div className={classes.container}>
        <form className={classes.wrapper}>
          <div className={classes.customerDetails}>
            <div className={classes.userName}>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <input type="text" placeholder="Company Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Country Name" required />
            <input type="text" placeholder="Address" required />
            <div className={classes.information}>
              <input type="text" placeholder="Zip Code" required />
              <input type="number" placeholder=" Phone Number" required />
            </div>
            <textarea
              placeholder="Leave a comment about your order"
              rows={6}
              columns={24}
            ></textarea>
          </div>
        </form>
        <CheckoutBill
          onClickHandler={() => {
            if (authToken) {
              navigate("/orderconfirmed");
            }
          }}
        />
      </div>
    </div>
  );
};
export default CheckOut;
