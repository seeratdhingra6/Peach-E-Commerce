import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToken } from "../../redux/actions";
import classes from "./Login.module.scss";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const store = useSelector((state) => state.auth);

  const [error, setError] = useState(null);
  const handleChange = (event, key) => {
    setUser({ ...user, [key]: event.target.value });
  };
  const handleLogin = () => {
    axios
      .post("http://localhost:3001/auth/login", user)
      .then((response) => {
        console.log("DEBUG RESPONSE2", response);
        dispatch(addToken(response.data.result.token));
        localStorage.setItem("authToken", response.data.result.token);
        navigate("/");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Login</h1>

      <div className={classes.customerDetails}>
        <input
          onChange={(event) => handleChange(event, "email")}
          type="text"
          placeholder="Enter Your Email"
          required
        />
        <input
          onChange={(event) => handleChange(event, "password")}
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <div className={classes.buttonContainer}>
          <button onClick={handleLogin} className={classes.formSubmit}>
            Log In
          </button>
          {error && <div className={classes.errorMessage}>{error}</div>}
          <Link className={classes.registerMessage} to="/signup">
            not logged in? click here!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
