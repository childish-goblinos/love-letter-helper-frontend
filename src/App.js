import React from 'react';

import Container from 'react-bootstrap/Container';

// `withAuth0` is for `Class` components
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import About from './AboutUs.js';

// import Login components and such
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Content from './Content';


/*
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
*/

import './App.css';






class App extends React.Component
{
  render()
  {
    return (
      <>
        {/* <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={<Main />}
            >
            </Route>
            <Route
              path="/about"
              element={<About />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router> */}

        {/* Original App testing routes  */ }

        <Header />

        <Container className="App">
          { // if authenticated, see the `LogoutButton`
            // if not authenticated, see the `LoginButton`
            this.props.auth0.isAuthenticated
              ? <LogoutButton />
              : <LoginButton />
          }

          { // if authenticated, see the Content.js and Main.js
            // if not authenticated, see a message asking them to log in
            this.props.auth0.isAuthenticated
              ? <>
                <Content />
                <Main />
              </>
              : <h2>Please log in c:</h2>
          }
        </Container>

        <Footer />
      </>
    )
  }
}

// note that this is different than what we're used to  
// this line allows us to use `auth0` as props 
export default withAuth0(App);
