import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Checkoutedit from "./Checkoutedit";
import BookHispage from "./BookHispage";
import Checkoutpage from "./Checkoutpage";
import Booking from "./Booking";
import CarRent from "./CarRent";
import Destinations from "./Destinations";
import Home from "./Home";
import Hotel from "./Hotel";
import Login from "./Login";
import NavBarNew from "./NavBarNew";
import Register from "./Register";
import SeoulSeeker from "./SeoulSeeker";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HotelBookingPage from "./HotelBookingPage";
import ActivityBookingPage from "./ActivityBookingPage";
import ManageProfile from "./ManageProfile";
import SupportFaqs from "./SupportFaqs";
import SearchActivity from "./SearchActivity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActivityBookingPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
