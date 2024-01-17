import React, { useState, useEffect, useContext } from "react";
import Checkout from "../../components/checkoutForm/CheckoutBill";
import classes from "./Cart.module.scss";
import ProductsData from "../../data/home";
import { useNavigate } from "react-router-dom";
import { UserContext, CartContext } from "../../App";
import axios from "axios";

const Cart = () => {
  const navigate = useNavigate();
  const [cartDetails, setCartDetails] = useState([]);

  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const cartProductIds = Object.keys(cart);

  // TODO: create api custom hook
  // create context

  useEffect(() => {
    if (user.token) {
      // api to fetch user cart details
      axios
        .get(`http://localhost:3001/cart?token=${user.token}`)
        .then((response) => setCartDetails(response.data))
        .catch(() => {});
    }
  }, [user.token]);
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Shopping Cart</h1>
      {!cartDetails.length ? (
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
              {cartDetails.map(({ name, price, image, id, quantity }) => {
                return (
                  <div className={classes.productSpecsDetails} key={id}>
                    <img className={classes.productImage} src={image}></img>
                    <h5 className={classes.productTitle}>{name}</h5>
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
              })}
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
