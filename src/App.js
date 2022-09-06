import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './AboutUs.js';
import AddForm from './AddForm';
//import EditForm from './EditForm';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import './App.css';

class App extends React.Component {




  render() {


    return (



      <>

      {/* Original App routes */}
      
        < Header />
      <div className="App">
        <p>Loveletter FrontEnd</p>
      </div>
      <About/>
      <Main/>
      <Footer/>
      <AddForm/>
      
    </>   
    )

  }
}
export default App;
//  {/* Replace with routing after proof of life
//        <> <Router>
//         <Header />
//         <Routes>
//           <Route
//             exact path="/"
//             element={<Main />}
//           >
//           </Route>
//           <Route
//             path="/about"
//             element={<About />}
//           >
//           </Route>
//         </Routes>
//         <Footer />
//       </Router> */}