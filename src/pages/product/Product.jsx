import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./Product.module.scss";
import ProductsData from "../../data/home";
import { useState, useContext } from "react";
import { getArrayByNumber, updateCart } from "../../helpers/common";
import Star from "../../assets/icons/Star";
import UpArrow from "../../assets/icons/UpArrow";
import Added from "../../assets/icons/Added";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";

const Product = ({ cart, setCart, quantity, setQuantity }) => {
  const [showStrip, setShowStrip] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");

  const [product, setProduct] = useState({});

  const { price, name, rating, category, image, description, _id } = product;
  const ratings = getArrayByNumber(rating);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/product?id=${productId}`)
      .then((response) => setProduct(response.data))
      .catch(() => {});
    setQuantity(1);
  }, []);

  const handleCart = () => {
    if (!user.email) {
      navigate("/login");
    }
    // api to add products in cart
    axios.post("http://localhost:3001/cartItems", {
      token: user.token,
      productId: _id,
      quantity,
    });
    setShowStrip(true);
    setInterval(() => {
      setShowStrip(false);
    }, 3000);
  };

  return (
    <>
      <div className={classes.body}>
        <h5 className={classes.breadCrumb}>
          HOME {`>`} {category} {`>`}{" "}
          <span className={classes.activeCrumbTitle}>{name}</span>
        </h5>
        <div className={classes.root}>
          <img className={classes.img} src={image}></img>
          <div className={classes.ProductContent}>
            <div className={classes.wrapper}>
              <div className={classes.line}></div>
              <h5 className={classes.heading}>${price}</h5>
              <h1 className={classes.productTitle}>{name}</h1>
              <div className={classes.rating}>
                <p>
                  {ratings.map(() => (
                    <Star />
                  ))}
                </p>
              </div>
              <p className={classes.stockCheck}>
                <span className={classes.availableStock} />
                in stock
              </p>
            </div>
            <p className={classes.discription}>{description}</p>
            <div className={classes.quantity}>
              <div className={classes.totalAmount}>
                <span className={classes.quantityText}>Qty</span>
                <span className={classes.quantity}>{quantity}</span>
                <span className={classes.buttonContainer}>
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                  >
                    <UpArrow />
                  </button>
                  <button
                    onClick={() => {
                      {
                        quantity > 1 && setQuantity(quantity - 1);
                      }
                    }}
                  >
                    <UpArrow className={classes.reverse} />
                  </button>
                </span>
              </div>
            </div>
            <button onClick={handleCart} className={classes.addToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {showStrip && (
        <div className={classes.popup}>
          <h2 className={classes.popupMessage}>added to cart</h2>

          <Added className={classes.added} />
        </div>
      )}
    </>
  );
};
export default Product;
