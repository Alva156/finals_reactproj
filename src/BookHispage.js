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

function BookHispage() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleAddReviewClick = () => {
    setShowModal(true);
  };
  const handleEditClick = () => {
    setShowModal2(true);
  };

  return (
    <div>
      <div className="body2">
        <div className="container2">
          <h1>Booking History</h1>
          <Dropdown />
          <BookingHistory
            onAddReviewClick={handleAddReviewClick}
            onEditClick={handleEditClick}
          />
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Modal2 showModal2={showModal2} setShowModal2={setShowModal2} />
      </div>
    </div>
  );
}

function BookingHistory({ onAddReviewClick, onEditClick }) {
  return (
    <div className="bookinghistory">
      <div className="bookingsummary-container2">
        <div className="top-section2">
          <div className="images-container">
            <div className="main-image">
              <img src={wallpaper} alt="Main Event" />
            </div>
            <div className="side-images">
              <div className="image2">
                <img src={wallpaper} alt="Event" />
              </div>
              <div className="image2">
                <img src={wallpaper} alt="Event" />
              </div>
            </div>
          </div>
          <div className="details-container">
            <div className="activity2">
              <h1>Activity Name/Event/Car, etc.</h1>
              <div className="additional-details">
                <p className="date">Date: May 10, 2024</p>
                <p className="pax">Total Pax: 4</p>
              </div>
            </div>
            <div className="shortdetails2">
              <p>
                <strong>Details:</strong>This is the details of the transaction.
                This is the details of the transaction. This is the details of
                the transaction.This is the details of the transaction.
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

function Dropdown() {
  return (
    <div className="dropdown-container">
      <h3 className="dropdown-label">Filter:</h3>
      <select className="dropdown-select">
        <option value="hotel">Hotel</option>
        <option value="activity">Activity</option>
        <option value="car">Car</option>
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
        <h2>View Details</h2>
      </button>
    </center>
  );
}

const Modal = ({ showModal, setShowModal }) => {
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
