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
        <img src="https://lh3.googleusercontent.com/a-/AFdZucp1HUa62rVY_7WuYZe6uD_qOv9SEP9RMQqrUJir=s96-c" referrerpolicy="no-referrer" alt="really cool gal"></img> 
      </>
    )
  }
}

export default withAuth0(Content);
