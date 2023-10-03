import React from "react";
import classes from "./Product.module.scss";
const Product = () => {
  return (
    <div className={classes.body}>
      <h5 className={classes.breadCrumb}>
        HOME-FURNITURE-PRODUCT-MODERN CHAIR
      </h5>
      <div className={classes.root}>
        <img
          className={classes.img}
          src="https://preview.colorlib.com/theme/amado/img/product-img/pro-big-1.jpg"
        ></img>
        <div className={classes.ProductContent}>
          <div className={classes.wrapper}>
            <h5>$180</h5>
            <h1>WHITE MODERN CHAIR</h1>
            <div className={classes.rating}>
              <p>⭐⭐⭐⭐⭐</p>
              <p>write a review</p>
            </div>
            <p>🟢in stock</p>
          </div>
          <p className={classes.discription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            temporibus, iure quis quod at quisquam dolore iusto nemo dolores
            doloribus voluptate, tempore officiis sit consequuntur. Sed placeat
            esse veritatis natus.
          </p>
          <input type="number" value={1} />
          <button className={classes.addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
