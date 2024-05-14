import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
// import React, { useEffect } from "react";
import NavbarNew from "./NavBarNew";

function Hotel() {
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
        <HotelHead />
        <HotelList />
        <HotelList />
        <HotelList />
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

function HotelHead() {
  return (
    <div>
      <div class="list-head d-flex p-2 text-white my-4 px-4">
        LOWEST PRICE GUARANTEED!
      </div>
    </div>
  );
}

function HotelList() {
  return (
    <div className="list-container container-fluid my-2 rounded">
      <div className="row p-2 rounded d-flex flex-wrap">
        <div className="col-md col-12 ">
          <div className="row px-2 d-flex flex-wrap">
            <div className="list-lg-img col-md-8 rounded">
              {/* LARGE IMG */}
            </div>
            <div className="col-md-4">
              <div
                className="col-12 list-sm-img rounded mb-2"
                style={{ marginBottom: "10px" }}
              >
                {/* SMALL IMG */}
              </div>
              <div className="col-12 list-sm-img rounded">
                {/* SMALL IMG */}
              </div>
            </div>
          </div>
        </div>
        <div className="col list-all-details">
          <div className="col-12 row list-detail d-flex justify-content-center align-items-center">
            <div className="col-md-9 list-name">HOTEL NAME</div>
            <div className="col-md-3 h6">(13 reviews)</div>
          </div>
          <div className="col-12 list-detail">
            <div className="col-12 py-3 list-loc">
              <FaLocationDot /> 5 Mapagbigay, Diliman, Lungsod Quezon, 1100
              Kalakhang Maynila
            </div>
            <div className="col-12">
              <div class="d-flex justify-content-start flex-wrap gap-2 text-white">
                <div className="tags">Amenities</div>
                <div className="tags">Amenities</div>
                <div className="tags">Amenities</div>
                <div className="tags">Amenities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
