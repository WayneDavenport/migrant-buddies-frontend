import React, { useEffect } from "react";
import "../Login/Login.css";

const Login = () => {
  // Google Login
  // function handleCallbackResponse(response) {
  //   document.getElementById("google-login").hidden = true;
  // }

  // useEffect(() => {
  //   /*global google*/
  //   google.accounts.id.initialize({
  //     client_id:
  //       "1071041387259-2kf53ndccj9q49i3iukrl235or4kbhgd.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("google-login"), {
  //     theme: "outline",
  //     size: "large",
  //     width: 233, // Needs resizing
  //   });
  // }, []);

  // Facebook Login

  return (
    <div id="login-body">
      <h1>Sign Up</h1>

      <form action="">
        <label>Name</label>
        <input type="text" name="name" id="name" required />
        <label>Email</label>
        <input type="email" name="email" id="email" required />
        <label>Password</label>
        <input type="password" name="password" id="password" required />
        <input type="submit" value="Sign Up" />
        <div className="new-user">
          <label>Already have an account?</label>
          <a className="sign-up" href="/">
            Sign In
          </a>
        </div>
        <div className="border-line">OR</div>
        {/* Google Button */}
        <div id="google-login"></div>
        {/* Facebook Button */}
        <div
          class="fb-login-button"
          id="fb-login"
          data-width="275"
          data-size="large"
          data-max-rows="1"
          data-button-type="continue_with"
          data-layout=""
          data-auto-logout-link="true"
          data-use-continue-as="false"
        ></div>
      </form>
    </div>
  );
};

export default Login;
