import Card from "react-bootstrap/Card";
import { FaSearch } from "react-icons/fa";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";
import NavbarNew from "./NavBarNew";
import axios from "axios";
import { Link } from "react-router-dom";

const dummyHotels = [
  {
    bookingType: "Hotel",
    address: "30 Eulji-ro, Jung-gu",
    model: "Lotte Hotel Seoul",
    price: "₩10,000",
    accomodation:
      "LOTTE HOTEL SEOUL is one of Korea’s finest 5-star luxury hotels and is conveniently located in the heart of Seoul’s central business district near Myeongdong. The Main Tower and Executive Tower has a total of 1,015 guest rooms that were designed by four world-class interior design firms.",
    facilities:
      "✔ Fitness Center ✔ Hotel Sauna ✔ Sulwhasoo Spa ✔ Swimming Pool ✔ Golf Driving Range ✔ Business Center ✔ Hotel Museum ✔ Shopping Arcade",
    allFacilities:
      "Fitness center, Garden, Hot tub, Massage, Spa/sauna, Steamroom, Swimming pool [indoor], Ticket services, Tours",
    reviews: "",
    location: "",
    nearbyPlaces: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
    popularInArea: [
      "Namdaemun Market",
      "Insadong",
      "Bukchon Hanok Village",
      "Gyeongbokgung Palace",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  // {
  //   bookingType: "Hotel",
  //   address: "179 Itaewon-ro, Yongsan-gu",
  //   model: "Hamilton Hotel",
  //   price: "₩10,000",
  //   accomodation:
  //     "Hamilton Hotel is a four-star modern hotel, built in 1973, a total of 162 rooms. Rooms comfortable and clean, decor is simple and practical. Hamilton Hotel is located in Seoul Itaewon shopping center. Itaewon Gardens, Railway Station No. 6 line on the entrance of the hotel, very convenient for transportation. All rooms are equipped with very high-speed Internet access, guest access to do business or shopping, you can stay at home, both comfortable and convenient.",
  //   facilities:
  //     "✔ Fitness Center ✔ Hotel Sauna ✔ Sulwhasoo Spa ✔ Swimming Pool ✔ Golf Driving Range ✔ Business Center ✔ Hotel Museum ✔ Shopping Arcade",
  //   reviews: "",
  //   location: "",
  //   nearbyPlaces: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   popularInArea: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   images: [
  //     "lotte1.jpg",
  //     "lotte2.jpg",
  //     "lotte3.jpg",
  //     "lotte4.jpg",
  //     "lotte5.jpg",
  //     "lotte6.jpg",
  //     "lotte7.jpg",
  //   ],
  //   seats: "5",
  //   rating: "5",
  // },
  // {
  //   bookingType: "Hotel",
  //   address: "130 Toegye-ro, Jung-gu",
  //   model: "Hotel Prince Seoul",
  //   price: "₩10,000",
  //   accomodation:
  //     "Hotel Prince Seoul is conveniently situated opposite Myeongdong shopping street, 10 metres from Myeongdong Subway Station. Housed in a majestic building, it provides rooms with free internet access. Prince Seoul Hotel is 900 metres from popular Namdaemun Market and 1.4 km from the traditional arts and craft district of Insadong. Incheon International Airport is 60 km away.",
  //   facilities:
  //     "✔ Fitness Center ✔ Hotel Sauna ✔ Sulwhasoo Spa ✔ Swimming Pool ✔ Golf Driving Range ✔ Business Center ✔ Hotel Museum ✔ Shopping Arcade",
  //   reviews: "",
  //   location: "",
  //   nearbyPlaces: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   popularInArea: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   images: [
  //     "lotte1.jpg",
  //     "lotte2.jpg",
  //     "lotte3.jpg",
  //     "lotte4.jpg",
  //     "lotte5.jpg",
  //     "lotte6.jpg",
  //     "lotte7.jpg",
  //   ],
  //   seats: "5",
  //   rating: "5",
  // },
  // {
  //   bookingType: "Hotel",
  //   address: "26-10 Namdaemun-ro 1-gil, Jung-gu",
  //   model: "Hotel Irene City",
  //   price: "₩10,000",
  //   accomodation:
  //     "Conveniently situated 350 metres from City Hall subway station, Hotel Irene City offers minimalist rooms with flat-screen cable TVs and free Wi-Fi. It has a 24-hour front desk and laundry facilities. Irene City Hotel is a 15-minute walk from the trendy shopping district of Myeongdong. It is an 8-minute drive from Insadong cultural district and an 8-minute walk from popular Namdaemun Market.",
  //   facilities:
  //     "✔ Fitness Center ✔ Hotel Sauna ✔ Sulwhasoo Spa ✔ Swimming Pool ✔ Golf Driving Range ✔ Business Center ✔ Hotel Museum ✔ Shopping Arcade",
  //   reviews: "",
  //   location: "",
  //   nearbyPlaces: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   popularInArea: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   images: [
  //     "lotte1.jpg",
  //     "lotte2.jpg",
  //     "lotte3.jpg",
  //     "lotte4.jpg",
  //     "lotte5.jpg",
  //     "lotte6.jpg",
  //     "lotte7.jpg",
  //   ],
  //   seats: "5",
  //   rating: "5",
  // },
  // {
  //   bookingType: "Hotel",
  //   address: "58 Sejong-daero, Jung-gu",
  //   model: "Fraser Place Namdaemun Seoul",
  //   price: "₩10,000",
  //   accomodation:
  //     "Located right next to Namdaemun Square, Fraser Place Namdaemun Seoul provides easy access to Seoul’s popular attractions. WiFi is available for free throughout the property. The rooms at Fraser Place Namdaemun Seoul Seoul are beautifully decorated and fitted with fine-quality furnishings. Rooms come with an iPod docking station and a flat-screen TV.",
  //   facilities:
  //     "✔ Fitness Center ✔ Hotel Sauna ✔ Sulwhasoo Spa ✔ Swimming Pool ✔ Golf Driving Range ✔ Business Center ✔ Hotel Museum ✔ Shopping Arcade",
  //   reviews: "",
  //   location: "",
  //   nearbyPlaces: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   popularInArea: ["Citistar Mall", "Grevin Museum", "Seoul City Hall"],
  //   images: [
  //     "lotte1.jpg",
  //     "lotte2.jpg",
  //     "lotte3.jpg",
  //     "lotte4.jpg",
  //     "lotte5.jpg",
  //     "lotte6.jpg",
  //     "lotte7.jpg",
  //   ],
  //   seats: "5",
  //   rating: "5",
  // },
  {
    bookingType: "Hotel",
    address: "72 Digital-ro 32-gil, 구로제3동 Guro-gu, Seoul, South Korea",
    model: "Four Points by Sheraton",
    price: "₩10,000",
    accomodation:
      "Settled in the heart of Digital Venture Valley in Guro-gu, Southwest of Seoul; walking distance from Guro Digital Complex station, Seoul Subway Line 2 which links to major areas in Seoul with convenient accessibility. Representing as transportation hub with Airport Limousine station at the entrance of the hotel,public transportation, easy access to major Seoul Subway.",
    facilities:
      "✔ Concierge ✔ Currency exchange ✔ Newspaper ✔ Non-smoking hotel ✔ First aid kit ✔ Umbrella ✔ 24-hour check-in ✔ 24-hour front desk",
    allFacilities:
      "Free parking, Free internet, Fitness Center with Gym / Workout Room, Coffee shop, Kids stay free, Airport transportation, Conference facilities, Banquet room, Parking, Wifi, Restaurant, Breakfast available, Breakfast buffet, Meeting rooms",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "Wolhwa Gogi - Bolamae Jikyeongjeom",
      "Street Ga Ne Fire Chickens' Feet",
      "Embassy Of Sausage Stew In Guro",
      "Two and Di",
      "Re the Ra",
    ],
    popularInArea: [
      "O du Mountain Buckwheat Ga",
      "Han Ok House",
      "Sikgaek Village",
      "Pollack Soup 7Dae3",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  {
    bookingType: "Hotel",
    address:
      "139, Toegye-ro, Jung-gu, Myeong-dong, Seoul, South Korea, 100-861",
    model: "Hotel Skypark",
    price: "₩10,000",
    accomodation:
      "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Myeong-dong, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Gyeongbokgung Palace. This 3-star property is packed with in-house facilities to improve the quality and joy of your stay.",
    facilities:
      "✔ Front desk [24-hour] ✔ Airport transfer ✔ Free Wi-Fi in all rooms! ✔ Luggage storage ✔ Check-in/out [private] ✔ Laundry service ✔ Safety deposit boxes ✔ Tours",
    allFacilities:
      "Air conditioning in public area, Concierge, Daily housekeeping, Dry cleaning, Elevator, Facilities for disabled guests, Heating in public area, Laundry service, Luggage storage, Meeting/banquet facilities, Safety deposit boxes, Smoke-free property, Smoking area, Xerox/fax in business center",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "Saejong Gallery",
      "YH.KIM",
      "Dream Cosme",
      "3D Black Art Museum",
      "Chunjiyun Spa",
    ],
    popularInArea: [
      "Myeong-Dong Walking Street",
      "Namdaemun Market",
      "N Seoul Tower",
      "Pollack Soup 7Dae3",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  {
    bookingType: "Hotel",
    address: "97 Saemoonanro, Jongno, Gwanghwamun, Seoul, South Korea, 690-180",
    model: "Four Seasons Hotel",
    price: "₩10,000",
    accomodation:
      "Just steps from Gwanghwamun Plaza, Four Seasons Hotel Seoul boasts commanding city views and features 5 in-house dining, a state-of-the art fitness facilities and traditional Korean saunas. The royal Gyeongbokgung Palace, Sejong Art Center, Cheonggyecheon Stream and the city hall are all within a 10-minute walk from the luxurious 5-star hotel.",
    facilities:
      "✔ Fitness center ✔ Game room ✔ Garden ✔ Hot tub ✔ Massage ✔ Pool with view ✔ Spa/sauna ✔ Swimming pool [indoor]",
    allFacilities:
      "Air conditioning in public area, Cash withdrawal, Concierge, Contactless check-in/out, Currency exchange, Daily housekeeping, Doorman, Dry cleaning, Elevator, Facilities for disabled guests, Fireplace, Food delivery",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "Saejong Gallery",
      "Cuvid",
      "Dongwha Duty Free",
      "Admiral Yi Sun-Sin’s Statue",
      "King Sejong Story",
    ],
    popularInArea: [
      "Insadong",
      "Gyeongbokgung Palace",
      "Myeong-Dong Walking Street",
      "Namdaemun Market",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  {
    bookingType: "Hotel",
    address:
      "19, Namdaemun-ro 7-gil, Jung-gu, Jung-Gu, 10456 Seoul, South Korea",
    model: "Crown Park Hotel in Seoul",
    price: "₩10,000",
    accomodation:
      "Open from October 2015, Crown Park Hotel is located under a 5-minute walk from the popular Myeongdong shopping area and Lotte Department Store. The hotel boasts 204 modern guest rooms, business centre, fitness centre and all-day dining at the on-site restaurant for guest’s convenience.",
    facilities:
      "✔ Air conditioning ✔ Non-smoking throughout ✔ Wake-up service ✔ Heating ✔ Lift ✔ Family rooms ✔ Non-smoking rooms ✔ Wake up service/Alarm clock",
    allFacilities:
      "Concierge service, Luggage storage, Tour desk, Currency exchange, 24-hour front desk, Fire extinguishers, CCTV in common areas, Smoke alarms",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "3D Black Art Museum",
      "Deoksugung Palace",
      "Cheonggyecheon",
      "Cheonggyecheon",
      "Changdeokgung Palace",
    ],
    popularInArea: [
      "Seoul Museum of Art",
      "Art Center Nabi",
      "Berlin Square",
      "N Seoul Tower",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  {
    bookingType: "Hotel",
    address:
      "49, Insadong-gil, Myeongdong, Jongno-gu, Insadong, Seoul, South Korea, 03145",
    model: "Nine Tree Premier Hotel",
    price: "₩10,000",
    accomodation:
      "Located in Seoul, 60 metres from Jogyesa Temple, Nine Tree Premier Hotel Insadong features air-conditioned rooms and a fitness centre. Among the facilities at this property are a business centre and a concierge service, along with free WiFi throughout the property. The accommodation provides a 24-hour front desk, a shared lounge and currency exchange for guests.",
    facilities:
      "✔ Air conditioning in public area ✔ Concierge ✔ Contactless check-in/out ✔ Convenience store ✔ Currency exchange ✔ Daily housekeeping ✔ Dry cleaning ✔ Facilities for disabled guests",
    allFacilities:
      "Concierge service, Luggage storage, Tour desk, Currency exchange, 24-hour front desk, Fire extinguishers, CCTV in common areas, Smoke alarms",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "Kyungin Museum of Fine Art",
      "Savina Museum",
      "Topgoal Art",
      "Beautiful Tea Museum",
      "Unhyeongung",
    ],
    popularInArea: [
      "Bosingak Pavilion",
      "Arario Museum in Space",
      "Tapgol Park",
      "Bukchon Hanok Village",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  {
    bookingType: "Hotel",
    address: "13, Myeongdong 7-gil, Jung-Gu, Jung-Gu, 04534 Seoul, South Korea",
    model: "Hotel 28 in Myeongdong",
    price: "₩10,000",
    accomodation:
      "Hotel28 Myeongdong is located within a 7-minute walk from Myeongdong Station (Line 4) and Euljiro 1-ga Station (Line 2). The hotel is about 3-minute walk away from Noon Square Mall and Myeongdong Art Theatre. Incheon International Airport is an hour's drive from the accommodation. There is an airport limousine bus stop, located 80 metres from the hotel.",
    facilities:
      "✔ Air conditioning ✔ Non-smoking throughout ✔ Heating ✔ Soundproofing ✔ Soundproof rooms ✔ Lift ✔ Facilities for disabled guests ✔ Facilities for disabled guests",
    allFacilities:
      "Daily housekeeping, Concierge service, Luggage storage, Fax/photocopying, Laundry, Wake up service/Alarm clock, 24-hour front desk",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "T.um - SK Telecom Ubiquitous Museum",
      "Korea Postage Stamp Museum",
      "Grevin Seoul Museum",
      "Hwangudan Altar",
      "3D Black Art Museum",
    ],
    popularInArea: [
      "Jongno Tower",
      "Seoul Animation Center",
      "Deoksugung Palace",
      "Changdeokgung Palace",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
  {
    bookingType: "Hotel",
    address:
      "663, Gonghangdae-ro, Gangseo-gu, Gangseo-Gu, 07557 Seoul, South Korea",
    model: "Golden Seoul Hotel",
    price: "₩10,000",
    accomodation:
      "Featuring 3 dining options, Golden Seoul Hotel is a modern property with elegantly furnished guest rooms with a river or city views. The property is located just 9 km from Gimpo International Airport. Guests also enjoy free Wi-Fi access at all areas.",
    facilities:
      "✔ Air conditioning ✔ Non-smoking throughout ✔ Wake-up service ✔ Heating ✔ Private entrance ✔ Carpeted ✔ Soundproof rooms ✔ Facilities for disabled guests",
    allFacilities:
      "Private check-in/check-out, Concierge service, ATM/cash machine on site, Luggage storage, Currency exchange, 24-hour front desk",
    reviews: "",
    location: "",
    nearbyPlaces: [
      "Jungang Mart",
      "Ewha Medical Center",
      "Ewha Womans University Mokdong Hospital",
      "Sukyonhwa Skin Care",
      "Hyundai Department Store Mokdong",
    ],
    popularInArea: [
      "The War Memorial of Korea",
      "Namdaemun Market",
      "Myeong-Dong Walking Street",
      "National Museum of Korea",
    ],
    images: [
      "lotte1.jpg",
      "lotte2.jpg",
      "lotte3.jpg",
      "lotte4.jpg",
      "lotte5.jpg",
      "lotte6.jpg",
      "lotte7.jpg",
    ],
    seats: "5",
    rating: "5",
  },
];

function Hotel() {
  const [hotels, setHotels] = useState([]);
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

  const filteredHotels = dummyHotels.filter(
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
            <div className="list-lg-img col-md-8 rounded">
              <img
                src={require(`./images/${hotel.images[0]}`)}
                alt={`Hotel ${hotel.model} Image 1`}
                className="img-fluid rounded mb-2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="col-md-4">
              <div className="col-12 list-sm-img rounded mb-2">
                <img
                  src={require(`./images/${hotel.images[1]}`)}
                  alt={`Hotel ${hotel.model} Image 3`}
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
                  src={require(`./images/${hotel.images[2]}`)}
                  alt={`Hotel ${hotel.model} Image 3`}
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
          <div className="col-12 row list-detail d-flex justify-content-center align-items-center">
            <div className="col-md-9 list-name">{hotel.model}</div>
            <div className="col-md-3 h6">({hotel.rating} stars)</div>
          </div>
          <div className="col-12 list-detail">
            <div className="col-12 py-3 list-loc">
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
                <div className="btn-book px-4 py-2 text-white text-center rounded">
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
