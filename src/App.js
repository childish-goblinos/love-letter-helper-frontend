import React from 'react';
import { Container } from 'react-bootstrap/Container';

// `withAuth0` is for `Class` components
import { withAuth0 } from '@auth0/auth0-react';

// import buttons and such
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';


import './App.css';

class App extends React.Component 
{
  render()
  {
    return (
      <>
        <Container className="App">
          <h1>Love letter FrontEnd</h1>

          { // if authenticated, see the `LogoutButton`
            // if not authenticated, see the `LoginButton`
            this.props.auth0.isAuthenticated
              ? <LogoutButton />
              : <LoginButton />
          }
          
          { // if authenticated, see the profile page
            // if not authenticated, see a message asking them to log in
            this.props.auth0.isAuthenticated
              ? <Profile />
              : <h2>Please log in c:</h2>
          }
        </Container>
      </>
    );
  }
}

// note that this is different than what we're used to  
// this line allows us to use `auth0` as props 
export default withAuth0(App);
