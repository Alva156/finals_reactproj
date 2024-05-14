import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import NavbarNew from "./NavBarNew";
import { IoIosArrowDropright } from "react-icons/io";
import { BiColor } from "react-icons/bi";

function SeoulSeeker() {
  return (
    <div
      className="seoul-seeker-container"
      style={{
        backgroundImage: "url(/images/SeoulHomePage.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="seoulseeker-main-container d-flex justify-content-center align-items-center">
        <SeoulSeekerMain />
      </div>
    </div>
  );
}

function SeoulSeekerMain() {
  return (
    <div className="">
      <div className="d-flex row text-white justify-content-center">
        <div className="col-12 seoulseeker-main-text text-center">
          SeoulSeeker
        </div>
        <div className="seoulseeker-text col-12 text-center font-italic">
          Discover Seoul,
        </div>
        <div className="seoulseeker-text col-12 text-center mb-4 font-italic">
          Uncover Adventure
        </div>
        <div className="col d-flex justify-content-center text-center mt-4">
          <div className="seoulseeker-explore-text d-flex justify-content-between align-items-center px-4 py-2 text-center">
            EXPLORE <IoIosArrowDropright style={{ fontSize: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeoulSeeker;
