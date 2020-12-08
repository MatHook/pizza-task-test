import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import { setLoggined } from "../redux/actions/user";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // eslint-disable-next-line
  const mailregex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

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
    if (formData.username.match(mailregex) && formData.password.match(passw)) {
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
        <label>Email</label>
        <div className="flex flex-column">
          <input
            className="h2 pl3 br4 ba b--orange"
            type="text"
            name="username"
            title="example@mail.com"
            placeholder="Input email"
            onChange={handleChange}
          />
          {formData.username.match(mailregex) ? (
            <span></span>
          ) : (
            <span className="login--danger">Email not valid</span>
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
            title="6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
            placeholder="Input password"
            onChange={handleChange}
          />
          {formData.password.match(passw) ? (
            <span></span>
          ) : (
            <span className="login--danger">Password not valid</span>
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
