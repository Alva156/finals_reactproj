import "./BookHispage.css";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
import wallpaper from "./materials/wallpaper.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarNew from "./NavBarNew";
import { IoPersonCircleSharp } from "react-icons/io5";
import { PiAirplaneTiltFill } from "react-icons/pi";

function BookHispage({ bookingDetails, hotels }) {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectedType, setSelectedType] = useState("");

  const handleAddReviewClick = () => {
    setShowModal(true);
  };
  const handleEditClick = () => {
    setShowModal2(true);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredBookings = selectedType
    ? bookingDetails.filter((booking) => booking.bookingType === selectedType)
    : bookingDetails;

  return (
    <div>
      <div className="body2">
        <div className="container2">
          <center>
            {" "}
            <h1>Booking History</h1>
          </center>
          <Dropdown onChange={handleTypeChange} />
          {filteredBookings.length === 0 ? (
            <center>
              <p>No bookings found.</p>
            </center>
          ) : (
            filteredBookings.map((booking) => (
              <div>
                <BookingHistory
                  onAddReviewClick={handleAddReviewClick}
                  onEditClick={handleEditClick}
                  booking={booking}
                />
                <Modal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  booking={booking}
                />
                <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function BookingHistory({ booking, onAddReviewClick, onEditClick }) {
  return (
    <div className="bookinghistory">
      <div className="bookingsummary-container2">
        <div className="top-section2">
          <div className="images-container">
            <div className="main-image">
              <img
                src={require(`./images/${booking.images[0]}`)}
                className="img-fluid rounded mb-2"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="side-images">
              <div className="image2">
                <img
                  src={require(`./images/${booking.images[1]}`)}
                  className="img-fluid rounded mb-2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="image2">
                <img
                  src={require(`./images/${booking.images[2]}`)}
                  className="img-fluid rounded mb-2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="details-container">
            <div className="activity2">
              <h1>{booking.model}</h1>
              <div className="additional-details">
                <p className="date">
                  Date: {booking.startDate} - {booking.endDate}
                </p>
                <p className="pax">Total Pax: {booking.seats}</p>
              </div>
            </div>
            <div className="shortdetails2">
              <p>
                <strong>Details: </strong>
                {booking.details}
              </p>
            </div>
            <div className="buttons">
              <AddReview onAddReviewClick={onAddReviewClick} />
              <ViewDetails onEditClick={onEditClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ onChange, selectedType }) {
  return (
    <div className="dropdown-container">
      <h3 className="dropdown-label">Filter:</h3>
      <select
        className="dropdown-select"
        onChange={onChange}
        value={selectedType}
      >
        <option value="">All</option>
        <option value="Hotel">Hotel</option>
        <option value="Activity">Activity</option>
        <option value="Car">Car</option>
      </select>
    </div>
  );
}
function AddReview({ onAddReviewClick }) {
  return (
    <center>
      <button className="addreview-btn" onClick={onAddReviewClick}>
        <h2>Add Review</h2>
      </button>
    </center>
  );
}
function ViewDetails({ onEditClick }) {
  return (
    <center>
      <button className="viewdetails-btn" onClick={onEditClick}>
        <h2>Edit Transaction</h2>
      </button>
    </center>
  );
}

const Modal = ({ showModal, setShowModal, booking }) => {
  const [rating, setRating] = useState(0);

  if (!showModal) return null;

  return (
    <div className="modal-backdrop1" onClick={() => setShowModal(false)}>
      <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowModal(false)} className="close-btn">
          X
        </button>
        <div className="popup-container">
          <h1>Write a Review</h1>
          <h2>{booking.model}</h2>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((index) => (
              <FontAwesomeIcon
                key={index}
                icon={index <= rating ? fullStar : emptyStar}
                onClick={() => setRating(index)}
                className="star"
              />
            ))}
          </div>
          <p>Say something about your experience....</p>
          <textarea placeholder="" className="fixed-size-textarea"></textarea>
          <AddReview2 />
        </div>
      </div>
    </div>
  );
};
function AddReview2() {
  return (
    <center>
      <button className="addrreview2-btn">
        <h2>Add Review</h2>
        <FontAwesomeIcon
          icon={faArrowCircleRight}
          className="addreview2-icon"
        />
      </button>
    </center>
  );
}

// dasdasdsadsadasd

const Modal2 = ({ showModal2, setShowModal2 }) => {
  const [rating, setRating] = useState(0);

  if (!showModal2) return null;

  return (
    <div className="modal-backdrop1" onClick={() => setShowModal2(false)}>
      <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowModal2(false)} className="close-btn">
          X
        </button>
        <div className="popup-container">
          <h1>Write a Review</h1>
          <h2>Activity Name/Event/Car, etc.</h2>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((index) => (
              <FontAwesomeIcon
                key={index}
                icon={index <= rating ? fullStar : emptyStar}
                onClick={() => setRating(index)}
                className="star"
              />
            ))}
          </div>
          <p>Say something about your experience....</p>
          <textarea placeholder="" className="fixed-size-textarea"></textarea>
          <div className="modifybut">
            <EditReview />
            <DeleteReview />
          </div>
        </div>
      </div>
    </div>
  );
};
function EditReview() {
  return (
    <center>
      <button className="edit-btn">
        <h2>Edit</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="edit-icon" />
      </button>
    </center>
  );
}
function DeleteReview() {
  return (
    <center>
      <button className="delete-btn">
        <h2>Delete</h2>
        <FontAwesomeIcon icon={faArrowCircleRight} className="delete-icon" />
      </button>
    </center>
  );
}
export default BookHispage;
