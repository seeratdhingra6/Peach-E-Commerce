import React from "react";
import { useEffect, useState } from "react";
import PriceCard from "../../components/priceCard/PriceCard";
import classes from "./Shop.module.scss";
import productsData from "../../data/home";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  console.log("DEBUG CART", cart);
  // to access data from cart and to push in products array through api
  const categories = [...new Set(products.map((product) => product.category))];
  useEffect(() => {
    axios("http://localhost:3001/product/all")
      .then((response) => {
        setProducts(response.data.result);
        console.log("DEBUG RESPONSE SHOP", response);
      })
      .catch(() => {});
  }, []);
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [filter, setFilter] = useState("trending");

  const displayData = products.filter(({ category }) => {
    return activeCategory !== "all" ? activeCategory === category : true;
  });
  if (filter === "newest") {
    displayData.sort((a, b) => {
      if (a.time > b.time) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  if (filter === "rating") {
    displayData.sort((a, b) => {
      if (a.rating > b.rating) {
        return -1;
      } else {
        return 1;
      }
    });
  }
  console.log("DEBUG displayData", displayData);

  return (
    <div className={classes.body}>
      <div className={classes.sideBar}>
        <ul className={classes.category}>
          <h5 className={classes.title}>categories</h5>
          <li
            onClick={() => setActiveCategory("all")}
            className={classes.selectedCategory}
            key={"all"}
          >
            All
          </li>
          {categories.map((category) => {
            return activeCategory === category ? (
              <li
                onClick={() => setActiveCategory(category)}
                className={classes.selectedCategory}
                key={category}
              >
                {category}
              </li>
            ) : (
              <li onClick={() => setActiveCategory(category)} key={category}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.showcaseArea}>
        <div className={classes.wrapper}>
          <div className={classes.totalProducts}>
            <h5>showing 1-9 of 25</h5>
          </div>
          <div className={classes.productSortingBox}>
            <div className={classes.productSorting}>
              <label for="sortBySelection">Sort by</label>

              <select
                className={classes.sortBySelection}
                onChange={(event) => setFilter(event.target.value)}
                name="sortBySelection"
                id="sortBySelection"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
        <div className={classes.products}>
          {displayData.map(({ _id, price, name, image, rating }) => {
            return (
              <div
                className={classes.priceCardRoot}
                onClick={(event) => {
                  navigate(`/product?id=${_id}`);
                }}
              >
                <PriceCard
                  key={_id}
                  price={price}
                  name={name}
                  productImage={image}
                  rating={rating}
                  id={_id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Shop;
