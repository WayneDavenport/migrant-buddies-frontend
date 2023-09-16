import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <form action="">
        <label>Email</label>
        <input type="email" name="email" id="email" required />
        <label>Password</label>
        <input type="text" name="password" id="password" required />
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>{" "}
          <a href="/">Forget password?</a>
        </div>
        <input type="submit" value="Sign In" />
        <div className="new-user">
          <label>New User?</label>
          <a href="/">Sign Up</a>
        </div>
        <div className="border-line">OR</div>

        <div id="google-login"></div>
        <div
          class="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-use-continue-as="true"
        ></div>
      </form>
    </div>
  );
}

export default Login;
