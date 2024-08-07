import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

function Login() {
    const login = useLogin();
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useForm(
        { email: '', password: '' },    // initial values
        async ({ email, password }) => {
            try {
                await login(email, password);
                navigate('/');
            } catch (err) {
                console.log(err.message);
            }
        },    // callback func -> we define it here (inline)
    );

    return (
        <div className='login-container'>
            <Form className="login-form" onSubmit={submitHandler}>
                <div>
                    <h3>Enter your e-mail and password</h3>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-field'>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={changeHandler}
                    // inputMode="true"
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
                        value={values.password}
                        onChange={changeHandler}
                    // inputMode="true"
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