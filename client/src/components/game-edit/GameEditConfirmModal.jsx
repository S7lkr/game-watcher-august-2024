import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GameEditConfirmModal({
    hide,
    submit,
    gameData
}) {
    return (
        <div
            className="modal show"
        >
            <Modal.Dialog>
                <Modal.Header closeButton onClick={hide}>
                    <Modal.Title>Edit Confirm</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure you want to edit "{gameData.title}"?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={submit}>Yes</Button>
                    <Button variant="secondary" onClick={hide}>No</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default GameEditConfirmModal;