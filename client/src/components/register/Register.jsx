import { useNavigate } from 'react-router';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRegister } from '../../hooks/useAuth';
import { useContext, useState } from 'react';
import { useForm } from '../../hooks/useForm';

const initialValues = { email: '', password: '' };

export default function Register() {
    const register = useRegister();
    const navigate = useNavigate();
    const [status, setStatus] = useState('');

    const registerHandler = async ({ email, password, rePassword }) => {        
        if (
            email == '' ||
            password == '' ||
            rePassword == ''
        ) {
            return setStatus('Empty fields left!');
        }

        if (password !== rePassword) {
            return setStatus('Password doesn\'t match!');           
        };

        try {
            await register(email, password, rePassword);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className='login-container'>
            <Form className="login-form" onSubmit={submitHandler}>
                <div>
                    <h3>Create new account:</h3>
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
                        controlid="password"
                        placeholder="Password"
                        autoComplete='on'
                        value={values.password}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formRepeatPassword">
                    <Form.Label className='text-field'>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="repassword"
                        controlid="repassword"
                        placeholder="Repeat password"
                        autoComplete='on'
                        value={values.rePassword}
                        onChange={changeHandler}
                    />
                </Form.Group>
                {status &&
                    (
                        <Form.Text className="text-small-message">
                            {status}
                        </Form.Text>
                    )
                }
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}