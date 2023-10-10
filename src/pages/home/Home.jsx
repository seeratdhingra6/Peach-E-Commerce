import React from "react";
import classes from "./Home.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/footer/Footer";
import ProductsData from "../../data/home";
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
        />
        <ProductCard
          price={18}
          productTitle={"Plant Pot"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/5.jpg.webp"
          }
        />
        <ProductCard
          price={318}
          productTitle={"Modern Rocking Chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/8.jpg.webp"
          }
        />
      </div>
      <div className={classes.column2}>
        <ProductCard
          price={180}
          productTitle={"Minimalistic plant pot"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/2.jpg.webp"
          }
        />
        <ProductCard
          price={320}
          productTitle={"Small Table"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/6.jpg.webp"
          }
        />
        <ProductCard
          price={318}
          productTitle={"Home Decor"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/9.jpg.webp"
          }
        />
      </div>
      <div className={classes.column3}>
        <ProductCard
          price={180}
          productTitle={"Modern Chair"}
          backgroundImage={
            "	https://preview.colorlib.com/theme/amado/img/bg-img/3.jpg"
          }
        />
        <ProductCard
          price={180}
          productTitle={"Night Stand"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/4.jpg"
          }
        />
        <ProductCard
          price={318}
          productTitle={"Metallic Chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/7.jpg"
          }
        />
      </div>
    </div>
  );
};
export default Home;
