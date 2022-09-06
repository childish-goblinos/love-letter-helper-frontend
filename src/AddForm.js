import React from 'react';
import { Button, Form } from 'react-bootstrap';



class AddForm extends React.Component {
  render() {
    return (<>
    <p>uhg</p>
       <Form>
        <Form.Label >Your Recipient
          <Form.Control
              type="text"
              name="add-recipient"
              placeholder="Oh My Most Beloved!"
            />
       </Form.Label>
        <Form.Label>Give Your Letter a Title
          <Form.Control
            type="text"
            name="add-title"
            placeholder="An Outpouring of My Fullsome Emotion For Thee"
          />
        </Form.Label>
        <Form.Label>Share Your Feelings Freely
          <Form.Control
            type="text"
            name="add-letter"
            placeholder="I am full of such forbidden desires for thy most comely self. Please grace me with your affections, lest I die."
          />
          {/* TO DO - ADD A CHARACTER COUNTER */}
        </Form.Label>
        <Button type="submit">Edit</Button>
        
      </Form>
      </> 
      )
  }
}
export default AddForm;

//   // onSubmit={this.props.handleAddSubmit}
    
       
        // <Form.Label>Give Your Letter a Title
        //   <Form.Control
        //     type="text"
        //     name="title"
        //     placeholder="An Outpouring of My Fullsome Emotion For Thee"
        //   />
        // </Form.Label>
        // <Form.Label>Share Your Feelings Freely
        //   <Form.Control
        //     type="text"
        //     name="letter-body"
        //     placeholder="I am full of such forbidden desires for thy most comely self. Please grace me with your affections, lest I die."
        //   />
        //   {/* TO DO - ADD A CHARACTER COUNTER */}
        // </Form.Label>
        // <Button type="submit">Edit</Button>