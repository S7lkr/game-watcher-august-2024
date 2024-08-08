import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GameCreate() {
    return (
        <div className='login-container'>
            <Form className="login-form">
                <div>
                    <h3>Create new Game:</h3>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-field'>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        placeholder="Enter title..."
                        autoComplete='on'
                    // value={values.email}
                    // onChange={changeHandler}
                    />
                    <Form.Text className="text-small">
                        Game Title shouldn't be longer than 20 symbols.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-field'>Avatar:</Form.Label>
                    <Form.Control
                        type="text"
                        name="imageUrl"
                        placeholder="Enter picture URL..."
                        autoComplete='on'
                    // value={values.password}
                    // onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-field'>Genre:</Form.Label>
                    <Form.Control
                        type="text"
                        name="category"
                        placeholder="Enter genre..."
                        autoComplete='on'
                    // value={values.password}
                    // onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-field'>Type:</Form.Label>
                    <Form.Control
                        type="text"
                        name="type"
                        placeholder="Enter game type..."
                        autoComplete='on'
                    // value={values.password}
                    // onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-field'>Max Level:</Form.Label>
                    <Form.Control
                        type="textarea"
                        name="max-level"
                        placeholder="Enter max level..."
                        autoComplete='on'
                    // value={values.password}
                    // onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-field'>Release Year:</Form.Label>
                    <Form.Control
                        type="text"
                        name="release-year"
                        placeholder="Enter type..."
                        autoComplete='on'
                    // value={values.password}
                    // onChange={changeHandler}
                    />
                </Form.Group>
                <div id="summary">
                    <Form.Label className='text-field'>Description:</Form.Label>
                    <fieldset>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Game description..."
                        // value={values.password}
                        // onChange={changeHandler}
                        >
                        </textarea>
                    </fieldset>
                </div>

                <Button variant="primary" type="submit" id='create-game'>
                    Create Game
                </Button>
            </Form>
        </div>
    )
}