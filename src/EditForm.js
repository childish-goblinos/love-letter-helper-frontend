import React from 'react';
import { Button, Form } from 'react-bootstrap';



class EditForm extends React.Component {

  render() {

    // //console.log('Edit form ', this.props.letter)
    return (
      <Form
        onSubmit={this.props.handleEditSubmit}
      >
        <Form.Label>Change Your Recipient
          <Form.Control
            type="text"
            name="recipient"
            defaultValue={this.props.letter.recipient}
          />
        </Form.Label>
        <Form.Label>Edit Your Letter Title
          <Form.Control
            type="text"
            name="title"
            defaultValue={this.props.letter.title}
          />
        </Form.Label>
        <Form.Label>Edit Your Letter
          <Form.Control
            type="textarea"
            name="letterBody"
            defaultValue={this.props.letter.letterBody}
            maxLength={2000}
          />
        </Form.Label>
        {/* TO DO - ADD A CHARACTER COUNTER */}
        <Button type="submit">Save Changes</Button>
        <Button onClick={() => this.props.confirmDelete(this.props.letter?._id)}>Delete</Button>
      </Form>
    )
  }
}
export default EditForm;
