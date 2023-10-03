import React from "react";
import classes from "./SideCard.module.scss";
const SideCard = () => {
  return (
    <div className={classes.root}>
      <p className={classes.brandLogo}>peach</p>
      <ul className={classes.navBar}>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <span>Home</span>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <span>Shop</span>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <span>Product</span>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <span>Cart</span>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <span>Checkout</span>
        </li>
      </ul>
      <button className={classes.discountButton}>%Discount%</button>
      <ul className={classes.serviceOptions}>
        <li className={classes.serviceOption}>
          <img
            className={classes.icons}
            src="https://preview.colorlib.com/theme/amado/img/core-img/cart.png"
          ></img>
          <a>CART</a> <p className={classes.totalAmount}>(0)</p>
        </li>
        <li>
          <img
            className={classes.icons}
            src="https://preview.colorlib.com/theme/amado/img/core-img/favorites.png"
          ></img>
          <a>FAVOURITE</a>
        </li>
        <li>
          <img
            className={classes.icons}
            src="https://preview.colorlib.com/theme/amado/img/core-img/search.png"
          ></img>
          <a>SEARCH</a>
        </li>
      </ul>
    </div>
  );
};
export default SideCard;
