import React, { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import Modal from 'react-bootstrap/Modal';
import NavbarNew from "./NavBarNew";


function Destinations() {
    return (
        <div className="destinations-container" style={{backgroundImage: 'url(/images/Home2.png)', backgroundSize: 'cover', backgroundAttachment:'fixed'}}>
            <NavbarNew/>
            <div className='hotel-search'>
            <DestinationHead />
            <DestinationList />
            </div>
        </div>
            
        
    )
}

function DestinationHead() {
    return (
        <div>
            <div class="list-head d-flex p-2 text-white my-4 px-4">Choose from these well-known destinations</div>
        </div>
    )
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
        <div className='wrapper'>
            <div className='accordion'>
                <div className='accord-item'>
                    <div className='accord-title d-flex justify-content-between' onClick={() => toggleAccordion(1)}>
                        <div>Myeongdong</div>
                        <div className={expandedItem === 1 ? 'rotate-icon' : ''}>
                            {expandedItem === 1 ? <IoIosArrowUp style={{ fontSize: '25px' }} /> : <IoIosArrowDown style={{ fontSize: '25px' }} />}
                        </div>
                    </div>
                    {expandedItem === 1 && (
                        <div className='accord-content px-2'>
                            <div>
                                <div className='list-container container-fluid my-2 rounded'>
                                    <div className='row  p-2 rounded d-flex flex-wrap'>
                                        <div className='col-md col-12 '>
                                            <div className='row px-2 d-flex flex-wrap'>
                                                <div className='list-lg-img col-md-8 rounded'>
                                                    {/* LARGE IMG */}
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='col-12 list-sm-img rounded mb-2' style={{ marginBottom: '10px' }}>
                                                        {/* SMALL IMG */}
                                                    </div>
                                                    <div className='col-12 list-sm-img rounded'>
                                                        {/* SMALL IMG */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col list-all-details'>
                                            <div className=' row list-detail d-flex justify-content-center align-items-center'>
                                                <div className='col-md-12  list-dest-name d-flex align-items-center'>
                                                    DESTINATION 2
                                                </div>
                                                <div className='col-md-12  list-dest-description d-flex align-items-center'>
                                                    Description...................
                                                    ...................
                                                    ..................
                                                    ....................
                                                    Description...................
                                                    ...................
                                                    ..................
                                                    ....................
                                                    Description...................
                                                    ...................
                                                    ..................
                                                    ....................
                                                </div>
                                                <div className='col-12 col list-dest-detail d-flex align-items-center'>
                                                    <div className='col-12 py-3 list-loc ' onClick={() => setModalShow(true)}>
                                                        <FaLocationDot /> 5 Mapagbigay, Diliman, Lungsod Quezon, 1100 Kalakhang Maynila
                                                    </div>
                                                </div>
                                                <LocationModal show={modalShow}
                                                    onHide={() => setModalShow(false)} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className='accord-item'>
                    <div className='accord-title d-flex justify-content-between' onClick={() => toggleAccordion(2)}>
                        <div>Enhypendong</div>
                        <div className={expandedItem === 2 ? 'rotate-icon' : ''}>
                            {expandedItem === 2 ? <IoIosArrowUp style={{ fontSize: '25px' }} /> : <IoIosArrowDown style={{ fontSize: '25px' }} />}
                        </div>
                    </div>
                    {expandedItem === 2 && (
                        <div className='accord-content px-2'>
                            {/* START OF DESTINATION */}
                            <div>
                                <div className='list-container container-fluid my-2 rounded'>
                                    <div className='row  p-2 rounded d-flex flex-wrap'>
                                        <div className='col-md col-12 '>
                                            <div className='row px-2 d-flex flex-wrap'>
                                                <div className='list-lg-img col-md-8 rounded'>
                                                    {/* LARGE IMG */}
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='col-12 list-sm-img rounded mb-2' style={{ marginBottom: '10px' }}>
                                                        {/* SMALL IMG */}
                                                    </div>
                                                    <div className='col-12 list-sm-img rounded'>
                                                        {/* SMALL IMG */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col list-all-details'>
                                            <div className=' row list-detail d-flex justify-content-center align-items-center'>
                                                <div className='col-md-12  list-dest-name d-flex align-items-center'>
                                                    DESTINATION 2
                                                </div>
                                                <div className='col-md-12  list-dest-description d-flex align-items-center'>
                                                    Description...................
                                                    ...................
                                                    ..................
                                                    ....................
                                                    Description...................
                                                    ...................
                                                    ..................
                                                    ....................
                                                    Description...................
                                                    ...................
                                                    ..................
                                                    ....................
                                                </div>
                                                <div className='col-12 col list-dest-detail d-flex align-items-center'>
                                                    <div className='col-12 py-3 list-loc ' onClick={() => setModalShow(true)}>
                                                        <FaLocationDot /> 5 Mapagbigay, Diliman, Lungsod Quezon, 1100 Kalakhang Maynila
                                                    </div>
                                                </div>
                                                <LocationModal show={modalShow}
                                                    onHide={() => setModalShow(false)} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END OF DESTINATION */}


                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


function LocationModal(props) {
    <script>
        
    </script>
    return (
        
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Location
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='gmaps text-center d-flex align-items-center justify-content-center'>
                    Google Maps API
                </div>
            </Modal.Body>
        </Modal>
    )
}



export default Destinations;
