import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GameEditConfirmModal({
    hide,
    submit,
}) {
    return (
        <div
            className="modal show"
        >
            <Modal.Dialog>
                <Modal.Header closeButton onClick={hide}>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to edit</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="warning" onClick={submit}>Confirm</Button>
                    <Button variant="secondary" onClick={hide}>Cancel</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default GameEditConfirmModal;