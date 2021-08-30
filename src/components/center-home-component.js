import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const logo = "https://imgur.com/sgxTRJJ.png";
const loggedLogo = "https://i.imgur.com/Pbw6V8k.png";

const CenterHome = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="text-center hero">
      <h1 className="mb-4">Lost in translation app.</h1>
      <h3>
        This is an application that let's you convert english words into their
        sign value equivalents.
      </h3>
      {isAuthenticated ? (
        <img
          className="mb-3 app-logo"
          src={loggedLogo}
          alt="Logged Robot"
          width="300"
        />
      ) : (
        <img className="mb-3 app-logo" src={logo} alt="Robot" width="300" />
      )}

      {isAuthenticated ? (
        <h5>
          Thanks for logging in, navigate to the translate page to translate! Or
          go to your profile page to view past searches and delete them.
        </h5>
      ) : (
        <h5>Please register for an account in order to use the app.</h5>
      )}
    </div>
  );
};

export default CenterHome;
