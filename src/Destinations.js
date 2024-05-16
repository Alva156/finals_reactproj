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
        images: ["gbk1.jpg", "gbk2.jpg", "gbk3.jpg"],
      },
      {
        name: "National Museum of Korea",
        description:
          "The National Museum of Korea is the flagship museum of Korean history and art in South Korea. Since its establishment in 1945, the museum has been committed to various studies and research activities in the fields of archaeology, history, and art, continuously developing a variety of exhibitions and education programs.",
        address: "137 Seobinggo-ro, Yongsan-gu, Seoul, South Korea",
        images: ["nmk1.jpg", "nmk2.jpg", "nmk3.jpg"],
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
        images: ["bon1.jpg", "bon2.jpg", "bon3.jpg"],
      },
      {
        name: "COEX Aquarium",
        description:
          "The COEX Aquarium is an aquarium located within the Starfield COEX Mall in the Gangnam District of Seoul, South Korea. The aquarium opened in 2000.",
        address: "513 Yeongdong-daero, Gangnam-gu, Seoul, South Korea",
        images: ["coex1.jpg", "coex2.bmp", "coex3.jpg"],
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
        images: ["hus1.jpg", "hus2.bmp", "hus3.jpg"],
      },
      {
        name: "Hongdae Free Market",
        description:
          "This market is held every Saturday near Hongik University Station Exit 9. It features various handmade crafts, artworks, and unique goods sold by local artists and artisans.",
        address: "83 Eoulmadang-ro, Mapo-gu, Seoul, South Korea",
        images: ["hfm1.jpg", "hfm2.jpg", "hfm3.jpg"],
      },
      {
        name: "Trick Eye Museum",
        description:
          "This museum offers an interactive experience where visitors can pose with 3D paintings and optical illusions, creating fun and memorable photo opportunities.",
        address: "20 Hongik-ro 3-gil, Mapo-gu, Seoul, South Korea",
        images: ["tem1.jpg", "tem2.jpg", "tem3.jpg"],
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
        images: ["gsgil 1.jpg", "gsgil 2.jpg", "gsgil 3.jpg"],
      },
      {
        name: "Gangnam Rodeo Street",
        description:
          "Known for its upscale boutiques and luxury brands, Gangnam Rodeo Street is a prime destination for fashion enthusiasts and trendsetters.",
        address: "417 Apgujeong-ro, Gangnam-gu, Seoul, South Korea",
        images: ["grs 1.jpg", "grs 2.jpg", "grs 3.jpg"],
      },
      {
        name: "Gangnam Style Horse Dancing Statue",
        description:
          "This statue pays homage to the global hit song Gangnam Style by Psy. Visitors can take photos with the iconic horse-riding dance pose.",
        address: "126 Apgujeong-ro, Gangnam-gu, Seoul, South Korea",
        images: ["gshd 1.jpg", "gshd 2.jpg", "gshd 3.jpg"],
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
        images: ["gdc 1.jpg", "gdc 2.JPG", "gdc 3.jpg"],
      },
      {
        name: "Gocheok Sky Dome",
        description:
          "As the largest indoor baseball stadium in South Korea, Gocheok Sky Dome hosts various sports events, concerts, and exhibitions throughout the year.",
        address: "430 Gyeongin-ro, Gocheok-dong, Guro-gu, Seoul, South Korea",
        images: ["gsd 1.jpg", "gsd 2.jpg", "gsd 3.jpg"],
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
        images: ["ddp 1.jpg", "ddp 2.jpg", "ddp 3.jpg"],
      },
      {
        name: "Dongdaemun Market",
        description:
          "One of the largest wholesale and retail markets in South Korea, Dongdaemun Market offers a vast array of clothing, accessories, fabrics, and more, at affordable prices. ",
        address: "289-21 Jongno 5-ga, Jongno-gu, Seoul, South Korea",
        images: ["dm 1.jpg", "dm 2.jpg", "dm 3.webp"],
      },
      {
        name: "Heunginjimun (Dongdaemun Gate)",
        description:
          "Also known as Great Eastern Gate, this historic gate is part of the Seoul Fortress Wall. It's a symbol of Seoul's ancient heritage and serves as a popular tourist attraction.",
        address: "Euljiro 7-ga, Jung-gu, Seoul, South Korea",
        images: ["hdg 1.jpg", "hdg 2.jpg", "hdg 3.jpg"],
      },
    ],
  },
  {
    region: "Gangbuk District",
    destinations: [
      {
        name: "Seoul World Cup Stadium",
        description:
          "This stadium was built for the 2002 FIFA World Cup and continues to host various sports events, concerts, and cultural festivals. It's surrounded by a park and recreational facilities.",
        address: "240 World Cup-ro, Mapo-gu, Seoul, South Korea",
        images: ["swc 1.jpg", "swc 2.jpg", "swc 3.jpg"],
      },
      {
        name: "Seoul Fortress Wall (Gangbuk Section)",
        description:
          "The Seoul Fortress Wall offers scenic hiking trails and historical sites. The Gangbuk section provides panoramic views of the cityscape and is dotted with ancient gates and pavilions.",
        address:
          "Various locations along the northern part of Seoul, South Korea",
        images: ["sfw 1.JPG", "sfw 2.jpg", "sfw 3.jpg"],
      },
      {
        name: "Gyeongbokgung Palace",
        description:
          "One of Seoul's grandest palaces, Gyeongbokgung Palace served as the main royal palace during the Joseon Dynasty. Visitors can explore its majestic architecture, beautiful gardens, and cultural exhibitions.",
        address: "161 Sajik-ro, Jongno-gu, Seoul, South Korea",
        images: ["gbk 1.jpg", "gbk 2.jpg", "gbk 3.jpg"],
      },
    ],
  },
  {
    region: "Bukchon Hanok Village",
    destinations: [
      {
        name: "Bukchon Hanok Village",
        description:
          "This traditional Korean village preserves the architecture and atmosphere of the Joseon Dynasty. Visitors can stroll through narrow alleys lined with well-preserved hanok (traditional Korean houses), art galleries, and tea houses.",
        address: "37, Gyedong-gil, Jongno-gu, Seoul, South Korea",
        images: ["bhv 1.jpg", "bhv 2.jpg", "bhv 3.jpg"],
      },
      {
        name: "Changdeokgung Palace and Huwon (Secret Garden)",
        description:
          "Another UNESCO World Heritage site, Changdeokgung Palace is renowned for its exquisite architecture and serene garden landscapes. The Secret Garden offers a tranquil escape from the bustling city.",
        address: "99 Yulgok-ro, Jongno-gu, Seoul, South Korea",
        images: ["cph 1.jpg", "cph 2.jpg", "cph 3.jpg"],
      },
    ],
  },
  {
    region: "Jongno district",
    destinations: [
      {
        name: "Jongmyo Shrine",
        description:
          "Jongmyo Shrine is a UNESCO World Heritage site dedicated to the ancestral rituals of the Joseon Dynasty. It's a serene place with beautiful architecture and tranquil gardens.",
        address: "157 Jong-ro, Jongno-gu, Seoul, South Korea",
        images: ["jong 1.jpg", "jong 2.png", "jong 3.jpg"],
      },
    ],
  },
  {
    region: "Itaewon",
    destinations: [
      {
        name: "Itaewon Street",
        description:
          "Itaewon Street is a melting pot of cultures, known for its diverse range of shops, restaurants, bars, and clubs. It's a popular destination for international residents and visitors seeking a multicultural experience.",
        address: "Itaewon-dong, Yongsan-gu, Seoul, South Korea",
        images: ["is1.png", "is2.png", "is3.png"],
      },
      {
        name: "N Seoul Tower (Namsan Tower)",
        description:
          "N Seoul Tower offers panoramic views of Seoul from atop Namsan Mountain. Visitors can enjoy the observation decks, restaurants, and love locks plaza.",
        address: "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
        images: ["nst1.jpg", "nst2.jpg", "nst3.jpg"],
      },
      {
        name: "Itaewon Antique Furniture Street",
        description:
          "This street is lined with shops selling antique furniture, home decor, and unique vintage items, making it a treasure trove for collectors and interior design enthusiasts.",
        address: "264-14 Itaewon 2(i)-dong, Yongsan-gu, Seoul, South Korea",
        images: ["its1.jpg", "its2.png", "its3.jpg"],
      },
    ],
  },
  {
    region: "Nowon",
    destinations: [
      {
        name: "Nowon Culture Street (Nowon Arthall)",
        description:
          "Nowon Culture Street features art galleries, theaters, cafes, and shops showcasing the local cultural scene. It's a hub for artists and performers to exhibit their work and engage with the community.",
        address: "605 Junggye-dong, Nowon-gu, Seoul, South Korea",
        images: ["ncs 1.jpg", "ncs 2.jpg", "ncs 3.jpg"],
      },
      {
        name: "Nowon Hangang Park",
        description:
          "Nowon Hangang Park is a riverside park along the Han River, offering green spaces, walking trails, sports facilities, and scenic views of the river and surrounding areas.",
        address: "547 Sanggye 4(sa)-dong, Nowon-gu, Seoul, South Korea",
        images: ["nhp 1.jpg", "nhp 2.jpg", "nhp 3.jpg"],
      },
      {
        name: "Nowon Station Underground Shopping Mall",
        description:
          "This underground shopping mall offers a wide range of shops, boutiques, and eateries, providing a convenient shopping experience for residents and visitors alike.",
        address: "757 Sanggye-dong, Nowon-gu, Seoul, South Korea",
        images: ["nsu1.png", "nsu2.png", "nsu3.png"],
      },
    ],
  },
  {
    region: "Seo District",
    destinations: [
      {
        name: "Seorae Village",
        description:
          'Seorae Village, also known as "Little France," is a charming neighborhood with French-inspired cafes, bakeries, and restaurants. It\'s a unique cultural enclave in Seoul.',
        address: "Seorae-ro, Banpo 4(sa)-dong, Seocho-gu, Seoul, South Korea",
        images: ["dsv 1.jpg", "dsv 2.jpg", "dsv 3.jpg"],
      },
      {
        name: "Seorae Island (Banpo Han River Park)",
        description:
          "Seorae Island is a scenic park located on the southern bank of the Han River. It offers picnic areas, walking trails, and recreational facilities with views of the river and city skyline.",
        address: "Banpo 2(i)-dong, Seocho-gu, Seoul, South Korea",
        images: ["dsi 1.jpg", "dsi 2.jpeg", "dsi 3.jpg"],
      },
      {
        name: "Express Bus Terminal Underground Shopping Mall",
        description:
          "This underground shopping mall is one of the largest in Seoul, offering a wide range of shops, restaurants, and entertainment options, conveniently located beneath the Express Bus Terminal.",
        address: "162, Banpo-daero, Seocho-gu, Seoul, South Korea",
        images: ["ebt 1.jpg", "ebt 2.jpg", "ebt 3.png"],
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
                                    objectFit: "cover",
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
                                      objectFit: "cover",
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
                                      objectFit: "cover",
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
