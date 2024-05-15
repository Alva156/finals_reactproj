import "./Checkoutpage.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import wallpaper from "./materials/wallpaper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import NavbarNew from "./NavBarNew";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Checkoutpage({ handleBooking }) {
  const location = useLocation();
  const booking = location.state && location.state.booking;
  const details = location.state && location.state.details;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleContactChange = (e) => {
    setContact(e.target.value);
    setError("");
  };

  const handleStartDateChange = (e) => {
    setSelectedStartDate(e.target.value);
    setError("");
  };

  const handleEndDateChange = (e) => {
    setSelectedEndDate(e.target.value);
    setError("");
  };

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    const startDate = new Date(selectedStartDate);
    const endDate = new Date(selectedEndDate);

    if (!name.trim() || !email.trim() || !contact.trim()) {
      setError("Please fill out all contact details.");
      return;
    }

    if (contact.trim().length !== 10 || isNaN(contact.trim())) {
      setError("Contact number must be a 10-digit number.");
      return;
    }

    if (!selectedStartDate || !selectedEndDate) {
      setError("Please select a date.");
      return;
    }

    if (startDate.getTime() > endDate.getTime()) {
      setError("Start date cannot be greater than end date.");
      return;
    }

    const bookingData = {
      ...booking,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      details: details,
    };
    handleBooking(bookingData);
    setReceiptNumber(generateReceiptNumber());
    setShowModal(true);
  };

  const generateReceiptNumber = () => {
    return Math.floor(10000 + Math.random() * 90000);
  };

  return (
    <div>
      <div className="container">
        <div className="left-side">
          <ContactDetailsForm
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleContactChange={handleContactChange}
          />
          {/* <Location booking={booking} /> */}
          <Summary booking={booking} />
        </div>
        <div className="right-side">
          <BookingSummary
            booking={booking}
            onCheckoutClick={handleCheckoutClick}
            handleEndDateChange={handleEndDateChange}
            handleStartDateChange={handleStartDateChange}
          />
          {error && <p className="error-container">{error}</p>}
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          receiptNumber={receiptNumber}
        />
      </div>
    </div>
  );

  function ContactDetailsForm({
    handleNameChange,
    handleEmailChange,
    handleContactChange,
  }) {
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
                value={name}
                onChange={handleNameChange}
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
                  value={email}
                  onChange={handleEmailChange}
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
                    value={contact}
                    onChange={handleContactChange}
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

  function BookingSummary({
    booking,
    onCheckoutClick,
    handleStartDateChange,
    handleEndDateChange,
  }) {
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
          <div className="payment-button-container">
            <ContinueToPaymentButton onCheckoutClick={onCheckoutClick} />
          </div>
        </div>
      </div>
    );
  }

  function ContinueToPaymentButton({ onCheckoutClick }) {
    return (
      <center>
        <button className="continue-to-payment-btn" onClick={onCheckoutClick}>
          <h2>Complete Transaction</h2>
          <FontAwesomeIcon icon={faArrowCircleRight} className="payment-icon" />
        </button>
      </center>
    );
  }

  function Modal({ showModal, setShowModal, receiptNumber }) {
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
              <h2>
                <strong>Your Receipt Number: </strong>#{receiptNumber}
              </h2>
            </center>
            <center>
              <p>
                Please present your receipt number at the respective store to
                complete the payment.
              </p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkoutpage;
