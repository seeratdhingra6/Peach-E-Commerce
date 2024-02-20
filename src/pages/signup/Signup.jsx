import React from "react";
import { useState } from "react";
import axios from "axios";
import classes from "./Signup.module.scss";
import { addToken } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  console.log("DEBUG STORE", auth);
  const dispatch = useDispatch();
  const eventHandler = (event, key) => {
    setUser({
      ...user,
      [key]: event.target.value,
    });
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    if (user.password !== user.confirmPassword) {
      setError("passwords do not match!");
      return;
    }
    axios
      .post("http://localhost:3001/auth/register", user)
      .then((response) => {
        console.log("DEBUG response", response);
        dispatch(addToken(response.data.result.token));
        localStorage.setItem("authToken", response.data.result.token);
        navigate("/");
      })
      .catch((error) => {
        console.log("DEBUG error", error);
        setError(error.response.data.error);
      });
  };

  console.log(user);
  return (
    <div className={classes.body}>
      <h1 className={classes.heading}>Signup</h1>
      <div className={classes.container}>
        <form onSubmit={handleRegistration} className={classes.wrapper}>
          <div className={classes.customerDetails}>
            <div className={classes.userName}>
              <input
                onChange={(event) => eventHandler(event, "firstName")}
                type="text"
                placeholder="First Name"
                required
              />

              <input
                onChange={(event) => eventHandler(event, "lastName")}
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              onChange={(event) => eventHandler(event, "email")}
              type="email"
              placeholder="Enter Your Email"
              required
            />

            <input
              onChange={(event) => eventHandler(event, "password")}
              type="password"
              placeholder="Enter Your Password"
              required
            />

            <input
              onChange={(event) => eventHandler(event, "confirmPassword")}
              type="password"
              placeholder="Confirm Your Password"
              required
            />

            <div className={classes.buttonContainer}>
              <button type="submit" className={classes.formSubmit}>
                Sign Up
              </button>
            </div>
            {error && <div className={classes.errorMessage}>{error}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
