import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" />
      <br />
      <input placeholder="password" type="password" />
      <br />
      <input placeholder="verify password" type="password" />
      <br />
      <Link to="/Kanbas/Account/Profile"> Sign up </Link>
      <br />
      <Link to="/Kanbas/Account/Signin">Sign in</Link>
      <div id="wd-signin-screen">
        <h3>Sign in</h3>
        <input id="wd-username" placeholder="username" /> <br />
        <input id="wd-password" placeholder="password" type="password" /> <br />
        <Link id="wd-signin-btn" to="/Kanbas/Dashboard">
          Sign in
        </Link>
        <br />
        <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
