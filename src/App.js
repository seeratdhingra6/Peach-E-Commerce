import logo from "./logo.svg";
import ProductCard from "./components/ProductCard/ProductCard";
import classes from "./App.module.scss";
import SideCard from "./components/SideCard/SideCard";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import CheckOut from "./pages/checkout/CheckOut";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useContext, createContext } from "react";
import OrderConfirmed from "./pages/orderconfirmed/OrderConfirmed";
import Signup from "./pages/signup";
import Login from "./pages/login";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const UserContext = createContext(null);
export const CartContext = createContext(null);

function App() {
  const [quantity, setQuantity] = useState(1);
  const { pathname } = useLocation();
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);

  const authenticatedPage = (pathname) => {
    return pathname && user.token;
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:3001/profile?token=${token}`)
        .then((response) => {
          setUser(response.data.user);
        })
        .catch(() => {});
      axios
        .get(`http://localhost:3001/cart?token=${token}`)
        .then((response) => setCart(response.data))
        .catch(() => {});
    }
  }, [token]);

  return (
    <GoogleOAuthProvider clientId="909999017785-n9udpt5frj57lm2bfmg73qs7thq86d5v.apps.googleusercontent.com">
      <UserContext.Provider value={{ user, setUser }}>
        <CartContext.Provider value={{ cart, setCart }}>
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
              {authenticatedPage(pathname === "/cart") && <Cart />}
              {authenticatedPage(pathname === "/checkout") && (
                <CheckOut cart={cart} setCart={setCart} />
              )}
              {authenticatedPage(pathname === "/orderconfirmed") && (
                <OrderConfirmed />
              )}
              {pathname === "/register" && <Signup />}
              {pathname === "/login" && <Login />}
            </div>
            <Footer />
          </div>
        </CartContext.Provider>
      </UserContext.Provider>
    </GoogleOAuthProvider>
  );
}
export default App;
