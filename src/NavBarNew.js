import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiAirplaneTiltFill } from "react-icons/pi";

function NavbarNew({ isActive }) {
  const tabStyle = isActive
    ? { color: "white", fontWeight: "700" }
    : { color: "#717699", fontWeight: "700" };
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
            <Nav.Link href="#home">
              <div className="nav-tab" style={tabStyle}>
                Home
              </div>
            </Nav.Link>
            <Nav.Link href="#booking">
              <div className="nav-tab" style={tabStyle}>
                Booking
              </div>
            </Nav.Link>
            <Nav.Link href="#history">
              <div className="nav-tab" style={tabStyle}>
                History
              </div>
            </Nav.Link>
            <Nav.Link href="#destinations">
              <div className="nav-tab" style={tabStyle}>
                Destinations
              </div>
            </Nav.Link>
            <Nav.Link href="#support">
              <div className="nav-tab" style={tabStyle}>
                Support
              </div>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <div className="btn-nav-login rounded px-4 py-2 text-white d-flex align-items-center h6">
                <IoPersonCircleSharp
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />
                Login
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNew;
