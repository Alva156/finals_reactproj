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

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/booking" component={Booking} />
          <Route path="/history" component={BookHispage} />
          <Route path="/destinations" component={Destinations} />
        </Switch>
      </div>
    </Router>
  );
}
