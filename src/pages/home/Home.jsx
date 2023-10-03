import React from "react";
import classes from "./Home.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
const Home = () => {
  return (
    <>
      <div className={classes.column1}>
        <ProductCard
          price={180}
          productTitle={"Modern chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/1.jpg.webp"
          }
          height={400}
          width={400}
        />
        <ProductCard
          price={18}
          productTitle={"Plant Pot"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/5.jpg.webp"
          }
          height={400}
          width={400}
        />
        <ProductCard
          price={318}
          productTitle={"Modern Rocking Chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/8.jpg.webp"
          }
          height={480}
          width={400}
        />
      </div>
      <div className={classes.column2}>
        <ProductCard
          price={180}
          productTitle={"Minimalistic plant pot"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/2.jpg.webp"
          }
          height={568}
          width={400}
        />
        <ProductCard
          price={320}
          productTitle={"Small Table"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/6.jpg.webp"
          }
          height={356}
          width={400}
        />
        <ProductCard
          price={318}
          productTitle={"Home Decor"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/9.jpg.webp"
          }
          height={356}
          width={400}
        />
      </div>
      <div className={classes.column3}>
        <ProductCard
          price={180}
          productTitle={"Modern Chair"}
          backgroundImage={
            "	https://preview.colorlib.com/theme/amado/img/bg-img/3.jpg"
          }
          height={356}
          width={400}
        />
        <ProductCard
          price={180}
          productTitle={"Night Stand"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/4.jpg"
          }
          height={356}
          width={400}
        />
        <ProductCard
          price={318}
          productTitle={"Metallic Chair"}
          backgroundImage={
            "https://preview.colorlib.com/theme/amado/img/bg-img/7.jpg"
          }
          height={568}
          width={400}
        />
      </div>
    </>
  );
};
export default Home;
