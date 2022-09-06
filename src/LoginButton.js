import React from "react";

// `useAuth0` is for `functional` components
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LoginButton = () =>
{
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={ () => loginWithRedirect() }>Log In</Button>;
};

export default LoginButton;
