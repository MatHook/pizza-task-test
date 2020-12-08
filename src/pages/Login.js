import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { setLoggined } from "../redux/actions/user";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    e.preventDefault();

    updateFormData({
      ...formData,

      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // just an validation
    if (formData.username.length > 6 && formData.password.length > 6) {
      dispatch(setLoggined(true));
      history.push("/");
      try {
        // Could dipatch user data to user state store
        console.log(formData.username, formData.password);
      } catch (e) {
        console.error(e);
      }
      return;
    }
    alert("Input your data to login");
  };

  return (
    <form className="flex flex-column justify-center" onSubmit={handleSubmit}>
      <div className="self-center flex-column">
        <label>Username</label>
        <div className="flex flex-column">
          <input
            className="h2 pl3 br4 ba b--orange"
            type="text"
            name="username"
            placeholder="Input username"
            onChange={handleChange}
          />
          {formData.username.length < 6 && formData.username.length > 0 ? (
            <span className="login--danger">More than 6 symbols</span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      <div className="mv3 self-center">
        <label>Password</label>
        <div className="flex flex-column">
          <input
            className="login--pass h2 pl3 br4 ba b--orange"
            type="text"
            name="password"
            placeholder="Input password"
            onChange={handleChange}
          />
          {formData.password.length < 6 && formData.password.length > 0 ? (
            <span className="login--danger">More than 6 symbols</span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
      <div className="self-center">
        <div>
          <Button className="button" type="submit">
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
