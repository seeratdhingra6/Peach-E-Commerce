import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Product.module.scss";
import ProductsData from "../../data/home";
import { getArrayByNumber } from "../../helpers/common";
import Star from "../../assets/icons/Star";
import UpArrow from "../../assets/icons/UpArrow";
import Added from "../../assets/icons/Added";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/actions";
import axios from "axios";
const Product = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showStrip, setShowStrip] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const [product, setProduct] = useState({});
  const { name, price, rating, description, category, image } = product;
  const ratings = getArrayByNumber(rating);
  const authToken = useSelector((state) => state.auth.token);
  useEffect(() => {
    axios(`http://localhost:3001/product/${productId}`)
      .then((response) => setProduct(response.data.result))
      .catch(() => {});
  }, []);
  const handleCart = () => {
    if (!authToken) {
      navigate("/login");
    }
    if (authToken) {
      axios
        .post(
          "http://localhost:3001/cart/addItem",
          {
            productId,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        .then((response) => {
          console.log("DEBUG addcart", response);
          dispatch(updateCart(productId, quantity));
          setShowStrip(true);
          setInterval(() => {
            setShowStrip(false);
          }, 3000);
        })
        .catch(() => {});
    }
  };
  console.log(product);
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
            <p className={classes.discription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              temporibus, iure quis quod at quisquam dolore iusto nemo dolores
              doloribus voluptate, tempore officiis sit consequuntur. Sed
              placeat esse veritatis natus.
            </p>
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
