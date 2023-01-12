import React from "react";

import "./Formstyle.css";
import { useNavigate } from "react-router-dom";
import ImageSec from "./Imagesec";

function Login(props) {
  const navigate = useNavigate();
  return (
    <div className="Fullsec">
      <div className="form formsecleft">
        <form>
          <div className="heaaidng">
            <h1>Sign In</h1>
            <h2>
              New User? <a href="/">create an account</a>
            </h2>
          </div>
          <div className="input-container">
            <input
              type="text"
              name="uname"
              placeholder="Username or email"
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="pass"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-container checkbox">
            <div className="checkbox1">
              <input type="checkbox" />
            </div>
            <div className="checkbox1">
              <h3>Keep me signed in</h3>
            </div>
          </div>
          <div className="button-container">
            <button
              type="button"
              class="signinbutton"
              onClick={() => navigate("/countries")}
            >
              Sign in
            </button>
          </div>
        </form>
        <div id="or-separator" className="or-separator mt-12 snapple-seperator">
          <span class="or-text">
            _____________________or sign in with________________
          </span>
        </div>
        <div className="socialicons">
        <i class="fa-brands fa-google"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
          </div>
      </div>
      <div className="rightimg">
        <ImageSec />
      </div>
    </div>
  );
}

export default Login;
