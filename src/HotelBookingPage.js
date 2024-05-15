import React, { useState, useEffect, useRef } from "react";
import "./hotelbookingpage.css";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title className="px-3">
            <BiSolidBuildingHouse style={{ fontSize: "25px" }} />
            HOTELS
          </Card.Title>
          <hr className="m-0 mx-3"></hr>
          <Card.Body className="col">
            <div>
              <div className="d-flex flex-col flex-wrap gap-2 h6 text-white">
                <div className="options py-2 px-4">HOTEL</div>
                <div className="options py-2 px-4">VILLA</div>
                <div className="options py-2 px-4">APARTMENT</div>
              </div>
              <div className="container-fluid m-0 ">
                <div className="row gap-4 d-flex flex-wrap">
                  <div className="inputs px-4 py-1 col-md-3 ">
                    <div>City, destination, or hotel name</div>
                    <div>
                      <input
                        className="input-text form-control-plaintext"
                        type="text"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="inputs px-4 py-1 d-flex flex-column flex-md-row gap-4 col-md-2">
                    <div>
                      <div className=" border-bottom-2 border-dark">
                        Check in
                      </div>
                      <div>
                        <input
                          className="input-text form-control-plaintext text-secondary fs-smaller overflow-auto"
                          type="date"
                          placeholder="Fri, 15 March"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inputs px-4 py-1 d-flex flex-column flex-md-row gap-4 col-md-2">
                    <div>
                      <div className=" border-bottom-2 border-dark">
                        Check out
                      </div>
                      <div>
                        <input
                          className="input-text form-control-plaintext text-secondary fs-smaller overflow-auto"
                          type="date"
                          placeholder="Fri, 15 March"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inputs px-4 py-1 col-md-3">
                    <div>Guest and Rooms</div>
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <IoPerson style={{ fontSize: "20px" }} />
                      </div>
                      <div class="col-10">
                        <input
                          className="input-text form-control-plaintext fs-smaller"
                          type="text"
                          placeholder="1 Adult(s), 0 Child, 1 Room"
                        />
                      </div>
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

// const images = [
//   "https://pix8.agoda.net/hotelImages/746/746733/746733_16042214550041717344.jpg?ca=6&ce=1&s=1024x",
//   "https://pix8.agoda.net/property/10588136/294917290/097747606fb5e864b5073c5701eee1c4.jpg?ca=17&ce=1&s=1024x",
//   "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/39057852.jpg?k=b0525125e79ac22908d1f6f3e4da80029d35f7b759373b59d6fcc090570fcac6&o=&s=1024x",
//   "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/36960759.jpg?k=6701d8a9e530765ec7a5982dd0231bddd0fd326d5a99b2a30a1a9ed57a740a87&o=&s=1024x",
//   "https://pix8.agoda.net/hotelImages/746/746733/746733_15071417380032291911.jpg?ca=4&ce=1&s=1024x",
//   "https://pix8.agoda.net/hotelImages/746/746733/746733_15071417380032291878.jpg?ca=4&ce=1&s=1024x",
//   "https://pix8.agoda.net/property/10588136/755373681/08cac4e8d06254072d7076ff1ad2e57d.jpeg?ce=0&s=1024x",
// ];

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

const HotelBookingPage = () => {
  const location = useLocation();
  const booking = location.state && location.state.booking;
  const details = booking.accomodation;
  const images = booking.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);
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
        console.log(results[0].geometry.location);
        setError(null);
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
    // Initialize map when coordinates are available
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
              state: { booking: booking, details: details },
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
          <div className="section">
            <h2>About Accommodation</h2>
            {booking.accomodation}
          </div>
          <div className="section">
            <h2>Main Facilities</h2>
            <p>{booking.facilities}</p>
          </div>
        </div>

        <div className="flex-row full-width">
          <div className="section">
            <h2>All Facilities</h2>
            <p>{booking.facilities}</p>
          </div>
          <div className="section">
            <h2>Reviews</h2>
            <ReviewsSection />
          </div>
        </div>

        <div className="location-wrapper">
          <div className="map-container" ref={mapRef}></div>
          <div className="location-info">
            <div className="section">
              <h2>Nearby Places</h2>
              <ul>
                {booking.nearbyPlaces.map((nearby, index) => (
                  <li key={index}>{nearby}</li>
                ))}
              </ul>
            </div>
            <div className="section">
              <h2>Popular in the Area</h2>
              <ul>
                {booking.popularInArea.map((pop, index) => (
                  <li key={index}>{pop}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingPage;
