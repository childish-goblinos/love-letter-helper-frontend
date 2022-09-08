//import axios from 'axios';
import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
class LetterAccordion extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      recipientsArr: [],
    }
  }
  getRecipientNames = () =>
  {
    let recipientsArr = [];
    this.props.letters.forEach(letter => 
    {
      !recipientsArr.includes(letter.recipient)
        ? recipientsArr.push(letter.recipient)
        : console.log('nothing here');
    });
    return recipientsArr;
  }
  render()
  {
    let arr = this.getRecipientNames();
    console.log("this test", arr);
    let newArr = arr.map((r, idx) =>
    {
      return <Accordion.Item key={ idx } eventKey={ idx }>
        <Accordion.Header>{ r }</Accordion.Header>
        { this.props.letters.map((letter, idx) =>
        {
          if (letter.recipient === r)
          {
            console.log(letter._id);
            return <Accordion.Body key={ letter._id }>{ letter.title }<Button onClick={()=>this.props.handleModal(letter._id)}>Open</Button><Button>Delete</Button></Accordion.Body>;
          }
        })
        }
      </Accordion.Item>
    })

    //let getRecipients = this.props.letters.filter(letter, )
    /*
    let letterAccordionItems = this.props.letters.map(letter =>
    {
      
    });
    */
    this.getRecipientNames();
    console.log('letter array in letter accordion: ', this.props.letters);
    return (
      <>
        <Accordion>
          { newArr }
        </Accordion>
      </>
    )
  }
}

export default LetterAccordion;
