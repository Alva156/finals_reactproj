import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Carousel } from "react-bootstrap";
import NavbarNew from "./NavBarNew";

function Booking() {
  const carouselImages = [
    "images/samplepiconly.png",
    "images/samplepiconly.png",
    "images/samplepiconly.png",
  ];
  return (
    <div
      className="booking-container"
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
      }}
    >
      <NavbarNew />
      <div>
        <ExploreSeoul carouselImages={carouselImages} />
      </div>
    </div>
  );
}

function ExploreSeoul({ carouselImages }) {
  return (
    <div
      className="row d-flex justify-content-between align-items-center"
      style={{
        backgroundImage: "url(/images/SeoulHomePage.png)",
        backgroundSize: "fill",
      }}
    >
      <div className="col-md-9">
        <div className="bookingoverlay-text">
          <p className="bookingtitle-overlap">Explore Seoul with Ease</p>
          <p className="bookingparagraph-overlap">
            Get the affordable ticket for you in every season without any
            worries. We are also giving a special offer on a round-trip for some
            destination, so you can earn points from it!
          </p>
          <button className="btn booking-button">More Details</button>
        </div>
      </div>
      <div className="col-md-3">
        <Carousel>
          {carouselImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Booking;
