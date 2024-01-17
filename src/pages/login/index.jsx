import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./login.module.scss";
import { UserContext } from "../../App";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, setUser } = useContext(UserContext);

  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const updateFormData = (keyName, value) => {
    setFormData((prev) => ({
      ...prev,
      [keyName]: value,
    }));
  };

  const handleFormSubmission = (event) => {
    setFormError("");
    event.preventDefault();

    if (!formError) {
      const { email, password } = formData;
      axios
        .post("http://localhost:3001/login", {
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.user.token);
          setUser(response.data.user);
          navigate(-1);
        })
        .catch((error) => setFormError(error.response.data));
    }
  };
  return (
    <div className={classes.root}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const { email } = jwtDecode(credentialResponse.credential);

          axios
            .get(`http://localhost:3001/profile?email=${email}`)
            .then((response) => {
              setUser(response.data.user);
              localStorage.setItem("token", response.data.user.token);
              navigate("/");
            })
            .catch(() => {});
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <form className={classes.form} onSubmit={handleFormSubmission}>
        <input
          className={classes.input}
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => updateFormData("email", e.target.value)}
          required
        />
        <input
          className={classes.input}
          type="password"
          placeholder="Enter password"
          onChange={(e) => updateFormData("password", e.target.value)}
          required
        />
        <div className={classes.buttonArea}>
          <button className={classes.submitButton} type="submit">
            Login
          </button>
        </div>
        <span>{formError}</span>
        <span>
          Don't have account <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
