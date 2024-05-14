import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiAirplaneTiltFill } from "react-icons/pi";
import "./styles.css";

function NavbarNew({ isActive, isLoggedIn, setIsLoggedIn }) {
  const tabStyle = isActive
    ? { color: "white", fontWeight: "700" }
    : { color: "#717699", fontWeight: "700" };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-fix">
      <Container>
        <Navbar.Brand href="#home">
          <div
            className="seoul-seeker-logo d-flex align-items-center text-white"
            style={{ fontWeight: "800" }}
          >
            <PiAirplaneTiltFill
              style={{ fontSize: "35px", marginRight: "5px", color: "white" }}
            />
            SeoulSeeker
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-all-tabs me-auto gap-1">
            <Nav.Item>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <div className="nav-tab nav-entry" style={tabStyle}>
                  Home
                </div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/booking" style={{ textDecoration: "none" }}>
                <div className="nav-tab nav-entry" style={tabStyle}>
                  Booking
                </div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/history" style={{ textDecoration: "none" }}>
                <div className="nav-tab nav-entry" style={tabStyle}>
                  History
                </div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/destinations" style={{ textDecoration: "none" }}>
                <div className="nav-tab nav-entry" style={tabStyle}>
                  Destinations
                </div>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/support" style={{ textDecoration: "none" }}>
                <div className="nav-tab nav-entry" style={tabStyle}>
                  Support
                </div>
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div
                  className="btn-nav-login rounded px-4 py-2 text-white d-flex align-items-center h6"
                  onClick={isLoggedIn ? handleLogout : null}
                >
                  <IoPersonCircleSharp
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                  {isLoggedIn ? "Logout" : "Login"}
                </div>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNew;
