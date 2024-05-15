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

const dummyActivities = [
  {
    id: 1,
    bookingType: "Activity",
    model: "Hanbok Rental with Gyeongbokgung Palace Visit",
    address: "161 Sajik-ro, Jongno District, Seoul, South Korea",
    price: "₩100,000",
    images: ["corolla1.png", "corolla2.png", "corolla3.png"],
    wycs: "Head to the Hanbok rental store and choose between a traditional and premium Hanbock. Get dressed with help from Hanbock specialists and upgrade to include hairstyling suitable for the Hanbok and accessories. Once you're ready, decide where you want to go. Entry to Gyeongbokgung Palace, Changdeokgung Palace, Gyeonghuigung Palace, Deoksugung Palace, and Changgyeonggung Palace entry is free to visitors wearing a Hanbok. Admire the stunning architecture or walk around the gardens.",
  },
  {
    id: 2,
    bookingType: "Activity",
    model: "Hangang Park Picnic",
    address: "387 Apgujeong-dong, Gangnam-gu, Seoul, South Korea",
    price: "₩100,000",
    images: ["corolla1.png", "corolla2.png", "corolla3.png"],
    wycs: "The Hangang River, a piece of nature within the city, is a popular recreational area for Seoulites. There are many parks along the river, making it an ideal place for a picnic, as well as other activities such as watching the fountain show. Why not spend a day like a local and enjoy everything by the river?",
  },
  {
    id: 3,
    bookingType: "Activity",
    model: "Suwon Hwaseong Fortress and Folk Village Day Tour",
    address:
      "90 Minsokchon-ro, Giheung-gu, Yongin-si, Gyeonggi-do, South Korea",
    price: "₩100,000",
    images: ["corolla1.png", "corolla2.png", "corolla3.png"],
    wycs: "Spend a fun-filled day away from the city on 7- to 8-hour tour to Korean Folk Village and Suwon Hwaseong Fortress. Perfect for families or friend groups who can’t seem to agree on what to do, both destinations offer a wide range of activities to appeal to all interests. In addition to poking around the traditional houses, you can watch horseback martial arts and a traditional wedding ceremony. Later reach Suwon Hwaseong Fortress and walk along the fortress walls and visit the gates and watchtowers.",
  },
];

function Activities() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredActivities = dummyActivities.filter((act) => {
    return (
      !searchQuery ||
      act.model.toLowerCase().startsWith(searchQuery.toLowerCase())
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
        <Search handleSearchChange={handleSearchChange} />
        {filteredActivities.map((act) => (
          <ActList key={act.id} act={act} />
        ))}
      </div>
    </div>
  );
}

function Search({ handleSearchChange }) {
  return (
    <div>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title className="px-3">
            <IoCarSport style={{ fontSize: "25px", marginRight: "5px" }} />
            ACTIVITIES
          </Card.Title>
          <hr className="m-0 mx-3"></hr>
          <Card.Body className="col">
            <div>
              <div className="container-fluid m-0">
                <div className="row gap-4">
                  <div className="inputs px-4 py-1 col-md-3">
                    <div>Activities</div>
                    <div>
                      <input
                        className="input-text form-control-plaintext"
                        type="text"
                        placeholder="Enter activity"
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

// function Filter() {
//   return (
//     <div>
//       <div className="filter-head d-flex flex-wrap p-2 my-4 px-4 justify-content-start align-items-center gap-2">
//         <div className=" h6 d-flex align-items-center">Filter :</div>
//         <div className="">
//           <Dropdown>
//             <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
//               Passenger Capacity
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               {[1, 2, 3, 4, 5, 6].map((capacity) => (
//                 <Dropdown.Item
//                   key={capacity}
//                   onClick={() => handlePassengerCapacityChange(capacity)}
//                 >
//                   {capacity} pax
//                 </Dropdown.Item>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//         <div className="">
//           <Dropdown>
//             <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
//               Car Type
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item onClick={() => handleCarTypeChange("")}>
//                 All
//               </Dropdown.Item>
//               <Dropdown.Item onClick={() => handleCarTypeChange("Sedan")}>
//                 Sedan
//               </Dropdown.Item>
//               <Dropdown.Item onClick={() => handleCarTypeChange("Van")}>
//                 Van
//               </Dropdown.Item>
//               <Dropdown.Item onClick={() => handleCarTypeChange("Motorcycle")}>
//                 Motorcycle
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </div>
//     </div>
//   );
// }

function ActList({ act }) {
  return (
    <div className="list-container container-fluid my-2 rounded">
      <div className="row p-2 rounded d-flex flex-wrap">
        <div className="col-md col-12">
          <div className="row px-2 d-flex flex-wrap">
            <div className="list-lg-img col-md-8 rounded">
              <img
                src={require(`./images/${act.images[0]}`)}
                alt={`Car ${act.model} Image 1`}
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
                  src={require(`./images/${act.images[1]}`)}
                  alt={`Car ${act.model} Image 1`}
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
                  src={require(`./images/${act.images[2]}`)}
                  alt={`Car ${act.model} Image 1`}
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
            <div className="col-md-8 car-list-name">{act.model}</div>
            <div className="col-md-4 car-list-name text-md-center">
              {act.price}
            </div>
          </div>
          <div className="col-12 row list-car-detail d-flex justify-content-start align-items-center gap-2">
            {/* <div className="col-md-5 col text-dark">{car.luggageCapacity}</div>
            <div className="col-md-5 col text-dark">{car.seats} Seats</div> */}
          </div>
          <div className="col-12 car-list-detail row d-flex justify-content-between align-items-center">
            <div className="col-md-8 py-2">
              {/* <div className="col-md-12 list-service">{car.service}</div>
              <div className=" col-md-12">
                {car.withDriver ? "With Driver" : "Without Driver"}
              </div> */}
            </div>
            <div className="col-md-4 col-12">
              <Link
                to={{
                  pathname: "/activitybooking",
                  state: { booking: act },
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

export default Activities;
