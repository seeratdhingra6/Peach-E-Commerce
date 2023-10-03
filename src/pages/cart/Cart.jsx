import React from "react";
import Checkout from "../../components/checkoutForm/CheckoutBill";
import classes from "./Cart.module.scss";
const Cart = () => {
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Shopping Cart</h1>
      <div className={classes.wrapper}>
        <div className={classes.root}>
          <div className={classes.productSpecs}>
            <span className={classes.tableHeading}></span>
            <span className={classes.tableHeading}>Name</span>
            <span className={classes.tableHeading}>price</span>
            <span className={classes.tableHeading}>Quantity</span>
          </div>
          <div className={classes.productSpecsDetails}>
            <img
              className={classes.productImage}
              src="	https://preview.colorlib.com/theme/amado/img/bg-img/cart1.jpg"
            ></img>
            <h5 className={classes.productTitle}>White Modern Chair</h5>
            <p className={classes.productRate}>$180</p>
            <input className={classes.quantity} type="number" value={1} />
          </div>
          <div className={classes.productSpecsDetails}>
            <img
              className={classes.productImage}
              src="	https://preview.colorlib.com/theme/amado/img/bg-img/cart1.jpg"
            ></img>
            <h5 className={classes.productTitle}>White Modern Chair</h5>
            <p className={classes.productRate}>$180</p>
            <input className={classes.quantity} type="number" value={1} />
          </div>
          <div className={classes.productSpecsDetails}>
            <img
              className={classes.productImage}
              src="	https://preview.colorlib.com/theme/amado/img/bg-img/cart1.jpg"
            ></img>
            <h5 className={classes.productTitle}>White Modern Chair</h5>
            <p className={classes.productRate}>$180</p>
            <input className={classes.quantity} type="number" value={1} />
          </div>
        </div>
        <Checkout />
      </div>
    </div>
  );
};
export default Cart;
