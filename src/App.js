import logo from "./logo.svg";
import ProductCard from "./components/ProductCard/ProductCard";
import classes from "./App.module.scss";
import SideCard from "./components/SideHeader/SideCard";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({});
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/shop",
  //     element: <Shop />,
  //   },
  // ]);
  const { pathname } = useLocation();
  return (
    <div className={classes.App}>
      <div className={classes.root}>
        <SideCard />
        {pathname === "/" && <Home />}
        {pathname === "/shop" && <Shop />}
        {pathname === "/product" && <Product cart={cart} setCart={setCart} />}
        {pathname === "/cart" && <Cart cart={cart} setCart={setCart} />}
        {pathname === "/checkout" && <CheckOut cart={cart} setCart={setCart} />}
      </div>
      <Footer />
    </div>
  );
}
export default App;
