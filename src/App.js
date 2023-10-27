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
import OrderConfirmed from "./pages/orderconfirmed/OrderConfirmed";

function App() {
  const [cart, setCart] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { pathname } = useLocation();
  console.log("DEBUG cart", cart);
  return (
    <div className={classes.App}>
      <div className={classes.root}>
        <SideCard cart={cart} setCart={setCart} />
        {pathname === "/" && <Home />}
        {pathname === "/shop" && <Shop cart={cart} setCart={setCart} />}
        {pathname === "/product" && (
          <Product
            quantity={quantity}
            setQuantity={setQuantity}
            cart={cart}
            setCart={setCart}
          />
        )}
        {pathname === "/cart" && <Cart cart={cart} setCart={setCart} />}
        {pathname === "/checkout" && <CheckOut cart={cart} setCart={setCart} />}
        {pathname === "/orderconfirmed" && <OrderConfirmed />}
      </div>
      <Footer />
    </div>
  );
}
export default App;
