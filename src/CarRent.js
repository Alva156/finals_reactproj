import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import React, { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import NavbarNew from "./NavBarNew";
import { Link } from "react-router-dom";

const dummyCars = [
  {
    id: 1,
    model: "Toyota Corolla",
    price: "₩100,000",
    luggageCapacity: "2 Baggages",
    seats: "4 Seats",
    service: "Basic Service",
    withDriver: true,
    images: ["corolla1.png", "corolla2.png", "corolla3.png"],
  },
  {
    id: 2,
    model: "Honda Civic",
    price: "₩120,000",
    luggageCapacity: "3 Baggages",
    seats: "5 Seats",
    service: "Premium Service",
    withDriver: false,
    images: ["civic1.png", "civic2.png", "civic3.png"],
  },
  {
    id: 3,
    model: "Hyundai Sonata",
    price: "₩110,000",
    luggageCapacity: "2 Baggages",
    seats: "5 Seats",
    service: "Standard Service",
    withDriver: true,
    images: ["sonata1.png", "sonata2.png", "sonata3.jpg"],
  },
];

function CarRent() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hotel-search">
        <Search />
        <Filter />
        {dummyCars.map((car) => (
          <CarList key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

function Search() {
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
                    <div>Rental Location</div>
                    <div>
                      <input
                        className="input-text form-control-plaintext"
                        type="text"
                        placeholder="Location blabla"
                      />
                    </div>
                  </div>
                  <div className="inputs px-4 py-1 d-flex flex-column flex-md-row gap-4 col-md-2">
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

function Filter() {
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
              <Dropdown.Item href="#/action-1">1 pax</Dropdown.Item>
              <Dropdown.Item href="#/action-2">2 pax</Dropdown.Item>
              <Dropdown.Item href="#/action-3">3 pax</Dropdown.Item>
              <Dropdown.Item href="#/action-1">4 pax</Dropdown.Item>
              <Dropdown.Item href="#/action-2">5 pax</Dropdown.Item>
              <Dropdown.Item href="#/action-3">6 pax</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
              Car Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Type 1</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Type 2</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Type 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

function CarList({ car }) {
  return (
    <div className="list-container container-fluid my-2 rounded">
      <div className="row p-2 rounded d-flex flex-wrap">
        <div className="col-md col-12">
          <div className="row px-2 d-flex flex-wrap">
            <div className="list-lg-img col-md-8 rounded">
              <img
                src={require(`./images/${car.images[0]}`)}
                alt={`Car ${car.model} Image 1`}
                className="img-fluid rounded mb-2"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <div className="col-md-4">
              <div
                className="col-12 list-sm-img rounded mb-2"
                style={{ marginBottom: "10px" }}
              >
                <img
                  src={require(`./images/${car.images[1]}`)}
                  alt={`Car ${car.model} Image 1`}
                  className="img-fluid rounded mb-2"
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
                  alt={`Car ${car.model} Image 1`}
                  className="img-fluid rounded mb-2"
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
        <div className="col list-all-details">
          <div className="col-12 row car-detail d-flex justify-content-between align-items-center">
            <div className="col-md-8 car-list-name">{car.model}</div>
            <div className="col-md-4 car-list-name text-md-center">
              {car.price}
            </div>
          </div>
          <div className="col-12 row list-car-detail d-flex justify-content-start align-items-center gap-2">
            <div className="col-md-5 col text-dark">{car.luggageCapacity}</div>
            <div className="col-md-5 col text-dark">{car.seats}</div>
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
                to={{ pathname: "/checkout", state: { car: car } }}
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
