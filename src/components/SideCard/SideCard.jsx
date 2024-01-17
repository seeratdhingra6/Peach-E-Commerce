import React, { useState, useContext } from "react";
import cn from "classnames";
import classes from "./SideCard.module.scss";
import logo from "../../images/Peach-logos_black.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cx from "classnames";
import { UserContext, CartContext } from "../../App";
import axios from "axios";

const SideCard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  console.log("DEBUG cart", cart);

  // to stop scrolling
  if (isDrawerOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

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
        {user?.email && (
          <h3 className={classes.userName}>
            Hello {user?.firstName} {user?.lastName}
          </h3>
        )}
        <Link onClick={closeDrawer} to="/">
          <img className={classes.brandLogo} src={logo}></img>
        </Link>
        <ul className={classes.navBar}>
          <li
            className={cx(classes.listItem, {
              [classes.active]: location.pathname === "/",
            })}
          >
            <div className={classes.indicator} />
            <Link onClick={closeDrawer} to="/">
              Home
            </Link>
          </li>
          <li
            className={cx(classes.listItem, {
              [classes.active]: location.pathname === "/shop",
            })}
          >
            <div className={classes.indicator} />
            <Link onClick={closeDrawer} to="/shop">
              Shop
            </Link>
          </li>
          {!user?.email && (
            <>
              <li
                className={cx(classes.listItem, {
                  [classes.active]: location.pathname === "/register",
                })}
              >
                <div className={classes.indicator} />
                <Link onClick={closeDrawer} to="/register">
                  Register
                </Link>
              </li>
              <li
                className={cx(classes.listItem, {
                  [classes.active]: location.pathname === "/login",
                })}
              >
                <div className={classes.indicator} />
                <Link onClick={closeDrawer} to="/login">
                  Login
                </Link>
              </li>
            </>
          )}

          {user?.email && (
            <>
              <li
                className={cx(classes.listItem, {
                  [classes.active]: location.pathname === "/cart",
                })}
              >
                <div className={classes.indicator} />
                <Link onClick={closeDrawer} to="/cart">
                  Cart
                </Link>
              </li>
              <li
                className={cx(classes.listItem, {
                  [classes.active]: location.pathname === "/checkout",
                })}
              >
                <div className={classes.indicator} />
                <Link onClick={closeDrawer} to="/checkout">
                  Checkout
                </Link>
              </li>
              <li
                className={cx(classes.listItem, {
                  [classes.active]: location.pathname === "/checkout",
                })}
              >
                <div className={classes.indicator} />
                <span
                  onClick={() => {
                    setUser({});
                    localStorage.setItem("token", "");
                    navigate("/");
                  }}
                >
                  Logout
                </span>
              </li>
            </>
          )}
        </ul>
        {user?.email && (
          <ul className={classes.serviceOptions}>
            <li className={classes.serviceOption}>
              <img
                className={classes.icons}
                src="https://preview.colorlib.com/theme/amado/img/core-img/cart.png"
              ></img>
              <a>CART</a> <p className={classes.totalAmount}>({cart.length})</p>
            </li>
          </ul>
        )}
      </div>
      <div className={cn({ [classes.blur]: isDrawerOpen })}></div>
    </div>
  );
};
export default SideCard;
