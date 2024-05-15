import "./Checkoutpage.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import wallpaper from "./materials/wallpaper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import NavbarNew from "./NavBarNew";
import { useLocation } from "react-router-dom";

function Checkoutpage() {
  const location = useLocation();
  const booking = location.state && location.state.booking;

  return (
    <div>
      <div className="container">
        <div className="left-side">
          <ContactDetailsForm />
          <Location booking={booking} />
          <Summary booking={booking} />
        </div>
        <div className="right-side">
          <BookingSummary booking={booking} />
        </div>
      </div>
      <div className="payment-button-container">
        <ContinueToPaymentButton />
      </div>
    </div>
  );
}

function ContactDetailsForm() {
  return (
    <div className="contactdetailsform">
      <h1>Contact Details</h1>
      <div className="form-container">
        <form>
          <div className="namefield">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="First Name MI. Last Name"
            />
          </div>
          <div className="contactfields">
            <div className="emailfield">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="numberfield">
              <label htmlFor="number">Mobile Number</label>
              <div style={{ display: "flex" }}>
                <select
                  id="countryCode"
                  name="countryCode"
                  className="custom-dropdown"
                >
                  <option value="+1">+1 USA</option>
                  <option value="+44">+44 UK</option>
                  <option value="+62">+62 Indonesia</option>
                  <option value="+91">+91 India</option>
                  <option value="+81">+81 Japan</option>
                  <option value="+49">+49 Germany</option>
                  <option value="+33">+33 France</option>
                  <option value="+55">+55 Brazil</option>
                  <option value="+61">+61 Australia</option>
                  <option value="+7">+7 Russia</option>
                  <option value="+86">+86 China</option>
                  <option value="+27">+27 South Africa</option>
                  <option value="+63">+63 Philippines</option>
                </select>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="e.g.(+62) 0812345678"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Location({ booking }) {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const apiKey = "AIzaSyA9bEl5wGZ3rTxi_4clyA4l1-724wpNmY4";

  return (
    <div className="location">
      <h1>Location Details</h1>
      <div className="location-container">
        <p>Location</p>
        {booking && (
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Map content */}
            </GoogleMap>
          </LoadScript>
        )}
      </div>
    </div>
  );
}

function Summary({ booking }) {
  return (
    <div className="summaryform">
      <h1>Summary</h1>
      <div className="summary-container">
        <div className="breakdown">
          <p>Breakdown: </p>
          <h2>{booking.price} x 1</h2>
        </div>
        <div className="totalprice">
          <p>Total Price: </p>
          <h2>{booking.price} </h2>
        </div>
      </div>
    </div>
  );
}

function BookingSummary({ booking }) {
  const details = `${booking.luggageCapacity}, ${booking.seats}, ${
    booking.service
  }, ${booking.withDriver ? "With Driver" : "Without Driver"}`;
  return (
    <div className="bookingsummaryform">
      <div className="bookingsummary-container">
        <h1>Booking Summary</h1>
        <div className="activity">
          <p>{booking.model}</p>
        </div>
        <div className="top-section">
          <div className="image">
            <img src={require(`./images/${booking.images[0]}`)} alt="Event" />
          </div>
          <div className="shortdetails">
            <p>{details}</p>
          </div>
        </div>
        <div className="date-and-details">
          <div className="selecteddate">
            <input type="date" id="date" name="date" className="datefield" />
          </div>
          <div className="totalpax">
            <input
              type="number"
              id="totalpax"
              name="totalpax"
              placeholder="Total Pax"
            />
          </div>
          <div className="totalpayment">
            <input
              type="number"
              id="totalpay"
              name="totalpay"
              placeholder="Total Payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function ContinueToPaymentButton() {
  return (
    <center>
      <button className="continue-to-payment-btn">
        <h2>Continue to Payment</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
      </button>
    </center>
  );
}

export default Checkoutpage;
