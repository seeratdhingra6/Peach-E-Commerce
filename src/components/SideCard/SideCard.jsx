import React, { useState } from "react";
import cn from "classnames";
import classes from "./SideCard.module.scss";
import logo from "../../images/Peach-logos_black.png";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
const SideCard = ({ cart }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  console.log(location);
  const cartItems = Object.values(cart);
  let totalCartItems = 0;
  cartItems.forEach((cartItem) => (totalCartItems += cartItem));
  return (
    <div className={classes.wrapper}>
      {!isDrawerOpen && (
        <div className={classes.mobileHeader}>
          <button
            className={classes.openButton}
            onClick={() => setIsDrawerOpen(true)}
          >
            <div />
            <div />
            <div />
          </button>
        </div>
      )}
      <div
        className={cn(classes.root, {
          [classes.dontShowDrawer]: !isDrawerOpen,
        })}
      >
        <div className={classes.closeButtonBox}>
          <button
            className={cn(classes.openButton)}
            onClick={() => setIsDrawerOpen(false)}
          >
            <div />
            <div />
            <div />
          </button>
        </div>
        <Link to="/">
          <img className={classes.brandLogo} src={logo}></img>
        </Link>
        <ul className={classes.navBar}>
          <li
            className={cx(classes.listItem, {
              [classes.active]: location.pathname === "/",
            })}
          >
            <div className={classes.indicator} />
            <Link to="/">Home</Link>
          </li>
          <li
            className={cx(classes.listItem, {
              [classes.active]: location.pathname === "/shop",
            })}
          >
            <div className={classes.indicator} />
            <Link to="/shop">Shop</Link>
          </li>
          <li
            className={cx(classes.listItem, {
              [classes.active]: location.pathname === "/cart",
            })}
          >
            <div className={classes.indicator} />
            <Link to="/cart">Cart</Link>
          </li>
          <li
            className={cx(classes.listItem, {
              [classes.active]: location.pathname === "/checkout",
            })}
          >
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
            <a>CART</a>{" "}
            <p className={classes.totalAmount}>({totalCartItems})</p>
          </li>
        </ul>
      </div>
      <div className={cn({ [classes.blur]: isDrawerOpen })}></div>
    </div>
  );
};
export default SideCard;
