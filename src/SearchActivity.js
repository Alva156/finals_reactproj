import "./searchactivity.css"; // Import updated styles
import React, { useState } from "react";
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

const activities = [
  { name: "Sky Tower", price: "₱500", img: "https://via.placeholder.com/250" },
  {
    name: "Beach Tour",
    price: "₱1200",
    img: "https://via.placeholder.com/250",
  },
  { name: "Spa Day", price: "₱800", img: "https://via.placeholder.com/250" },
  {
    name: "Museum",
    price: "₱600",
    img: "https://via.placeholder.com/250",
  },
  { name: "Sky Tower", price: "₱500", img: "https://via.placeholder.com/250" },
  {
    name: "Beach Tour",
    price: "₱1200",
    img: "https://via.placeholder.com/250",
  },
  { name: "Spa Day", price: "₱800", img: "https://via.placeholder.com/250" },
  {
    name: "Museum",
    price: "₱600",
    img: "https://via.placeholder.com/250",
  },
];

const SearchActivity = () => {
  return (
    <div className="page-container">
      {/* Centered container */}
      <div className="search-activity-container">
        <Search /> {/* Responsive content */}
        <h2 className="activity-heading">Activity Categories</h2>{" "}
        {/* Left-aligned heading */}
        <div className="category-buttons">
          {" "}
          {/* Buttons layout */}
          <button className="category-btn">Attractions</button>
          <button className="category-btn">Tours</button>
          <button className="category-btn">Spa</button>
          <button className="category-btn">Events</button>
          <button className="category-btn">Recreational Sports</button>
          <button className="category-btn">Museum</button>
        </div>
        <div className="activity-grid">
          {" "}
          {/* Horizontal flex layout */}
          {activities.map((activity, index) => (
            <div key={index} className="activity-item">
              {" "}
              {/* Four in a row */}
              <img
                src={activity.img}
                alt={activity.name}
                className="activity-img" /* Image adjustment */
              />
              <div className="activity-info">
                {" "}
                {/* Left-aligned text */}
                <h3>{activity.name}</h3> {/* Activity name */}
                <p>Price: {activity.price}</p> {/* Activity price */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchActivity;
