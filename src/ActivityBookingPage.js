import React, { useState } from "react";
import "./activitybookingpage.css";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";

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

const images = [
  "https://pix8.agoda.net/hotelImages/746/746733/746733_16042214550041717344.jpg?ca=6&ce=1&s=1024x",
  "https://pix8.agoda.net/property/10588136/294917290/097747606fb5e864b5073c5701eee1c4.jpg?ca=17&ce=1&s=1024x",
  "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/39057852.jpg?k=b0525125e79ac22908d1f6f3e4da80029d35f7b759373b59d6fcc090570fcac6&o=&s=1024x",
  "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/36960759.jpg?k=6701d8a9e530765ec7a5982dd0231bddd0fd326d5a99b2a30a1a9ed57a740a87&o=&s=1024x",
  "https://pix8.agoda.net/hotelImages/746/746733/746733_15071417380032291911.jpg?ca=4&ce=1&s=1024x",
  "https://pix8.agoda.net/hotelImages/746/746733/746733_15071417380032291878.jpg?ca=4&ce=1&s=1024x",
  "https://pix8.agoda.net/property/10588136/755373681/08cac4e8d06254072d7076ff1ad2e57d.jpeg?ce=0&s=1024x",
];

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
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
              />
            </div>
          </div>
          <div className="right-section">
            <div className="total-price">Total Price: ₱1,961</div>
            <button className="book-now">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityBookingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="hotel-booking-page">
      <Search />
      <header className="header">
        <div className="hotel-info">
          <div className="hotel-name">Activity Name</div>
          <div className="hotel-location">Location Address</div>
        </div>
        <div className="price-and-book">
          <span className="price">₱1,961</span>
        </div>
      </header>

      <div className="center-wrapper">
        <div className="hotel-images-container">
          <div className="main-image">
            <img
              src={images[0]}
              alt="Main Hotel Image"
              onClick={() => openLightbox(0)}
            />
          </div>
          <div className="thumbnail-images">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
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
            <h2>Available Dates</h2>
            <AvailableDatesSection />
          </div>
        </div>

        <div className="flex-row full-width">
          <div className="section">
            <h2>What You Can See</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="section">
            <h2>Reviews</h2>
            <ReviewsSection />
          </div>
        </div>

        <div className="location-wrapper">
          <div className="map-container">
            <h2>Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3162.919514482132!2d126.97725900000002!3d37.55696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca25f93a51a53%3A0xbfd0440f0842fd34!2sK-POP%20HOTEL%20Seoul%20Tower!5e0!3m2!1sen!2sus!4v1684459468881!5m2!1sen!2sus"
              width="1365"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBookingPage;
