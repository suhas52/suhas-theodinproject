import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ShowModal({ scoreCount, handleResetGame }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(scoreCount.lost)
  }, [scoreCount.lost])

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>You lost!</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleResetGame()} variant="danger">
            Retry
          </Button>
          <Modal.Header closeButton></Modal.Header>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;