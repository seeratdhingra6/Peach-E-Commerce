import React, { useState, useEffect } from "react";
import classes from "./Home.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const firstColumnProducts = products.slice(0, 3);
  const secondColumnProducts = products.slice(3, 6);
  const thirdColumnProducts = products.slice(6, 9);
  useEffect(() => {
    axios("http://localhost:3001/product/all")
      .then((response) => setProducts(response.data.result))
      .catch(() => {});
  }, []);
  return (
    <div className={classes.body}>
      <div className={classes.column1}>
        {firstColumnProducts.map(({ price, image, name, _id }) => {
          return (
            <ProductCard
              key={_id}
              price={price}
              productTitle={name}
              backgroundImage={image}
              id={_id}
            />
          );
        })}
      </div>
      <div className={classes.column2}>
        {secondColumnProducts.map(({ price, image, name, _id }) => {
          return (
            <ProductCard
              key={_id}
              price={price}
              productTitle={name}
              backgroundImage={image}
              id={_id}
            />
          );
        })}
      </div>
      <div className={classes.column3}>
        {thirdColumnProducts.map(({ price, image, name, _id }) => {
          return (
            <ProductCard
              key={_id}
              price={price}
              productTitle={name}
              backgroundImage={image}
              id={_id}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
