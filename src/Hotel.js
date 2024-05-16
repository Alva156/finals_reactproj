import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";
import NavbarNew from "./NavBarNew";
import axios from "axios";
import { Link } from "react-router-dom";

function Hotel({ hotels }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [guests, setGuests] = useState("");
  // useEffect(() => {
  //   const fetchHotels = async () => {
  //     try {
  //       // Define the parameters for the Nearby Search request
  //       const params = {
  //         key: "AIzaSyA9bEl5wGZ3rTxi_4clyA4l1-724wpNmY4", // Replace with your actual API key
  //         location: "37.5665,126.9780", // Coordinates of Seoul
  //         radius: 5000, // Search radius in meters (adjust as needed)
  //         type: "lodging", // Restrict results to lodging (hotels)
  //       };

  //       // Make the Nearby Search request to the Google Places API
  //       const response = await axios.get(
  //         "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
  //         { params }
  //       );

  //       // Extract the list of hotels from the response
  //       const { results } = response.data;

  //       const hotelsWithPhotos = await Promise.all(
  //         results.map(async (place) => {
  //           console.log(place);
  //           if (place.photos && place.photos.length > 0) {
  //             const photoReferences = place.photos.map(
  //               (photo) => photo.photo_reference
  //             );

  //             // Fetch the photos using the Place Photos API
  //             const photoUrls = await Promise.all(
  //               photoReferences.map(async (photoReference) => {
  //                 const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=AIzaSyA9bEl5wGZ3rTxi_4clyA4l1-724wpNmY4`;
  //                 return photoUrl;
  //               })
  //             );

  //             console.log(photoUrls);
  //             // Add the photo URLs to the place object
  //             const placeWithPhotos = { ...place, photoUrls };
  //             return placeWithPhotos;
  //           } else {
  //             return place;
  //           }
  //         })
  //       );

  //       // Update the state with the list of hotels
  //       setHotels(hotelsWithPhotos);
  //     } catch (error) {
  //       console.error("Error fetching hotels:", error);
  //     }
  //   };

  //   // Call the fetchHotels function
  //   fetchHotels();
  // }, []); // Empty dependency array to run effect only once on mount

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.model.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
      (guests === "" || parseInt(guests) <= parseInt(hotel.seats))
  );

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hotel-search">
        <Search
          setSearchQuery={setSearchQuery}
          handleGuestsChange={handleGuestsChange}
        />
        <HotelHead />
        {filteredHotels.map((hotel) => (
          <HotelList hotel={hotel} />
        ))}
        {/* <HotelList hotels={filteredHotels} /> */}
      </div>
    </div>
  );
}

function Search({ setSearchQuery, handleGuestsChange }) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
              {/* <div className="d-flex flex-col flex-wrap gap-2 h6 text-white">
                <div className="options py-2 px-4">HOTEL</div>
                <div className="options py-2 px-4">VILLA</div>
                <div className="options py-2 px-4">APARTMENT</div>
              </div> */}
              <div className="container-fluid m-0 ">
                <div className="row gap-4 d-flex flex-wrap">
                  <div className="inputs px-4 py-1 col-md-3 ">
                    <div>Hotel name</div>
                    <div>
                      <input
                        className="input-text form-control-plaintext"
                        type="text"
                        placeholder="Enter hotel name"
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                  {/* <div className="inputs px-4 py-1 d-flex flex-column flex-md-row gap-4 col-md-2">
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
                  </div> */}
                  <div className="inputs px-4 py-1 col-md-3">
                    <div>Max Guests</div>
                    <div class="row">
                      <div class="col-2 d-flex justify-content-center align-items-center">
                        <IoPerson style={{ fontSize: "20px" }} />
                      </div>
                      <div class="col-10">
                        <input
                          className="input-text form-control-plaintext fs-smaller"
                          type="text"
                          placeholder="Enter number of guests"
                          onChange={handleGuestsChange}
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

function HotelHead() {
  return (
    <div>
      <div class="list-head d-flex p-2 text-white my-4 px-4">
        LOWEST PRICE GUARANTEED!
      </div>
    </div>
  );
}

function HotelList({ hotel }) {
  const images = hotel.images;
  return (
    <div className="list-container container-fluid my-2 rounded">
      <div className="row p-2 rounded d-flex flex-wrap">
        <div className="col-md col-12">
          <div className="row px-2 d-flex flex-wrap">
            <div className="col-md-8 col-12">
              <div className="list-lg-img rounded">
                <img
                  src={require(`./images/${hotel.images[0]}`)}
                  alt={`Hotel ${hotel.model} Image 1`}
                  className="img-fluid rounded mb-2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="row px-2">
                <div className="col-12 list-sm-img rounded mb-2">
                  <img
                    src={require(`./images/${hotel.images[1]}`)}
                    alt={`Hotel ${hotel.model} Image 2`}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="col-12 list-sm-img rounded">
                  <img
                    src={require(`./images/${hotel.images[2]}`)}
                    alt={`Hotel ${hotel.model} Image 3`}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col list-all-details">
          <div className="col-12 row list-detail d-flex justify-content-center align-items-center">
            <div className="col-md-9 list-name">{hotel.model}</div>
            <div className="col-md-3 h6"></div>
          </div>
          <div className="col-12 list-detail d-flex flex-wrap">
            <div className="col-12 py-3 list-loc ">
              <FaLocationDot /> {hotel.address}
            </div>
            <div className="col-12">
              <Link
                to={{
                  pathname: "/bookingpage",
                  state: { booking: hotel },
                }}
                style={{ textDecoration: "none" }}
              >
                <div className="btn-book px-4 py-2 text-white text-center rounded mt-4">
                  CHECK DETAILS
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
