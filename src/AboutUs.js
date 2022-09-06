import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class About extends React.Component {

  render() {

    return ( <>

      <h1> This Application Brought To You By:</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src={require("./images/Gambino.jpg")}
            alt="Group shot"
          />
          <Carousel.Caption>
            <h3>The Childish Goblinos</h3>
            <p>The Childish Goblinos are the architects and instigators of the Lonely Beast application, and it's offshoots. We take all the credit and none of the blame for your results.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-"
            src={require("./images/Amy-headshot.jpg")}
            alt="Amy"
          />
          <Carousel.Caption>
            <h3>Amy Pierce</h3>
            <p>Amy is a software developer and recovering accountant. More about her exploits can be found at  </p>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/Jackson-headshot.jpg")}
            alt="Jackson"
          />

          <Carousel.Caption>
            <h3>Jackson Gurney</h3>
            <p>
              Jackson Gurney is a software developer and former member of the Coast Guard.
            </p>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./images/Rhea-headshot.jpg")}
            alt="Rhea"
          />

          <Carousel.Caption>
            <h3>Rhea Mimi Carillo</h3>
            <p>
              Rhea Mimi Carillo is a software developer and former member of the Air Force.
            </p>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
};

export default About;
    // {/* <Nav
    //   activeKey="/home"
    //   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    // >
    //   <Nav.Item>
    //     <Nav.Link href="/">Active</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="link-1">Home</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="link-2">Link</Nav.Link>
    //   </Nav.Item>
    // </Nav>  */}
    // {/* [ADD DEVELOPER STATEMENT, PORTFOLIO LINK IF DESIRED, LINKS TO GITHUB AND LINKED IN] */}
    //  {/* [ADD LINKS TO GITHUB AND LINKED IN] */}
    //  {/* [ADD DEVELOPER STATEMENT, PORTFOLIO LINK IF DESIRED, LINKS TO GITHUB AND LINKED IN] */}