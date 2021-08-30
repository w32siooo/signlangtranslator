import React from "react";

const logo = "https://imgur.com/sgxTRJJ.png";
const loggedLogo = "https://i.imgur.com/Pbw6V8k.png";

const CenterHome = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="300" />
    <h1 className="mb-4">Lost in translation app.</h1>
    <p className="lead">
      This is an application that let's you convert english words into their
      sign value equivalents.
    </p>
  </div>
);

export default CenterHome;
