import "./Checkoutedit.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import wallpaper from "./materials/wallpaper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import NavbarNew from "./NavBarNew";

function Checkoutedit() {
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <ContactDetailsForm />
          <Location />
          <Summary />
        </div>
        <div className="right-side">
          <BookingSummary />
          <EditBooking />
          <CancelBooking />
        </div>
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
              value="Andrei Cimoune M. Alvarico"
              readOnly
            />
          </div>
          <div className="contactfields">
            <div className="emailfield">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value="andrei@gmail.com"
                readOnly
              />
            </div>
            <div className="numberfield">
              <label htmlFor="number">Mobile Number</label>
              <div style={{ display: "flex" }}>
                <select
                  id="countryCode"
                  name="countryCode"
                  disabled
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
                  <option value="+63" selected>
                    +63 Philippines
                  </option>
                </select>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value="9494787923"
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
        <EditContacts />
      </div>
    </div>
  );
}

function Location() {
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
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Map content */}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
function Summary() {
  return (
    <div className="summaryform">
      <h1>Summary</h1>
      <div className="summary-container">
        <div className="breakdown">
          <p>Breakdown: </p>
          <h2>₩100,000 x 1</h2>
        </div>
        <div className="totalprice">
          <p>Total Price: </p>
          <h2>₩100,000 </h2>
        </div>
      </div>
    </div>
  );
}

function BookingSummary() {
  return (
    <div className="bookingsummaryform">
      <div className="bookingsummary-container">
        <h1>Booking Summary</h1>
        <div className="activity">
          <p>Activity Name/Event/Car, etc.</p>
        </div>
        <div className="top-section">
          <div className="image">
            <img src={wallpaper} alt="Event" />;
          </div>
          <div className="shortdetails">
            <p>This is the details of the transaction</p>
          </div>
        </div>
        <div className="date-and-details">
          <div className="selecteddate">
            <p>
              <strong>Date:</strong> May 10, 2024
            </p>
          </div>
          <div className="totalpax">
            <p>
              <strong>Total Pax:</strong> 4
            </p>
          </div>
          <div className="totalpayment">
            <p>
              <strong>Total Payment:</strong> $300.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditContacts() {
  return (
    <center>
      <button className="editcontacts-btn">
        <h2>Edit Contact Details</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
      </button>
    </center>
  );
}
function EditBooking() {
  return (
    <center>
      <button className="editbooking-btn">
        <h2>Edit Booking Details</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
      </button>
    </center>
  );
}
function CancelBooking() {
  return (
    <center>
      <button className="cancelbooking-btn">
        <h2>Cancel Booking</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
      </button>
    </center>
  );
}

export default Checkoutedit;
