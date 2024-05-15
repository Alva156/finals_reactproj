import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Carousel } from "react-bootstrap";
import "./styles.css";
import { IoIosArrowDropright } from "react-icons/io";
import NavbarNew from "./NavBarNew";
import { Link } from "react-router-dom";

function Home({ isLoggedIn }) {
  const contentProps = {
    title1: "EXPLORE",
    title2: "SEOUL",
    description:
      "Get the affordable ticket for you in every season without any worries. We are also giving a special offer on a round-trip for some destination, so you can earn points from it!",
    buttonText: "BOOK NOW",
  };

  const carouselProps = {
    slides: [
      {
        imageUrl: "carousel 1.jpeg",
        captionTitle: "Place 1",
        captionDescription:
          "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      },
      {
        imageUrl: "carousel 2.jpg",
        captionTitle: "Place 2",
        captionDescription:
          "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      },
      {
        imageUrl: "carousel 3.jpeg",
        captionTitle: "Place 3",
        captionDescription:
          "Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.",
      },
    ],
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="home-main-container container-fluid ">
        <Row className="d-flex flex-wrap justify-content-center">
          {/* Left side (Col 7) */}
          <Col sm={12} md={12} lg={6} className="home-col-container">
            <HomeContent {...contentProps} isLoggedIn={isLoggedIn} />
          </Col>

          {/* Right side (Col 5) */}
          <Col sm={12} md={12} lg={4} className="home-carousel-col-container">
            <HomeCarousel {...carouselProps} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

function HomeContent({ title1, title2, description, buttonText, isLoggedIn }) {
  return (
    <div className="home-content">
      <p className="home-title1 text-white">{title1}</p>
      <p className="home-title2">{title2}</p>
      <p className="home-description">{description}</p>
      <Link
        to={isLoggedIn ? "/booking" : "/login"}
        style={{ textDecoration: "none" }}
      >
        <div className="btn home-button d-flex justify-content-center align-items-center px-2 gap-4">
          {buttonText} <IoIosArrowDropright style={{ fontSize: "25px" }} />
        </div>
      </Link>
    </div>
  );
}

function HomeCarousel({ slides }) {
  return (
    <div className="home-carousel">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={require(`./images/${slide.imageUrl}`)}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h5>{slide.captionTitle}</h5>
              <p>{slide.captionDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
