import React from "react";

// withAuth0, because this is a Class-based component
import { withAuth0 } from "@auth0/auth0-react";

// because 
import axios from "axios";


class Content extends React.Component
{
  render()
  {
    return(
      <>
        <h1>Content page</h1>
        {console.log(this.props.auth0.user)}
        <img src={this.props.auth0.user.picture} referrerPolicy="no-referrer" alt={this.props.auth0.user.picture}></img> 
      </>
    )
  }
}

export default withAuth0(Content);
