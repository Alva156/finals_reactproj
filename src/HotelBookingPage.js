import React, { useState } from "react";
import "./hotelbookingpage.css";
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

const HotelBookingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="hotel-booking-page">
      <Search />
      <header className="header">
        <div className="hotel-info">
          {" "}
          {/* New container for hotel name and location */}
          <div className="hotel-name">K-POP Hotel Seoul Tower</div>{" "}
          {/* Hotel name */}
          <div className="hotel-location">
            {" "}
            {/* Location text */}
            20, Toegye-ro 2-gil, Jung-gu, Myeong-dong
          </div>
        </div>
        <div className="price-and-book">
          {" "}
          {/* Price and booking section */}
          <span className="price">₱1,961</span>
          <button className="book-now">BOOK NOW</button>
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
          <div className="section">
            <h2>About Accommodation</h2>
            <p>
              Get your trip off to a great start with a stay at this property,
              which offers free Wi-Fi in all rooms. Strategically situated in
              Myeong-dong, allowing you access and proximity to local
              attractions and sights. Don't leave before paying a visit to the
              famous Gyeongbokgung Palace.
            </p>
          </div>
          <div className="section">
            <h2>Main Facilities</h2>
            <p>
              ✔ Free Wi-Fi in all rooms! ✔ Check-in/out ✔ Luggage storage ✔
              Shared kitchen ✔ Kitchen ✔ Laundry service ✔Concierge ✔Wi-Fi in
              public areas
            </p>
          </div>
        </div>

        <div className="flex-row full-width">
          <div className="section">
            <h2>All Facilities</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="section">
            <h2>Reviews</h2>
            {/* Include ReviewsSection here */}
            <ReviewsSection />
          </div>
        </div>

        {/* Location Section */}
        <div className="location-wrapper">
          <div className="map-container">
            <h2>Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3162.919514482132!2d126.97725900000002!3d37.55696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca25f93a51a53%3A0xbfd0440f0842fd34!2sK-POP%20HOTEL%20Seoul%20Tower!5e0!3m2!1sen!2sph!4v1715330749704!5m2!1sen!2sph"
              width="100%"
              height="300px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="location-info">
            <div className="section">
              <h2>Nearby Places</h2>
              <ul>
                <li>Place 1</li>
                <li>Place 2</li>
                <li>Place 3</li>
              </ul>
            </div>
            <div className="section">
              <h2>Popular in the Area</h2>
              <ul>
                <li>Popular Spot 1</li>
                <li>Popular Spot 2</li>
                <li>Popular Spot 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingPage;
