import logo from "./logo.svg";
import ProductCard from "./components/ProductCard/ProductCard";
import classes from "./App.module.scss";
import SideCard from "./components/SideHeader/SideCard";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.root}>
        <SideCard />
        {/* <Home /> */}
        {/* <Shop /> */}
        {/* <Product /> */}
        {/* <Cart /> */}
        <CheckOut />
      </div>
    </div>
  );
}
export default App;
