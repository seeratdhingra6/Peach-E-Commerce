import React from "react";
import { useState } from "react";
import PriceCard from "../../components/priceCard/PriceCard";
import classes from "./Shop.module.scss";
import productsData from "../../data/home";
import { Link } from "react-router-dom";
const categories = [
  "chairs",
  "beds",
  "accesories",
  "furniture",
  "home deco",
  "dressings",
  "tables",
];
const brands = ["Amado", "Ikea", "Furniture Inc", "The Factory", "Art Deco"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("chairs");
  const [filter, setFilter] = useState("trending");
  const [activeBrands, setActiveBrands] = useState([]);
  const displayData = productsData.filter(({ category, brand }) => {
    return activeBrands.length > 0
      ? activeCategory === category && activeBrands.includes(brand)
      : activeCategory === category;
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

  const setBrands = (event, givenBrand) => {
    if (event.target.checked) {
      setActiveBrands([...activeBrands, givenBrand]);
    } else {
      const filteredBrands = activeBrands.filter(
        (brand) => brand !== givenBrand
      );
      setActiveBrands(filteredBrands);
    }
  };

  return (
    <div className={classes.body}>
      <div className={classes.sideBar}>
        <ul className={classes.category}>
          <h5 className={classes.title}>categories</h5>
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
        <div className={classes.brands}>
          <h5 className={classes.title}>brands</h5>
          {brands.map((brand) => {
            return (
              <div key={brand} className={classes.brandTYpes}>
                <input
                  onChange={(event) => setBrands(event, brand)}
                  type="checkbox"
                  id={brand}
                  name={brand}
                  checked={activeBrands.includes(brand)}
                />
                <label for={brand}>{brand}</label>
              </div>
            );
          })}
        </div>
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
          {displayData.map(({ id, price, productTitle, backgroundImage }) => {
            return (
              <Link to={`/product?id=${id}`}>
                <PriceCard
                  key={id}
                  price={price}
                  name={productTitle}
                  productImage={backgroundImage}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Shop;
