import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import NavbarNew from "./NavBarNew";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div
      className="login-container"
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
      }}
    >
      <NavbarNew />
      <div className="login-main-container d-flex justify-content-center align-items-center">
        <LoginContent />
      </div>
    </div>
  );
}

function LoginContent() {
  return (
    <div>
      <div className="d-flex row text-white justify-content-center">
        <div className="col-12 login-main-text text-center">LOGIN</div>
        <Form className="px-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <div className="login-label-text">EMAIL</div>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <div className="login-label-text">PASSWORD</div>
            </Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
          <div className="d-flex justify-content-center col">
            <div className="btn-signin text-white text-center py-2 rounded">
              SIGN IN
            </div>
          </div>
          <div className="d-flex justify-content-center col mt-3">
            <div className="signup-text text-white text-center py-2 rounded">
              Don’t have an account yet?{" "}
              <span className="font-underline">Register here.</span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
