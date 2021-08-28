import React from "react";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Lost in translation app.</h1>
    <p className="lead">
      This is an application that let's you convert english words into their
      sign value equivalents.
    </p>
  </div>
);

export default Hero;
