import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import NavbarNew from "./NavBarNew";
import Form from 'react-bootstrap/Form';

function Register() {
    return (
        <div className="register-container" style={{ backgroundImage: 'url(/images/Home2.png)', backgroundSize: 'cover' }}>
            <NavbarNew isActive={false} />
            <div className="register-main-container d-flex justify-content-center align-items-center">
                <RegisterContent />
            </div>
        </div>
    );
}

function RegisterContent() {
    return (
        <div>
            <div className="d-flex row text-white justify-content-center">
                <div className="col-12 register-main-text text-center">
                    REGISTER
                </div>
                <Form className="px-4">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <div className="register-label-text">
                                NAME
                            </div>
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            <div className="register-label-text">
                                EMAIL
                            </div>
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            <div className="register-label-text">
                                PASSWORD
                            </div>
                        </Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>
                            <div className="register-label-text">
                                CONFIRM PASSWORD
                            </div>
                        </Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" />
                    </Form.Group>

                    <div className="d-flex justify-content-center col">
                        <div className="btn-signup text-white text-center py-2 rounded">
                            SIGN UP
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col mt-3">
                        <div className="signin-text text-white text-center py-2 rounded">
                            Already have an account <span className="font-underline">Login here.</span>
                        </div>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default Register;
