import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';

const initialValues = { email: '', password: '' }

function Login() {
    const login = useLogin();
    const navigate = useNavigate();

    // callback func (it is sending the login data to server)
    const loginFetcher = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };
    //                receive 3                                   send 2
    //                  v                                           v
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginFetcher);

    return (
        <div className='login-container'>
            <Form className="login-form" onSubmit={submitHandler}>
                <div>
                    <h3>Login to your aaccount:</h3>
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

export default Login;