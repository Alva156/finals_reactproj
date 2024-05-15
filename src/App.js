import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarNew from "./NavBarNew";
import SeoulSeeker from "./SeoulSeeker";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.css";
import Booking from "./Booking";
import Destinations from "./Destinations";
import BookHispage from "./BookHispage";
import { useState } from "react";
import CarRent from "./CarRent";
import Checkoutpage from "./Checkoutpage";
import Hotel from "./Hotel";
import SupportFaqs from "./SupportFaqs";
import HotelBookingPage from "./HotelBookingPage";
import ActivityBookingPage from "./ActivityBookingPage";
import Activities from "./Activities";

const dummyHotels = [
  {
    id: "1",
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
  },
  {
    id: "2",
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
      "fps1.jpg",
      "fps2.jpg",
      "fps3.jpg",
      "fps4.jpg",
      "fps5.jpg",
      "fps6.jpg",
      "fps7.jpg",
    ],
    seats: "5",
  },
  {
    id: "3",
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
      "skypark1.jpg",
      "skypark2.jpg",
      "skypark3.jpg",
      "skypark4.jpg",
      "skypark5.jpg",
      "skypark6.jpg",
      "skypark7.jpg",
    ],
    seats: "5",
  },
  {
    id: "4",
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
      "fsh1.jpg",
      "fsh2.jpg",
      "fsh3.jpg",
      "fsh4.jpg",
      "fsh5.jpg",
      "fsh6.jpg",
      "fsh7.jpg",
    ],
    seats: "5",
  },
  {
    id: "5",
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
      "cph1.jpg",
      "cph2.jpg",
      "cph3.jpg",
      "cph4.jpg",
      "cph5.jpg",
      "cph6.jpg",
      "cph7.jpg",
    ],
    seats: "5",
  },
  {
    id: "6",
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
      "ntp1.jpg",
      "ntp2.jpg",
      "ntp3.jpg",
      "ntp4.jpg",
      "ntp5.jpg",
      "ntp6.jpg",
      "ntp7.jpg",
    ],
    seats: "5",
  },
  {
    id: "7",
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
      "h281.jpg",
      "h282.jpg",
      "h283.jpg",
      "h284.jpg",
      "h285.jpg",
      "h286.jpg",
      "h287.jpg",
    ],
    seats: "5",
  },
  {
    id: "8",
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
      "gsh1.jpg",
      "gsh2.jpg",
      "gsh3.jpg",
      "gsh4.jpg",
      "gsh5.jpg",
      "gsh6.jpg",
      "gsh7.jpg",
    ],
    seats: "5",
  },
];

export default function App() {
  const [registeredUsers, setRegisteredUsers] = useState([
    {
      email: "test@gmail.com",
      name: "Test",
      password: "1111",
    },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [hotels, setHotels] = useState(dummyHotels);

  const handleBooking = (booking) => {
    setBookingDetails((prev) => [...prev, booking]);
  };

  return (
    <Router>
      <div>
        <NavbarNew isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Switch>
          <Route path="/login">
            <Login
              registeredUsers={registeredUsers}
              setRegisteredUsers={setRegisteredUsers}
              setIsLoggedIn={setIsLoggedIn}
            />
          </Route>
          <Route
            path="/register"
            render={(props) => (
              <Register
                {...props}
                registeredUsers={registeredUsers}
                setRegisteredUsers={setRegisteredUsers}
              />
            )}
          />
          <Route path="/home">
            <Home isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/booking" component={Booking} />
          <Route
            path="/history"
            render={() => (
              <BookHispage bookingDetails={bookingDetails} hotels={hotels} />
            )}
          />

          <Route path="/destinations" component={Destinations} />
          <Route path="/carrent" component={CarRent} />
          <Route
            path="/checkout"
            render={(props) => (
              <Checkoutpage {...props} handleBooking={handleBooking} />
            )}
          />
          <Route
            path="/hotels"
            render={(props) => <Hotel {...props} hotels={hotels} />}
          />
          <Route path="/" exact component={SeoulSeeker} />
          <Route path="/support" component={SupportFaqs} />
          <Route path="/bookingpage" component={HotelBookingPage} />
          <Route path="/activities" component={Activities} />
          <Route path="/activitybooking" component={ActivityBookingPage} />
        </Switch>
      </div>
    </Router>
  );
}
