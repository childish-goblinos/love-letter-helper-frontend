import React from "react"
import { Modal } from "react-bootstrap"
// import Button from "react-bootstrap";

export default class LetterModal extends React.Component
{
  render()
  {
    let variable = this.props.letters.filter(r=>r._id === this.props.modalId)[0];
    return (
      <Modal show={ this.props.show } onHide={ this.props.handleModal }>
        <Modal.Header closeButton>
          <Modal.Title>{variable?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{variable?.letterBody}</Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={ handleClose }>
            Close
          </Button>
          <Button variant="primary" onClick={ handleClose }>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    )
  }
}
