import React from "react";
import classes from "./OrderConfirmed.module.scss";
import image from "../../images/delivery.png";
const OrderConfirmed = () => {
  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <div className={classes.OrderConfirmedImage}>
          <img className={classes.logo} src={image}></img>
        </div>
        <div className={classes.text}>Order Confirmed</div>
      </div>
    </div>
  );
};
export default OrderConfirmed;
