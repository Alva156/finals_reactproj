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
    images: [
      "hanbok1.jpg",
      "hanbok2.jpg",
      "hanbok3.jpg",
      "hanbok4.jpg",
      "hanbok5.jpg",
      "hanbok6.jpg",
      "hanbok7.jpg",
    ],
    wycs: "Head to the Hanbok rental store and choose between a traditional and premium Hanbock. Get dressed with help from Hanbock specialists and upgrade to include hairstyling suitable for the Hanbok and accessories. Once you're ready, decide where you want to go. Entry to Gyeongbokgung Palace, Changdeokgung Palace, Gyeonghuigung Palace, Deoksugung Palace, and Changgyeonggung Palace entry is free to visitors wearing a Hanbok. Admire the stunning architecture or walk around the gardens.",
    type: "Attractions",
  },
  {
    id: 2,
    bookingType: "Activity",
    model: "Hangang Park Picnic",
    address: "387 Apgujeong-dong, Gangnam-gu, Seoul, South Korea",
    price: "₩100,000",
    images: [
      "hangang1.jpg",
      "hangang2.jpg",
      "hangang3.jpg",
      "hangang4.jpg",
      "hangang5.jpg",
      "hangang6.jpg",
      "hangang7.jpg",
    ],
    wycs: "The Hangang River, a piece of nature within the city, is a popular recreational area for Seoulites. There are many parks along the river, making it an ideal place for a picnic, as well as other activities such as watching the fountain show. Why not spend a day like a local and enjoy everything by the river?",
    type: "Attractions",
  },
  {
    id: 3,
    bookingType: "Activity",
    model: "Suwon Hwaseong Fortress and Folk Village Day Tour",
    address:
      "90 Minsokchon-ro, Giheung-gu, Yongin-si, Gyeonggi-do, South Korea",
    price: "₩100,000",
    images: [
      "suwon1.jpg",
      "suwon2.jpg",
      "suwon3.jpg",
      "suwon4.jpg",
      "suwon5.jpg",
      "suwon6.jpg",
      "suwon7.jpg",
    ],
    wycs: "Spend a fun-filled day away from the city on 7- to 8-hour tour to Korean Folk Village and Suwon Hwaseong Fortress. Perfect for families or friend groups who can’t seem to agree on what to do, both destinations offer a wide range of activities to appeal to all interests. In addition to poking around the traditional houses, you can watch horseback martial arts and a traditional wedding ceremony. Later reach Suwon Hwaseong Fortress and walk along the fortress walls and visit the gates and watchtowers.",
    type: "Attractions",
  },
  {
    id: 4,
    bookingType: "Activity",
    model: "DMZ, 3rd Tunnel, and Suspension Bridge Guided Tour",
    address: "210-358, Je3ttanggul-ro, Gunnae-myeon, Paju-si, Gyeonggi-do",
    price: "₩100,000",
    images: [
      "dmz1.jpg",
      "dmz2.jpg",
      "dmz3.jpg",
      "dmz4.jpg",
      "dmz5.jpg",
      "dmz6.jpg",
      "dmz7.jpg",
    ],
    wycs: "Immerse yourself in the history and highlights of the DMZ on a full-day group tour from Seoul. A well-paced itinerary includes visits to the demilitarized zone's most significant locations, including Dora Observatory, Dorasan Station, Imjingak Park, and the Third Tunnel. This excursion also takes you to the often-missed Gamaksan Chulleong Suspension Bridge. Every step of the way, you'll enjoy engaging commentary on the conflict between the two Koreas.",
    type: "Tours",
  },
  {
    id: 5,
    bookingType: "Activity",
    model: "Bukchon Village Tour",
    address: "Gyedong-gil, Jongno District, Seoul, South Korea",
    price: "₩100,000",
    images: [
      "bukchon1.jpg",
      "bukchon2.jpg",
      "bukchon3.jpg",
      "bukchon4.jpg",
      "bukchon5.jpg",
      "bukchon6.jpg",
      "bukchon7.jpg",
    ],
    wycs: "Bukchon Hanok Village is a must-visit tourist spot in Seoul, South Korea. This traditional village offers a glimpse into the city's rich cultural heritage. With its well-preserved hanok houses, narrow alleyways, and stunning views of the city, Bukchon Hanok Village provides a unique and immersive experience. Visitors can explore the traditional architecture, visit art galleries, and even try on traditional Korean clothing. Additionally, the village is conveniently located near other popular attractions such as Gyeongbokgung Palace and Changdeokgung Palace, making it easy to explore multiple sites in one trip. Don't miss the opportunity to immerse yourself in the charm and history of Bukchon Hanok Village.",
    type: "Tours",
  },
  {
    id: 6,
    bookingType: "Activity",
    model: "Gwangjang Market Tour",
    address: "88 Changgyeonggung-ro, Jongno-gu, Seoul",
    price: "₩100,000",
    images: [
      "gwangjang1.jpg",
      "gwangjang2.jpg",
      "gwangjang3.jpg",
      "gwangjang4.jpg",
      "gwangjang5.jpg",
      "gwangjang6.jpg",
      "gwangjang7.jpg",
    ],
    wycs: "Gwangjang Market, Seoul’s first and oldest covered market, was originally the place to buy traditional Korean clothing items, such as hanbok. Though the market still specializes in textiles, it’s become one of Seoul’s biggest street food hot spots, where foodies can sample nearly any type of Korean cuisine under the same roof.",
    type: "Tours",
  },
  {
    id: 7,
    bookingType: "Activity",
    model: "CheongKwanJang SPA 1899 DONGINBI",
    address: "B2, KT&G Tower, 1002, Daechi-dong, Gangnam-gu, Seoul",
    price: "₩100,000",
    images: [
      "cheong1.jpg",
      "cheong2.jpg",
      "cheong3.jpg",
      "cheong4.jpg",
      "cheong5.jpg",
      "cheong6.jpg",
      "cheong7.jpg",
    ],
    wycs: "Take a few hours out of your day to escape the rush of the city with a visit to SPA 1899 in Daechi, a local spa known for its signature Red Ginseng treatments. Offering a variety of options that can accommodate your individual needs, you can choose from treatments that focus on different parts of your body, such as facial massages, full-body treatments, and more. Feel all your stress melt away with every touch from your skilled massage therapists, carefully undoing all the knots and removing tension from your body. Some of their must-try treatments include the slow-aging, balancing, and full care options, each using Red Ginseng that rejuvenates your body both inside and out!",
    type: "Spa",
  },
  {
    id: 8,
    bookingType: "Activity",
    model: "Sulwhasoo Balance Spa",
    address: "4, 18 Dosan-daero 45-gil, Gangnam-gu, Seoul, South Korea",
    price: "₩100,000",
    images: [
      "sul1.jpg",
      "sul2.jpg",
      "sul3.jpg",
      "sul4.jpg",
      "sul5.jpg",
      "sul6.jpg",
      "sul7.jpg",
    ],
    wycs: "Sulwhasoo is popularly known as a Korean skincare brand, but did you know that they also have a spa place in Seoul? Sulwhasoo Balance Spa is one of Korea’s top spa destinations, as they provide treatments targeted for every part of the body. From massage treatments to scalp care, exfoliation, and moisturizing regimen, you can get a luxurious therapeutic experience at Sulwhasoo Balance Spa. ",
    type: "Spa",
  },
  {
    id: 9,
    bookingType: "Activity",
    model: "Han River Guided Night Cruise",
    address: "257, Gangbyeonbuk-ro, Seongdong-gu, Seoul",
    price: "₩100,000",
    images: [
      "han1.jpg",
      "han2.jpg",
      "han3.jpg",
      "han4.jpg",
      "han5.jpg",
      "han6.jpg",
      "han7.jpg",
    ],
    wycs: "Experience an enchanting evening party at Han River Park, an epicenter of the vibrant culture and nightlife of Seoul. Get a chance to relish various types of Korean alcohol, broadening your palate and cultural knowledge about JUDO ( Korean traditional drinking attitude ) with Korean munchies.",
    type: "Events",
  },
  {
    id: 10,
    bookingType: "Activity",
    model: "NANTA Show",
    address: "26 Myeongdong-gil, Jung-gu, Seoul, South Korea",
    price: "₩100,000",
    images: [
      "nanta1.jpg",
      "nanta2.jpg",
      "nanta3.jpg",
      "nanta4.jpg",
      "nanta5.jpg",
      "nanta6.jpg",
      "nanta7.jpg",
    ],
    wycs: "Watch Korea's longest-running comedy show, NANTA, and indulge in an energetic performance showcasing the country's rich culinary heritage. Immerse yourself in a unique musical journey with traditional samul nori, a captivating Korean percussion music. Experience the perfect blend of comedy, acrobatics, and martial arts, creating an unforgettable show.",
    type: "Events",
  },
  {
    id: 10,
    bookingType: "Activity",
    model: "K-pop Dance One-Day Class + Video Shooting Experience ",
    address:
      "Ktown4u coex Academy : 3rd floor, Coex Artium, 513 Yeongdong-daero, Gangnam-gu, Seoul",
    price: "₩100,000",
    images: [
      "kpop1.jpg",
      "kpop2.jpg",
      "kpop3.jpg",
      "kpop4.jpg",
      "kpop5.jpg",
      "kpop6.jpg",
      "kpop7.jpg",
    ],
    wycs: "Make your K-POP dreams a reality and enjoy the unique curriculum offered by Ktown4u, which sets it apart from other academies. Explore the facilities of COEX Artium, discover various attractions, and immerse yourself in the classes held by trainers who used to be idols. Experience all the joys of K-POP at Ktown4u, which has also been featured on a famous Korean show.",
    type: "Recreational Sports",
  },
  {
    id: 11,
    bookingType: "Activity",
    model: "Guided Tour - National Museum of Korea",
    address: "137 Seobinggo-ro, Yongsan-gu, Seoul",
    price: "₩100,000",
    images: [
      "nat1.jpg",
      "nat2.jpg",
      "nat3.jpg",
      "nat4.png",
      "nat5.png",
      "nat6.jpg",
      "nat7.jpg",
    ],
    wycs: "Not only is the National Museum of Korea one of the best museums in the country, it’s also free. Offering a sweeping introduction to Korean art, culture, and history, the museum houses more than 150,000 artifacts with around 12,000 on display. There’s always plenty to see, even if you’ve been to the museum before.",
    type: "Museum",
  },
  {
    id: 12,
    bookingType: "Activity",
    model: "Alive Museum",
    address: "12 Insadong-gil, Jongno District, Seoul, South Korea",
    price: "₩100,000",
    images: [
      "alive1.jpg",
      "alive2.jfif",
      "alive3.jpg",
      "alive4.jfif",
      "alive5.jpg",
      "alive6.jfif",
      "alive7.jpg",
    ],
    wycs: "Dive into Seoul's Alive Museum, where art springs to life. Unleash creativity, merge with the exhibits, and craft your unique masterpiece. Explore over 20 contemporary 'Trick Art' pieces and 50 parody works of famous art at Alive Museum in Insadong",
    type: "Museum",
  },
];

function Activities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [actType, setActType] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleActTypeChange = (type) => {
    setActType(type);
  };

  const filteredActivities = dummyActivities.filter((act) => {
    return (
      (!searchQuery ||
        act.model.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!actType || act.type === actType)
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
        <Filter handleActTypeChange={handleActTypeChange} />
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

function Filter({ handleActTypeChange }) {
  return (
    <div>
      <div className="filter-head d-flex flex-wrap p-2 my-4 px-4 justify-content-start align-items-center gap-2">
        <div className=" h6 d-flex align-items-center">Filter :</div>
        <div className="">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
              Activity Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleActTypeChange("")}>
                All
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleActTypeChange("Attractions")}>
                Attractions
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleActTypeChange("Tours")}>
                Tours
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleActTypeChange("Spa")}>
                Spa
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleActTypeChange("Events")}>
                Events
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleActTypeChange("Recreational Sports")}
              >
                Recreational Sports
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleActTypeChange("Museum")}>
                Museum
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

function ActList({ act }) {
  return (
    <div className="list-container container-fluid my-2 rounded">
      <div className="row p-2 rounded d-flex flex-wrap">
        <div className="col-md col-12">
          <div className="row px-2 d-flex flex-wrap">
            <div className="col-md-8 col-12">
              <div className="list-lg-img rounded">
                <img
                  src={require(`./images/${act.images[0]}`)}
                  alt={`Hotel ${act.model} Image 1`}
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
                    src={require(`./images/${act.images[1]}`)}
                    alt={`Hotel ${act.model} Image 2`}
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
                    src={require(`./images/${act.images[2]}`)}
                    alt={`Hotel ${act.model} Image 3`}
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
