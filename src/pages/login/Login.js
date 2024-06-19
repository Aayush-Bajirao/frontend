import React, { useState } from "react";
import "./Login.css";
import myImage from "./Art.png";

export default function Login() {
  const [activeForm, setActiveForm] = useState("signIn");

  const signUpClick = () => {
    setActiveForm("signUp");
  };
  const signInClick = () => {
    setActiveForm("signIn");
  };

  return (
    <div>
      <div class="wrapper">
        <div class="blue-div">
          <div>
            <img src={myImage} alt="image" />
            <h2>Welcome aboard my friend</h2>
            <p>just a couple of clicks and we start</p>
          </div>
        </div>
        <div class="login-sigup-form">
          {activeForm === "signIn" && (
            <div class="sign-in-div">
              <h1>Login</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password"></input>
            </div>
          )}
          {activeForm === "signUp" && (
            <div class="sign-up-div">
              <h1>Register</h1>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password"></input>
              <input type="password" placeholder="Confirm Password"></input>
            </div>
          )}
          <button
            class="signup-button"
            onClick={signUpClick}
            disabled={activeForm === "signUp"}
            style={{
              backgroundColor: activeForm === "signUp" ? "#17A2B8" : "white",
              color: activeForm === "signUp" ? "white" : "#17A2B8",
              border:
                activeForm === "signIn"
                  ? "1px solid #17A2B8"
                  : "1px solidwhite",
            }}
          >
            Register
          </button>
          <div class="havent-dv">Have no account yet?</div>
          <button
            class="login-button"
            onClick={signInClick}
            disabled={activeForm === "signIn"}
            style={{
              backgroundColor: activeForm === "signIn" ? "#17A2B8" : "white",
              color: activeForm === "signIn" ? "white" : "#17A2B8",
              border:
                activeForm === "signUp"
                  ? "1px solid #17A2B8"
                  : "1px solid white",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
