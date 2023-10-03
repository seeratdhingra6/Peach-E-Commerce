import React from "react";
import PriceCard from "../../components/priceCard/PriceCard";
import classes from "./Shop.module.scss";
const Shop = () => {
  return (
    <div className={classes.body}>
      <div className={classes.sideBar}>
        <ul className={classes.category}>
          <h5 className={classes.title}>categories</h5>
          <li>chairs</li>
          <li>beds</li>
          <li>accesories</li>
          <li>furniture</li>
          <li>home deco</li>
          <li>dressings</li>
          <li>tables</li>
        </ul>
        <div className={classes.brands}>
          <h5 className={classes.title}>brands</h5>
          <div className={classes.brandTYpes}>
            <input type="checkbox" id="amado" name="amado" checked />
            <label for="amado">Amado</label>
          </div>

          <div className={classes.brandTYpes}>
            <input type="checkbox" id="ikea" name="ikea" />
            <label for="ikea">Ikea</label>
          </div>
          <div className={classes.brandTYpes}>
            <input type="checkbox" id="furniture inc" name="furniture inc" />
            <label for="furniture inc">Furniture Inc</label>
          </div>
          <div className={classes.brandTYpes}>
            <input type="checkbox" id="the factory" name="the factory" />
            <label for="the factory">The Factory</label>
          </div>
          <div className={classes.brandTYpes}>
            <input type="checkbox" id="artdeco" name="artdeco" />
            <label for="artdeco">Art deco</label>
          </div>
        </div>
      </div>
      <div className={classes.showcaseArea}>
        <div className={classes.wrapper}>
          <div className={classes.totalProducts}>
            <h5>showing 1-8 of 25</h5>
          </div>
          <div className={classes.productSortingBox}>
            <div className={classes.productSorting}>
              <label for="sortBySelection">Sort by</label>

              <select name="sortBySelection" id="sortBySelection">
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
        <div className={classes.products}>
          <PriceCard
            price={180}
            name="Modern Chair"
            productImage="	https://preview.colorlib.com/theme/amado/img/product-img/product1.jpg"
          />
          <PriceCard
            price={50}
            name="Flower vase"
            productImage="	https://preview.colorlib.com/theme/amado/img/product-img/product2.jpg"
          />
          <PriceCard
            price={34}
            name="Modern Stool"
            productImage="	https://preview.colorlib.com/theme/amado/img/product-img/product3.jpg"
          />
          <PriceCard
            price={50}
            name="Modern Chair"
            productImage="	https://preview.colorlib.com/theme/amado/img/product-img/product4.jpg"
          />
          <PriceCard
            price={50}
            name="Modern Chair"
            productImage="	https://preview.colorlib.com/theme/amado/img/product-img/product5.jpg"
          />
          <PriceCard
            price={50}
            name="Modern Chair"
            productImage="	https://preview.colorlib.com/theme/amado/img/product-img/product6.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default Shop;
