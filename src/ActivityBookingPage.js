import React, { useState, useRef, useEffect } from "react";
import "./activitybookingpage.css";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { height } from "@fortawesome/free-regular-svg-icons/faAddressBook";

function Search() {
  return (
    <div>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title className="px-3">
            <BiSolidBuildingHouse style={{ fontSize: "25px" }} />
            ACTIVITIES
          </Card.Title>
          <hr className="m-0 mx-3"></hr>
          <Card.Body className="col">
            <div>
              <div className="container-fluid m-0 ">
                <div className="row gap-4 d-flex flex-wrap">
                  <div className="inputs px-4 py-1 col-md-10 ">
                    <div>Location</div>
                    <div>
                      <input
                        className="input-text form-control-plaintext"
                        type="text"
                        placeholder="enter text here"
                      />
                    </div>
                  </div>
                  <div className="options  col-md-1 d-flex justify-content-center align-items-center">
                    <div>
                      <FaSearch style={{ fontSize: "25px", color: "white" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
}

const Lightbox = ({ isOpen, onClose, currentImageIndex, images }) => {
  if (!isOpen) return null;

  const handleNext = () => {
    onClose((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onClose((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="lightbox">
      <button className="close-lightbox" onClick={() => onClose(null)}>
        ×
      </button>
      <button className="prev-image" onClick={handlePrev}>
        ‹
      </button>
      <img src={images[currentImageIndex]} alt="Lightbox image" />
      <button className="next-image" onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

const reviews = [
  { rating: 5, text: "Fantastic hotel with great service!" },
  { rating: 4, text: "Very comfortable, but could be cleaner." },
  { rating: 3, text: "Average stay, nothing extraordinary." },
  { rating: 5, text: "Absolutely loved it! Highly recommend." },
  { rating: 2, text: "Not a great experience, needs improvement." },
];

const averageRating = (
  reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
).toFixed(1);

const ReviewsSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNext = () => {
    setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReviewIndex(
      (currentReviewIndex - 1 + reviews.length) % reviews.length
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="section reviews-section">
      <div className="review-summary">
        <div className="average-rating">⭐ {averageRating}</div>
        <div className="review-count">{reviews.length} reviews</div>
      </div>

      <div className="review-carousel">
        <button className="carousel-prev" onClick={handlePrev}>
          ‹
        </button>

        <div className="review-content">
          <p className="review-text">"{currentReview.text}"</p>
          <p className="review-rating">Rating: ⭐ {currentReview.rating}</p>
        </div>

        <button className="carousel-next" onClick={handleNext}>
          ›
        </button>
      </div>
    </div>
  );
};

const AvailableDatesSection = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const dates = [
    { day: "Sun", date: "5 May" },
    { day: "Mon", date: "6 May" },
    { day: "Tue", date: "7 May" },
    { day: "Wed", date: "8 May" },
    { day: "Thu", date: "9 May" },
    { day: "Fri", date: "10 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
    { day: "Sat", date: "11 May" },
  ];

  return (
    <div className="available-dates-container">
      <div className="dates-carousel">
        {dates.map((date, index) => (
          <div key={index} className="date-square">
            <div className="day">{date.day}</div>
            <div className="date">{date.date}</div>
          </div>
        ))}
      </div>
      <div className="price-container">
        <div className="price-details">
          <div className="left-section">
            <div className="price-info">
              <div className="price-heading">General Price</div>
              <div className="price">₱1,961</div>
            </div>
            <div className="quantity-adjuster">
              <button onClick={decrementQuantity}>-</button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                style={{ appearance: "textfield" }} // Hide arrows in Firefox
                onWheel={(e) => e.preventDefault()} // Disable scrolling in Firefox
              />
              <button onClick={incrementQuantity}>+</button>
            </div>
          </div>
          <div className="right-section">
            <div className="price-info">
              <div className="price-heading">Total Price</div>
              <div className="price">₱1,961</div>
            </div>
            <button className="book-now">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityBookingPage = () => {
  const location = useLocation();
  const booking = location.state && location.state.booking;
  const images = booking.images;
  const [coordinates, setCoordinates] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);

  const handleGeocode = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          booking.address
        )}&key=AIzaSyA9bEl5wGZ3rTxi_4clyA4l1-724wpNmY4`
      );
      const { results } = response.data;
      if (results && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        setCoordinates({ lat, lng });
        setError(null);
        console.log(results[0].geometry.location);
      } else {
        setError("No results found");
      }
    } catch (error) {
      setError("Error fetching geocoding data");
    }
  };

  useEffect(() => {
    handleGeocode();
  }, [booking]);

  useEffect(() => {
    if (coordinates) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: coordinates,
        zoom: 14,
      });

      new window.google.maps.Marker({
        position: coordinates,
        map,
      });
    }
  }, [coordinates]);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="hotel-booking-page">
      {/* <Search /> */}
      <header className="header">
        <div className="hotel-info">
          <div className="hotel-name">{booking.model}</div>
          <div className="hotel-location">{booking.address}</div>
        </div>
        <div className="price-and-book">
          <span className="price">{booking.price}</span>
          <Link
            to={{
              pathname: "/checkout",
              state: { booking: booking, details: booking.wycs },
            }}
          >
            <button className="book-now">BOOK NOW</button>
          </Link>
        </div>
      </header>

      <div className="center-wrapper">
        <div className="hotel-images-container">
          <div className="main-image">
            <img
              src={require(`./images/${images[0]}`)}
              alt="Main Hotel Image"
              onClick={() => openLightbox(0)}
            />
          </div>
          <div className="thumbnail-images">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={require(`./images/${images[index + 1]}`)}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => openLightbox(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        isOpen={currentImageIndex !== null}
        currentImageIndex={currentImageIndex}
        images={images}
        onClose={setCurrentImageIndex}
      />

      <div className="hotel-details">
        <div className="flex-row full-width">
          <div className="available-dates-container">
            {/* <h2>Available Dates</h2>
            <AvailableDatesSection /> */}
          </div>
        </div>

        <div className="flex-row full-width">
          <div className="section">
            <h2>What You Can See</h2>
            <p>{booking.wycs}</p>
          </div>
          <div className="section">
            <h2>Reviews</h2>
            <ReviewsSection />
          </div>
        </div>

        <div className="location-wrapper">
          <div
            className="map-container"
            ref={mapRef}
            style={{ height: "500px" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBookingPage;
