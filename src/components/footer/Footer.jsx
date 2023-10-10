import React from "react";
import classes from "./Footer.module.scss";
import logo from "../../images/Peach-logos_transparent.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.body}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Link to="/">
            {" "}
            <img className={classes.logo} src={logo}></img>
          </Link>
          <p className={classes.copyright}>
            copyright@2023 All rights reserved|
          </p>
        </div>
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
            <Link to="/product">Product</Link>
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
      </div>
    </div>
  );
};
export default Footer;
