import React from "react";
import Checkout from "../../components/checkoutForm/CheckoutBill";
import classes from "./Cart.module.scss";
import ProductsData from "../../data/home";
const Cart = ({ cart, setCart }) => {
  const cartProductIds = Object.keys(cart);

  const cartProducts = cartProductIds.map((cartProductId) => {
    return ProductsData.find(({ id }) => {
      return Number(cartProductId) === id;
    });
  });
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
          <div>
            {cartProducts.map(
              ({ productTitle, price, backgroundImage, id }) => {
                return (
                  <div className={classes.productSpecsDetails} key={id}>
                    <img
                      className={classes.productImage}
                      src={backgroundImage}
                    ></img>
                    <h5 className={classes.productTitle}>{productTitle}</h5>
                    <p className={classes.productRate}>${price}</p>
                    <p className={classes.quantity}>
                      <button
                        onClick={() =>
                          cart[id] > 1 &&
                          setCart({ ...cart, [id]: cart[id] - 1 })
                        }
                      >
                        -
                      </button>
                      {cart[id]}
                      <button
                        onClick={() => setCart({ ...cart, [id]: cart[id] + 1 })}
                      >
                        +
                      </button>
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <Checkout cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};
export default Cart;
