import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NavbarNew from "./NavBarNew";
import Form from "react-bootstrap/Form";

function Login({ registeredUsers, isLoggedIn, setIsLoggedIn }) {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = registeredUsers.find((user) => user.email === email);
    if (user && user.password === password) {
      setIsLoggedIn(true);
      history.push("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="login-main-container d-flex justify-content-center align-items-center">
        <div>
          <div className="d-flex row text-white justify-content-center">
            <div className="col-12 login-main-text text-center">LOGIN</div>
            <Form className="px-4" onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <div className="login-label-text">EMAIL</div>
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
                  <div className="login-label-text">PASSWORD</div>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              {error && <div className="text-danger mb-3">{error}</div>}
              <div className="d-flex justify-content-center col">
                <button
                  type="submit" // Change button type to "submit"
                  className="btn-signin text-white text-center py-2 rounded"
                >
                  SIGN IN
                </button>
              </div>
              <div className="d-flex justify-content-center col mt-3">
                <div className="signup-text text-white text-center py-2 rounded">
                  Don’t have an account yet?{" "}
                  <Link to="/register" className="font-underline text-white">
                    Register here.
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

export default Login;
