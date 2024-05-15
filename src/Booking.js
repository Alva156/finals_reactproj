import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaBus } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";
import NavbarNew from "./NavBarNew";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Booking() {
  const carouselImages = [
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
  ];

  const bookingPhotosSet1 = [
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
  ];

  const overlayTextsSet1 = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
    "Text 6",
    "Text 7",
    "Text 8",
  ];

  const bookingPhotosSet2 = [
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
  ];

  const overlayTextsSet2 = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
    "Text 6",
    "Text 7",
    "Text 8",
  ];

  const bookingPhotosSet3 = [
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
    "images/Home2.png",
  ];

  const overlayTextsSet3 = [
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
    "Text 6",
    "Text 7",
    "Text 8",
  ];

  return (
    <div
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="booking-container">
        <div>
          <ExploreSeoul carouselImages={carouselImages} />
          <Search />
        </div>
      </div>
      <div>
        <Bookingrows
          photos={bookingPhotosSet1}
          overlayTexts={overlayTextsSet1}
          title="FEATURED DESTINATIONS"
        />
      </div>
      <div>
        <Bookingrows
          photos={bookingPhotosSet2}
          overlayTexts={overlayTextsSet2}
          title="TOP HOTELS"
        />
      </div>
      <div>
        <Bookingrows
          photos={bookingPhotosSet3}
          overlayTexts={overlayTextsSet3}
          title="TOP ACTIVITIES"
        />
      </div>
      <Specialdeal />
    </div>
  );
}

function ExploreSeoul({ carouselImages }) {
  return (
    <div className="row d-flex justify-content-between booking-container2 flex-wrap">
      <div className="col-md-6 col-lg-7">
        <div className="bookingoverlay-text">
          <p className="bookingtitle-overlap text-white">
            Explore Seoul with Ease
          </p>
          <p className="bookingparagraph-overlap text-white">
            Get the affordable ticket for you in every season without any
            worries. We are also giving a special offer on a round-trip for some
            destination, so you can earn points from it!
          </p>
          <button className="btn booking-button">More Details</button>
        </div>
      </div>

      <div className="booking-carousel-div-container col-md-6 col-lg-5">
        <Carousel className="booking-carousel-container">
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index} style={{ height: "100%" }}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index}`}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="booking-search-container">
      <div>
        <Card className="mb-2">
          <Card.Body>
            <Card.Title className="px-3">
              <span style={{ marginRight: "28px" }}>
                <BiSolidBuildingHouse style={{ fontSize: "25px" }} />
                &nbsp;HOTELS
              </span>
              <Link
                to="/carrent"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span style={{ marginRight: "28px" }}>
                  <FaCar style={{ fontSize: "25px" }} />
                  &nbsp;CAR RENTAL
                </span>
              </Link>
              <span style={{ marginRight: "28px" }}>
                <FaBus style={{ fontSize: "25px" }} />
                &nbsp;AIRPORT TRANSFER
              </span>
              <span style={{ marginRight: "28px" }}>
                <TbChecklist style={{ fontSize: "25px" }} />
                &nbsp;ACTIVITIES
              </span>
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
                  <div className="row gap-3 d-flex flex-wrap">
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
                    <div className="inputs px-4 py-1 d-flex flex-column flex-md-row col-md-2">
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
                        <FaSearch
                          style={{ fontSize: "25px", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

function Bookingrows({ photos, overlayTexts, title }) {
  return (
    <div className="bookingrows-container">
      <Bookingtitle title={title} />
      <Bookingphotos photos={photos} overlayTexts={overlayTexts} />
    </div>
  );
}

function Bookingphotos({ photos, overlayTexts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photosPerPage = 4;

  const nextPhotos = () => {
    const newIndex = currentIndex + photosPerPage;
    setCurrentIndex(Math.min(newIndex, photos.length - photosPerPage));
  };

  const prevPhotos = () => {
    const newIndex = currentIndex - photosPerPage;
    setCurrentIndex(Math.max(newIndex, 0));
  };

  return (
    <div className="bookingphotos-container">
      <div className="row">
        {photos
          .slice(currentIndex, currentIndex + photosPerPage)
          .map((photo, index) => (
            <div key={index} className="col-md-3">
              <div className="booking-photos-img-container">
                <img src={photo} alt={`Photo ${index}`} className="img-fluid" />
                <div className="booking-photos-overlay-text">
                  {overlayTexts[currentIndex + index]}{" "}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="arrows-container">
        <button
          className="prev-btn"
          onClick={prevPhotos}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={nextPhotos}
          disabled={currentIndex + photosPerPage >= photos.length}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

function Bookingtitle({ title }) {
  return (
    <div>
      <div className="booking-title">{title}</div>
    </div>
  );
}

function Specialdeal() {
  return (
    <div className="specialdeal-container ">
      <Bookingtitle className="text-white" title="SPECIAL DEAL" />
      <div className="specialdeal-content text-white">
        <p className="text-white">DISCOUNT UP TO ₩10,000!</p>
        <p className="text-white">
          Avail 5% discount up to ₩10,000 for Hotels, Car Rentals, Airport
          Transfer, and Activities.
        </p>
        <p className="text-white">
          CODE: <strong>SEOULSEEKER5OFF</strong>
        </p>
      </div>
    </div>
  );
}

export default Booking;
