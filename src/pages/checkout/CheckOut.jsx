import React, { useContext } from "react";
import CheckoutBill from "../../components/checkoutForm/CheckoutBill";
import classes from "./CheckOut.module.scss";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
const CheckOut = ({ onClickHandler }) => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Checkout</h1>
      <form
        className={classes.wrapper}
        onSubmit={() => navigate("/orderconfirmed")}
      >
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
        <CheckoutBill cart={cart} onClickHandler={() => {}} />
      </form>
    </div>
  );
};
export default CheckOut;
