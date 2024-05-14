import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarNew from "./NavBarNew";
import SeoulSeeker from "./SeoulSeeker";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.css";
import Booking from "./Booking";
import Destinations from "./Destinations";
import BookHispage from "./BookHispage";
import { useState } from "react";
import CarRent from "./CarRent";
import Checkoutpage from "./Checkoutpage";

export default function App() {
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      email: "test@gmail.com",
      name: "Test",
      password: "1111",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <NavbarNew isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route path="/" exact>
            <Login
              registeredUsers={registeredUsers}
              setRegisteredUsers={setRegisteredUsers}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
          <Route
            path="/register"
            render={(props) => (
              <Register
                {...props}
                registeredUsers={registeredUsers}
                setRegisteredUsers={setRegisteredUsers}
              />
            )}
          />
          <Route path="/home" component={Home} />
          <Route path="/booking" component={Booking} />
          <Route path="/history" component={BookHispage} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/carrent" component={CarRent} />
          <Route path="/checkout" component={Checkoutpage} />
        </Switch>
      </div>
    </Router>
  );
}
