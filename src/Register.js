import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import NavbarNew from "./NavBarNew";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Register({ registeredUsers, setRegisteredUsers }) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = registeredUsers.find((user) => user.email === email);

    if (existingUser) {
      setError("Email already exists.");
      return;
    }

    const newUser = { email, name, password };
    setRegisteredUsers([...registeredUsers, newUser]);

    history.push("/");
  };

  return (
    <div
      className="register-container"
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="register-main-container d-flex justify-content-center align-items-center">
        <div>
          <div className="d-flex row text-white justify-content-center">
            <div className="col-12 register-main-text text-center">
              REGISTER
            </div>
            <Form className="px-4" onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>
                  <div className="register-label-text">NAME</div>
                </Form.Label>
                <Form.Control
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <div className="register-label-text">EMAIL</div>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <div className="register-label-text">PASSWORD</div>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>
                  <div className="register-label-text">CONFIRM PASSWORD</div>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              {error && <div className="text-danger mb-3">{error}</div>}

              <div className="d-flex justify-content-center col">
                <button
                  type="submit"
                  className="btn-signup text-white text-center py-2 rounded"
                >
                  SIGN UP
                </button>
              </div>
              <div className="d-flex justify-content-center col mt-3">
                <div className="signin-text text-white text-center py-2 rounded">
                  Already have an account{" "}
                  <Link to="/" className="font-underline text-white">
                    Login here.
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
