import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';
import useIsFetching from "../../hooks/useIsFetching";

const initialValues = { email: '', password: '' }

export default function Login() {
    const [error, setError] = useState('');
    const [_, toggleFetch] = useIsFetching();
    const login = useLogin();
    const navigate = useNavigate();

    // callback func (it is sending the login data to server)
    const loginFetcher = async ({ email, password }) => {
        if (email == '' || password == '') {
            return setError('Empty fields left!');
        }
        toggleFetch();
        try {
            await login(email, password);
            navigate('/');
            toggleFetch();
        } catch (err) {
            setError(err.message);
        }
    };
    //               receive                                      send
    //                  v                                           v
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginFetcher);

    return (
        <div className='login-container'>
            <Form className="login-form" onSubmit={submitHandler}>
                <div>
                    <h3>Login to your account:</h3>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-field'>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete='on'
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <Form.Text className="text-small">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-field'>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete='on'
                        value={values.password}
                        onChange={changeHandler}
                    />
                </Form.Group>
                {error &&
                    <div>
                        <Form.Text className="text-small-message">
                            {error && error}
                        </Form.Text>
                    </div>
                }
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}