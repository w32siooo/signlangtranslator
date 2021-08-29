// src/components/authentication-button.js

import React from "react";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  //Destructuring the isAuthenticated from the useAuth0 hook.
  const { isAuthenticated } = useAuth0();

  //If authenticated, the tertirary operator will return true and thus show the first option.
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
