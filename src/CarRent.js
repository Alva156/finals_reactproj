import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavbarNew from "./NavBarNew";
import { Link } from "react-router-dom";
import { useState } from "react";

const dummyCars = [
  {
    id: 1,
    bookingType: "Car",
    model: "Toyota Corolla",
    price: "₩100,000",
    luggageCapacity: "2 Baggages",
    seats: "4",
    service: "Basic Service",
    withDriver: true,
    images: ["corolla1.png", "corolla2.png", "corolla3.png"],
    type: "Sedan",
  },
  {
    id: 2,
    bookingType: "Car",
    model: "Honda Civic",
    price: "₩120,000",
    luggageCapacity: "3 Baggages",
    seats: "5",
    service: "Premium Service",
    withDriver: false,
    images: ["civic1.png", "civic2.png", "civic3.png"],
    type: "Sedan",
  },
  {
    id: 3,
    bookingType: "Car",
    model: "Hyundai Sonata",
    price: "₩110,000",
    luggageCapacity: "2 Baggages",
    seats: "5",
    service: "Standard Service",
    withDriver: true,
    images: ["sonata1.png", "sonata2.png", "sonata3.jpg"],
    type: "Sedan",
  },
];

function CarRent() {
  const [passengerCapacity, setPassengerCapacity] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [carType, setCarType] = useState("");

  const handlePassengerCapacityChange = (capacity) => {
    setPassengerCapacity(capacity);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCarTypeChange = (type) => {
    setCarType(type);
  };

  const filteredCars = dummyCars.filter((car) => {
    return (
      (!searchQuery ||
        car.model.toLowerCase().startsWith(searchQuery.toLowerCase())) &&
      (!passengerCapacity || parseInt(car.seats) >= passengerCapacity) &&
      (!carType || car.type === carType)
    );
  });

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
          handleSearchChange={handleSearchChange}
          handleCarTypeChange={handleCarTypeChange}
        />
        <Filter
          passengerCapacity={passengerCapacity}
          handlePassengerCapacityChange={handlePassengerCapacityChange}
          handleCarTypeChange={handleCarTypeChange}
        />
        {filteredCars.map((car) => (
          <CarList key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

function Search({ handleSearchChange, handleCarTypeChange }) {
  return (
    <div>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title className="px-3">
            <IoCarSport style={{ fontSize: "25px", marginRight: "5px" }} />
            CAR RENTAL
          </Card.Title>
          <hr className="m-0 mx-3"></hr>
          <Card.Body className="col">
            <div>
              <div className="container-fluid m-0">
                <div className="row gap-4">
                  <div className="inputs px-4 py-1 col-md-3">
                    <div>Car Model</div>
                    <div>
                      <input
                        className="input-text form-control-plaintext"
                        type="text"
                        placeholder="Enter car model"
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>
                  {/* <div className="inputs px-4 py-1 d-flex flex-column flex-md-row gap-4 col-md-2">
                    <div>
                      <div className=" border-bottom-2 border-dark">
                        Rental Start Date
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
                        Duration
                      </div>
                      <div>
                        <input
                          className="input-text form-control-plaintext text-secondary fs-smaller overflow-auto"
                          type="number"
                          placeholder="1 Day(s)"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="inputs px-4 py-1 col-md-3">
                    <div>Pickup Time</div>
                    <div class="row">
                      <div class="col-12">
                        <input
                          className="input-text form-control-plaintext fs-smaller"
                          type="text"
                          placeholder="4:30 PM"
                        />
                      </div>
                    </div>
                  </div> */}
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

function Filter({
  passengerCapacity,
  handlePassengerCapacityChange,
  handleCarTypeChange,
}) {
  return (
    <div>
      <div className="filter-head d-flex flex-wrap p-2 my-4 px-4 justify-content-start align-items-center gap-2">
        <div className=" h6 d-flex align-items-center">Filter :</div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
              Passenger Capacity
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {[1, 2, 3, 4, 5, 6].map((capacity) => (
                <Dropdown.Item
                  key={capacity}
                  onClick={() => handlePassengerCapacityChange(capacity)}
                >
                  {capacity} pax
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
              Car Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCarTypeChange("")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCarTypeChange("Sedan")}>
                Sedan
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCarTypeChange("Van")}>
                Van
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleCarTypeChange("Motorcycle")}>
                Motorcycle
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

function CarList({ car }) {
  const details = `${car.luggageCapacity}, ${car.seats} Seats, ${
    car.service
  }, ${car.withDriver ? "With Driver" : "Without Driver"}`;

  return (
    <div className="list-container container-fluid my-2 rounded">
      <div className="row p-2 rounded d-flex flex-wrap">
        <div className="col-md col-12">
          <div className="row px-2 d-flex flex-wrap">
            <div className="col-md-8 col-12">
              <div className="list-lg-img rounded">
                <img
                  src={require(`./images/${car.images[0]}`)}
                  alt={`Hotel ${car.model} Image 1`}
                  className="img-fluid rounded mb-2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="row px-2">
                <div className="col-12 list-sm-img rounded mb-2">
                  <img
                    src={require(`./images/${car.images[1]}`)}
                    alt={`Hotel ${car.model} Image 2`}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="col-12 list-sm-img rounded">
                  <img
                    src={require(`./images/${car.images[2]}`)}
                    alt={`Hotel ${car.model} Image 3`}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col list-all-details">
          <div className="col-12 row car-detail d-flex justify-content-between align-items-center">
            <div className="col-md-8 car-list-name">{car.model}</div>
            <div className="col-md-4 car-list-name text-md-center">
              {car.price}
            </div>
          </div>
          <div className="col-12 row list-car-detail d-flex justify-content-start align-items-center gap-2">
            <div className="col-md-5 col text-dark">{car.luggageCapacity}</div>
            <div className="col-md-5 col text-dark">{car.seats} Seats</div>
          </div>
          <div className="col-12 car-list-detail row d-flex justify-content-between align-items-center">
            <div className="col-md-8 py-2">
              <div className="col-md-12 list-service">{car.service}</div>
              <div className=" col-md-12">
                {car.withDriver ? "With Driver" : "Without Driver"}
              </div>
            </div>
            <div className="col-md-4 col-12">
              <Link
                to={{
                  pathname: "/checkout",
                  state: { booking: car, details: details },
                }}
                style={{ textDecoration: "none" }}
              >
                <div className="btn-book px-4 py-2 text-white text-center rounded">
                  BOOK NOW
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarRent;
