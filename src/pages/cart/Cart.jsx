import React from "react";
import Checkout from "../../components/checkoutForm/CheckoutBill";
import classes from "./Cart.module.scss";
import ProductsData from "../../data/home";
import { useNavigate } from "react-router-dom";
const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const cartProductIds = Object.keys(cart);

  const cartProducts = cartProductIds.map((cartProductId) => {
    return ProductsData.find(({ id }) => {
      return Number(cartProductId) === id;
    });
  });
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Shopping Cart</h1>
      {!cartProducts.length ? (
        <div className={classes.emptyMessage}>{"cart is empty :("}</div>
      ) : (
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
                ({ productTitle, price, backgroundImage, id, quantity }) => {
                  return (
                    <div className={classes.productSpecsDetails} key={id}>
                      <img
                        className={classes.productImage}
                        src={backgroundImage}
                      ></img>
                      <h5 className={classes.productTitle}>{productTitle}</h5>
                      <p className={classes.productRate}>${price}</p>
                      <div className={classes.quantity}>
                        <div className={classes.totalAmount}>
                          <span className={classes.buttonContainer}>
                            <span className={classes.quantityText}>Qty</span>
                            <button
                              onClick={() =>
                                cart[id] > 1 &&
                                setCart({ ...cart, [id]: cart[id] - 1 })
                              }
                            >
                              -
                            </button>
                            <span className={classes.Quantity}>{quantity}</span>

                            {cart[id]}
                            <button
                              onClick={() =>
                                setCart({ ...cart, [id]: cart[id] + 1 })
                              }
                            >
                              +
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <Checkout
            cart={cart}
            setCart={setCart}
            onClickHandler={() => navigate("/checkout")}
          />
        </div>
      )}
    </div>
  );
};
export default Cart;
