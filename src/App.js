import classes from "./App.module.scss";
import SideCard from "./components/SideCard/SideCard";
import PathNames from "./components/pathnames/PathNames";
import Footer from "./components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addProfile, updateCart, addToken } from "./redux/actions";
function App() {
  const authToken = useSelector((state) => state.auth.token);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  // check if token available in local storage
  const storageToken = localStorage.getItem("authToken");
  console.log("DEBUG redux store app component line 12", store);

  useEffect(() => {
    if (storageToken) {
      dispatch(addToken(storageToken));
    }
  }, [storageToken]);

  useEffect(() => {
    if (authToken) {
      axios("http://localhost:3001/auth/profile", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }).then((response) => {
        console.log("DEBUG RESPONSE", response);
        const { firstName, lastName, email, id } = response.data.result;
        dispatch(addProfile(firstName, lastName, email, id));
      });

      axios
        .get("http://localhost:3001/cart/", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          response.data.result.map(({ _id, quantity }) => {
            dispatch(updateCart(_id, quantity));
          });
        });
    }
  }, [authToken]);

  console.log(authToken);
  return (
    <div className={classes.App}>
      <div className={classes.root}>
        <SideCard />
        <PathNames />
      </div>
      <Footer />
    </div>
  );
}
export default App;
