import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

// import auth) dependencies
import { Auth0Provider } from "@auth0/auth0-react";

import './index.css';
import App from './App';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACt_APP_AUTH_DOMAIN}
    clientId={process.env.REACt_APP_AUTH_CLIENT_ID}

    // redirect user to this page after login:
    redirectUri={process.env.REACt_APP_AUTH_REDIRECT_URI}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
