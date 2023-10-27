import React from "react";
import classes from "./Home.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  return (
    <div className={classes.body}>
      <div className={classes.column1}>
        <ProductCard
          price={180}
          productTitle={"Modern chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/1.jpg.webp"
          }
          id={1}
        />
        <ProductCard
          price={18}
          productTitle={"Plant Pot"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/5.jpg.webp"
          }
          id={2}
        />
        <ProductCard
          price={318}
          productTitle={"Modern Rocking Chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/8.jpg.webp"
          }
          id={3}
        />
      </div>
      <div className={classes.column2}>
        <ProductCard
          price={180}
          productTitle={"Minimalistic plant pot"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/2.jpg.webp"
          }
          id={4}
        />
        <ProductCard
          price={320}
          productTitle={"Small Table"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/6.jpg.webp"
          }
          id={5}
        />
        <ProductCard
          price={318}
          productTitle={"Home Decor"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/9.jpg.webp"
          }
          id={6}
        />
      </div>
      <div className={classes.column3}>
        <ProductCard
          price={180}
          productTitle={"Modern Chair"}
          backgroundImage={
            "	https://preview.colorlib.com/theme/amado/img/bg-img/3.jpg"
          }
          id={7}
        />
        <ProductCard
          price={180}
          productTitle={"Night Stand"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/4.jpg"
          }
          id={8}
        />
        <ProductCard
          price={318}
          productTitle={"Metallic Chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/7.jpg"
          }
          id={9}
        />
      </div>
    </div>
  );
};
export default Home;
