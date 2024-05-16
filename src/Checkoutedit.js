import "./Checkoutedit.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import wallpaper from "./materials/wallpaper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import NavbarNew from "./NavBarNew";
import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";

function Checkoutedit({ handleUpdateBooking, handleDeleteBooking }) {
  const location = useLocation();
  const booking = location.state && location.state.booking;

  const [selectedStartDate, setSelectedStartDate] = useState(booking.startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(booking.endDate);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleStartDateChange = (e) => {
    setSelectedStartDate(e.target.value);
    setError("");
  };

  const handleEndDateChange = (e) => {
    setSelectedEndDate(e.target.value);
    setError("");
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const startDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);

    if (!selectedStartDate || !selectedEndDate) {
      setError("Please select a date.");
      return;
    }

    if (startDate.getTime() > endDate.getTime()) {
      setError("Start date cannot be greater than end date.");
      return;
    }

    const updatedBooking = {
      ...booking,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
    };
    handleUpdateBooking(updatedBooking);
    setShowModal(true);
  };

  const handleDelete = () => {
    handleDeleteBooking(booking.id);
  };

  return (
    <div>
      <div className="container">
        <div className="left-side">
          <ContactDetailsForm booking={booking} />
          <Summary />
        </div>
        <div className="right-side">
          <div className="bookingsummaryform">
            <div className="bookingsummary-container">
              <h1>Booking Summary</h1>
              <div className="activity">
                <p>
                  {booking.model} ({booking.bookingType})
                </p>
              </div>
              <div className="top-section">
                <div className="image">
                  <img
                    src={require(`./images/${booking.images[0]}`)}
                    alt="Event"
                  />
                  ;
                </div>
              </div>
              <div className="shortdetails">
                <p>{booking.details}</p>
              </div>
              <div className="date-and-details">
                <p>Start Date:</p>
                <div className="selecteddate">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="datefield"
                    placeholder="Date-in"
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
                  />
                </div>
                <p>End Date:</p>
                <div className="selecteddate">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="datefield"
                    placeholder="Date-out"
                    value={selectedEndDate}
                    onChange={handleEndDateChange}
                  />
                </div>
                {/* <div className="totalpax">
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
            </div> */}
              </div>
            </div>
          </div>
          {error && <p className="error-container">{error}</p>}
          <EditBooking handleSaveChanges={handleSaveChanges} />
          <CancelBooking handleDelete={handleDelete} />
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
}

function ContactDetailsForm({ booking }) {
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
              value={booking.contactDetails.name}
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
                value={booking.contactDetails.email}
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
                  value={booking.contactDetails.countryCode}
                >
                  <option value="+1">US +1</option>
                  <option value="+44">UK +44</option>
                  <option value="+62">ID +62</option>
                  <option value="+91">IN +91</option>
                  <option value="+81">JP +81</option>
                  <option value="+49">DE +49</option>
                  <option value="+33">FR +33</option>
                  <option value="+55">BR +55</option>
                  <option value="+61">AU +61</option>
                  <option value="+7">RU +7</option>
                  <option value="+86">CN +86</option>
                  <option value="+27">ZA +27</option>
                  <option value="+63">PH +63</option>
                </select>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={booking.contactDetails.contact}
                  readOnly
                />
              </div>
            </div>
          </div>
        </form>
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

// function EditContacts() {
//   return (
//     <center>
//       <button className="editcontacts-btn">
//         <h2>Edit Contact Details</h2>
//         <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
//       </button>
//     </center>
//   );
// }
function EditBooking({ handleSaveChanges }) {
  return (
    <center>
      <button className="editbooking-btn" onClick={handleSaveChanges}>
        <h2>Save Booking Details</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
      </button>
    </center>
  );
}
function CancelBooking({ handleDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const history = useHistory();
  const handleCancel = () => {
    setShowConfirmation(true);
  };

  const handleConfirmDelete = () => {
    handleDelete();
    history.push("/history");
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <center>
      <div className="cancelbooking-container">
        <button className="cancelbooking-btn" onClick={handleCancel}>
          <h2>Cancel Booking</h2>
          <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
        </button>
        {showConfirmation && (
          <div className="confirmation-overlay">
            <div className="confirmation-dialog">
              <p>Are you sure you want to cancel this booking?</p>
              <button onClick={handleConfirmDelete}>Yes</button>
              <button onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        )}
      </div>
    </center>
  );
}
function Modal({ showModal, setShowModal }) {
  if (!showModal) return null;

  return (
    <div className="modal-backdrop2" onClick={() => setShowModal(false)}>
      <div className="modal-content2" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowModal(false)} className="close-btn1">
          X
        </button>
        <div className="popup-container1">
          <h1>Thank You for Booking with us</h1>
          <center>
            <p>Successfully saved your booking details.</p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Checkoutedit;
