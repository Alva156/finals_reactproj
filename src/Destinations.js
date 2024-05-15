import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Modal from "react-bootstrap/Modal";
import NavbarNew from "./NavBarNew";

const dummyDesinations = [
  {
    region: "Myeongdong",
    destinations: [
      {
        name: "N Seoul Tower",
        description:
          "The N Seoul Tower, officially the YTN Seoul Tower and commonly known as Namsan Tower or Seoul Tower, is a communication and observation tower located on Namsan Mountain in central Seoul, South Korea. The 236-meter-tall tower marks the second highest point in Seoul and is considered a local landmark.",
        address: "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Gyeongbokgung Palace",
        description:
          "Gyeongbokgung, also known as Gyeongbokgung Palace, was the main royal palace of the Joseon dynasty. Built in 1395, it is located in northern Seoul, South Korea. The largest of the Five Grand Palaces built by the Joseon dynasty, Gyeongbokgung served as the home of the royal family and the seat of government.",
        address: "161 Sajik-ro, Jongno District, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "National Museum of Korea",
        description:
          "The National Museum of Korea is the flagship museum of Korean history and art in South Korea. Since its establishment in 1945, the museum has been committed to various studies and research activities in the fields of archaeology, history, and art, continuously developing a variety of exhibitions and education programs.",
        address: "137 Seobinggo-ro, Yongsan-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Gangnam",
    destinations: [
      {
        name: "Bongeunsa Temple",
        description:
          "Traditional Korean Buddhist temple complex with a 23 m Maitreya Buddha statue.",
        address: "531 Bongeunsa-ro, Gangnam-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "COEX Aquarium",
        description:
          "The COEX Aquarium is an aquarium located within the Starfield COEX Mall in the Gangnam District of Seoul, South Korea. The aquarium opened in 2000.",
        address: "513 Yeongdong-daero, Gangnam-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Apgujeong",
    destinations: [
      {
        name: "Garosu-gil (Tree-lined Street)",
        description:
          "Garosu-gil is a fashionable street lined with trees, boutiques, cafes, and galleries. It's a popular spot for shopping, dining, and people-watching.",
        address: "Sinsa-dong, Gangnam-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Gangnam Rodeo Street",
        description:
          "Known for its upscale boutiques and luxury brands, Gangnam Rodeo Street is a prime destination for fashion enthusiasts and trendsetters.",
        address: "417 Apgujeong-ro, Gangnam-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Gangnam Style Horse Dancing Statue",
        description:
          "This statue pays homage to the global hit song Gangnam Style by Psy. Visitors can take photos with the iconic horse-riding dance pose.",
        address: "126 Apgujeong-ro, Gangnam-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Geumcheon District",
    destinations: [
      {
        name: "Gasan Digital Complex",
        description:
          "This sprawling electronics market offers a wide range of digital gadgets, appliances, and accessories at competitive prices.",
        address: "371-28 Gasan-dong, Geumcheon-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Gocheok Sky Dome",
        description:
          "As the largest indoor baseball stadium in South Korea, Gocheok Sky Dome hosts various sports events, concerts, and exhibitions throughout the year.",
        address: "430 Gyeongin-ro, Gocheok-dong, Guro-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Dongdaemun",
    destinations: [
      {
        name: "Dongdaemun Design Plaza (DDP)",
        description:
          "DDP is a major landmark known for its futuristic design and hosting various exhibitions, conferences, and cultural events. It's surrounded by shopping malls and is a hub for fashion, design, and technology.",
        address: "281 Eulji-ro, Jung-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Dongdaemun Market",
        description:
          "One of the largest wholesale and retail markets in South Korea, Dongdaemun Market offers a vast array of clothing, accessories, fabrics, and more, at affordable prices. ",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
  {
    region: "Hongdae",
    destinations: [
      {
        name: "Hongdae Street (Hongik University Street)",
        description:
          "Hongdae Street is a vibrant area filled with trendy shops, cafes, restaurants, and street performances. It's especially popular among young people and is known for its lively nightlife.",
        address: "407-9 Seogyo-dong, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
    ],
  },
];

function Destinations() {
  return (
    <div
      className="destinations-container"
      style={{
        backgroundImage: "url(/images/Home2.png)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hotel-search">
        <DestinationHead />
        <DestinationList />
      </div>
    </div>
  );
}

function DestinationHead() {
  return (
    <div>
      <div class="list-head d-flex p-2 text-white my-4 px-4">
        Choose from these well-known destinations
      </div>
    </div>
  );
}

function DestinationList() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="wrapper">
      <div className="accordion">
        {dummyDesinations.map((region, index) => (
          <div key={index} className="accord-item">
            <div
              className="accord-title d-flex justify-content-between"
              onClick={() => toggleAccordion(index)}
            >
              <div>{region.region}</div>
              <div className={expandedItem === index ? "rotate-icon" : ""}>
                {expandedItem === index ? (
                  <IoIosArrowUp style={{ fontSize: "25px" }} />
                ) : (
                  <IoIosArrowDown style={{ fontSize: "25px" }} />
                )}
              </div>
            </div>
            {expandedItem === index && (
              <div className="accord-content px-2">
                {region.destinations.map((destination, idx) => (
                  <div key={idx}>
                    <div className="list-container container-fluid my-2 rounded">
                      <div className="row  p-2 rounded d-flex flex-wrap">
                        <div className="col-md col-12 ">
                          <div className="row px-2 d-flex flex-wrap">
                            <div className="col-md-8 col-12">
                              <div className="list-lg-img rounded">
                                <img
                                  src={require(`./images/destinations/${destination.images[0]}`)}
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
                                    src={require(`./images/destinations/${destination.images[1]}`)}
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
                                    src={require(`./images/destinations/${destination.images[2]}`)}
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
                          <div className=" row list-detail d-flex justify-content-center align-items-center">
                            <div className="col-md-12  list-dest-name d-flex align-items-center">
                              {destination.name}
                            </div>
                            <div className="col-md-12  list-dest-description d-flex align-items-center">
                              {destination.description}
                            </div>
                            <div className="col-12 col list-dest-detail d-flex align-items-center">
                              <div
                                className="col-12 py-3 list-loc "
                                onClick={() => setModalShow(true)}
                              >
                                <FaLocationDot /> {destination.address}
                              </div>
                            </div>
                            <LocationModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LocationModal(props) {
  <script></script>;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Location</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="gmaps text-center d-flex align-items-center justify-content-center">
          Google Maps API
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Destinations;
