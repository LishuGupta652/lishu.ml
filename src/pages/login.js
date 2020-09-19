import React from "react";
import "../css/auth.scss";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Detecting IP Address 💞");
    alert("Please check your IP Address again or try again later.");
    alert("Redirecting you to my new works. Thanks for exploring my site 🚀");
    history.push("/test");
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
      </form>
    </div>
  );
}

export default Login;
