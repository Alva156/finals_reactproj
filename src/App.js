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

export default function App() {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Login
              registeredUsers={registeredUsers}
              setRegisteredUsers={setRegisteredUsers}
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
        </Switch>
      </div>
    </Router>
  );
}
