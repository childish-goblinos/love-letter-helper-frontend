import React from 'react';
import { Button, Form } from 'react-bootstrap';



class EditForm extends React.Component
{
  
  render()
  {
    return (
      <Form
      // onSubmit={this.props.handleEditSubmit}
      >
        <Form.Label>Change Your Recipient
          <Form.Control
            type="text"
            name="recipient"
            default="[this should call recipient names]"
          />
        </Form.Label>
        <Form.Label>Edit Your Letter Title
          <Form.Control
            type="text"
            name="title"
            default="[this should call the letter title]"
          />
        </Form.Label>
        <Form.Label>Edit Your Letter
          <Form.Control
            type="text"
            name="letter-body"
            default="[this is where the letter body is called]"
          />
        </Form.Label>
        {/* TO DO - ADD A CHARACTER COUNTER */ }
        <Button type="submit">Edit</Button>
        <Button type="submit">Delete</Button>
      </Form>
    )
  }
}
export default EditForm;
