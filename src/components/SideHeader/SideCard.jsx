import React from "react";
import classes from "./SideCard.module.scss";
import logo from "../../images/Peach-logos_black.png";
import { Link } from "react-router-dom";
const SideCard = ({ cart }) => {
  const cartItems = Object.values(cart);
  let totalCartItems = 0;
  cartItems.forEach((cartItem) => (totalCartItems += cartItem));
  return (
    <div className={classes.root}>
      <Link to="/">
        <img className={classes.brandLogo} src={logo}></img>
      </Link>
      <ul className={classes.navBar}>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <Link to="/">Home</Link>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <Link to="/shop">Shop</Link>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <Link to="/cart">Cart</Link>
        </li>
        <li className={classes.listItem}>
          <div className={classes.indicator} />
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
      <ul className={classes.serviceOptions}>
        <li className={classes.serviceOption}>
          <img
            className={classes.icons}
            src="https://preview.colorlib.com/theme/amado/img/core-img/cart.png"
          ></img>
          <a>CART</a> <p className={classes.totalAmount}>({totalCartItems})</p>
        </li>
      </ul>
    </div>
  );
};
export default SideCard;
