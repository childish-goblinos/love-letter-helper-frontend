//import axios from 'axios';
import React from 'react';
import AddForm from './AddForm';
import EditForm from './EditForm';

//let SERVER = process.env.REACT_APP_SERVER;

class Main extends React.Component {

  render() {
    
    return (
      <>
       <p>Proof of Life</p>
       <AddForm/>
       <EditForm/>
          
      </>
    );
  }
}

export default Main;
