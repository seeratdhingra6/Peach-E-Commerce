import React, { useEffect, useState } from "react";
import Checkout from "../../components/checkoutForm/CheckoutBill";
import classes from "./Cart.module.scss";
import ProductsData from "../../data/home";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../../redux/actions";
import axios from "axios";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(null);
  const cart = useSelector((state) => state.cart);
  console.log("DEBUG CARTT", cart);
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.token) {
      axios("http://localhost:3001/cart/", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
        .then((response) => {
          console.log("DEBUG CARTRESPONSE", response);
          setCartProducts(response.data.result);
        })
        .catch(() => {});
    }
  }, [auth.token]);

  const updateCartHandler = (productId, quantity) => {
    if (quantity === -1 && cart[productId] === 1) {
      return;
    }
    if (auth.token) {
      axios
        .post(
          "http://localhost:3001/cart/addItem",
          {
            productId,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        )
        .then((response) => {
          // dispatch(updateCart(productId, quantity))
          axios("http://localhost:3001/cart/", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }).then((response) => {
            console.log("DEBUG CARTRESPONSE", response);
            setCartProducts(response.data.result);
            dispatch(updateCart(productId, cart[productId] + quantity));
          });
        });
    }
  };
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Shopping Cart</h1>
      {!auth.token && (
        <Link className={classes.loginMessage} to="/login">
          to continue the purchase, please login!
        </Link>
      )}
      {!cartProducts?.length ? (
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
            <div className={classes.anything}>
              {cartProducts?.map((cartProduct) => {
                return (
                  <div
                    className={classes.productSpecsDetails}
                    key={cartProduct._id}
                  >
                    <div className={classes.img}>
                      <img
                        className={classes.productImage}
                        src={cartProduct.image}
                      ></img>
                    </div>
                    <div className={classes.cartContent}>
                      <h5 className={classes.productTitle}>
                        {cartProduct.name}
                      </h5>
                    </div>
                    <div className={classes.cartContent}>
                      <p className={classes.productRate}>
                        ${cartProduct.price}
                      </p>
                    </div>
                    <div className={classes.cartContent}>
                      <div className={classes.quantity}>
                        <div className={classes.totalAmount}>
                          <span className={classes.buttonContainer}>
                            <span className={classes.quantityText}>Qty</span>
                            <button
                              onClick={() =>
                                updateCartHandler(cartProduct._id, -1)
                              }
                            >
                              -
                            </button>
                            <span className={classes.Quantity}>
                              {cartProduct.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateCartHandler(cartProduct._id, 1)
                              }
                            >
                              +
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.container}>
            <Checkout onClickHandler={() => navigate("/checkout")} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
