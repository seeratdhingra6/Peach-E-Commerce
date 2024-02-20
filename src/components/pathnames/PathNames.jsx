import Home from "../../pages/home/Home";
import Shop from "../../pages/shop/Shop";
import Product from "../../pages/product/Product";
import Cart from "../../pages/cart/Cart";
import CheckOut from "../../pages/checkout/CheckOut";
import { useLocation } from "react-router-dom";
import OrderConfirmed from "../../pages/orderconfirmed/OrderConfirmed";
import Login from "../../pages/login/Login";
import Signup from "../../pages/signup/Signup";
const PathNames = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <Home />}
      {pathname === "/shop" && <Shop />}
      {pathname === "/product" && <Product />}
      {pathname === "/cart" && <Cart />}
      {pathname === "/checkout" && <CheckOut />}
      {pathname === "/orderconfirmed" && <OrderConfirmed />}
      {pathname === "/login" && <Login />}
      {pathname === "/signup" && <Signup />}
    </>
  );
};
export default PathNames;
