import React, { useState, useEffect } from "react";
import classes from "./Home.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);

  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  const thirdRow = products.slice(6, 9);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {});
  }, []);
  return (
    <div className={classes.body}>
      <div className={classes.column1}>
        {firstRow.map(({ price, name, image, _id }) => {
          return (
            <ProductCard
              price={price}
              productTitle={name}
              backgroundImage={image}
              id={_id}
            />
          );
        })}
      </div>
      <div className={classes.column2}>
        {secondRow.map(({ price, name, image, _id }) => {
          return (
            <ProductCard
              price={price}
              productTitle={name}
              backgroundImage={image}
              id={_id}
            />
          );
        })}
      </div>
      <div className={classes.column3}>
        {thirdRow.map(({ price, name, image, _id }) => {
          return (
            <ProductCard
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
