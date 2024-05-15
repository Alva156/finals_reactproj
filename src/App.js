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
import Hotel from "./Hotel";
import SupportFaqs from "./SupportFaqs";
import HotelBookingPage from "./HotelBookingPage";
import ActivityBookingPage from "./ActivityBookingPage";
import Activities from "./Activities";

export default function App() {
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      email: "test@gmail.com",
      name: "Test",
      password: "1111",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([]);

  const handleBooking = (booking) => {
    setBookingDetails((prev) => [...prev, booking]);
  };

  return (
    <Router>
      <div>
        <NavbarNew isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route path="/login">
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
          <Route path="/home">
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/booking" component={Booking} />
          <Route
            path="/history"
            render={() => <BookHispage bookingDetails={bookingDetails} />}
          />

          <Route path="/destinations" component={Destinations} />
          <Route path="/carrent" component={CarRent} />
          <Route
            path="/checkout"
            render={(props) => (
              <Checkoutpage {...props} handleBooking={handleBooking} />
            )}
          />
          <Route path="/hotels" component={Hotel} />
          <Route path="/" exact component={SeoulSeeker} />
          <Route path="/support" component={SupportFaqs} />
          <Route path="/bookingpage" component={HotelBookingPage} />
          <Route path="/activities" component={Activities} />
          <Route path="/activitybooking" component={ActivityBookingPage} />
        </Switch>
      </div>
    </Router>
  );
}
