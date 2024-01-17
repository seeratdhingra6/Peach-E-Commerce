import { useState, useContext } from "react";
import classes from "./signup.module.scss";
import { UserContext } from "../../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { setUser } = useContext(UserContext);

  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const updateFormData = (keyName, value) => {
    setFormData((prev) => ({
      ...prev,
      [keyName]: value,
    }));
  };

  const comparePassword = (oldPassword, newPassword) => {
    if (newPassword !== oldPassword) {
      setFormError(`Passwords do not match!`);
      return false;
    }
    return true;
  };

  const handleFormSubmission = (event) => {
    setFormError("");
    event.preventDefault();
    const isPasswordMatched = comparePassword(
      formData.password,
      formData.confirmPassword
    );

    if (isPasswordMatched && !formError) {
      const { firstName, lastName, email, password } = formData;
      axios
        .post("http://localhost:3001/register", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.user.token);
          setUser(response.data.user);
          navigate("/");
        })
        .catch((error) => setFormError(error.response.data));
    }
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleFormSubmission}>
        <input
          className={classes.input}
          type="text"
          placeholder="Enter first Name"
          onChange={(e) => updateFormData("firstName", e.target.value)}
          required
        />
        <input
          className={classes.input}
          type="text"
          placeholder="Enter last Name"
          onChange={(e) => updateFormData("lastName", e.target.value)}
          required
        />
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
        <input
          className={classes.input}
          type="password"
          placeholder="Confirm password"
          onChange={(e) => updateFormData("confirmPassword", e.target.value)}
          required
        />
        <div className={classes.buttonArea}>
          <button className={classes.submitButton} type="submit">
            Submit
          </button>
        </div>
        <span className={classes.errorMessage}>{formError}</span>
      </form>
    </div>
  );
};

export default Signup;
