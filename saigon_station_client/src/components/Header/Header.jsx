import React, { useEffect, useRef, useState } from "react"
import logo_blur from "../../assets/image/logo_blur.png"
import "./Header.css"
import "./carousel.css"
import Slider from 'react-slick';

import * as GroupService from "../../services/GroupService"

function Header(props) {
    const [data, setData] = useState()
    // const [loading, setLoading] = useState(true);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await GroupService.getAll();
            if (data) {
                setData(data)
            }
        };

        fetchData();
    }, [])

    return (
        <nav className="background_img_header relative z-10 hidden md:block">
            <ul className="flex justify-around p-4">
                <li>
                    <a href="/">
                        <button className="mb-0 uppercase text-white font-bold hover:underline">Home</button>
                    </a>
                </li>
                <li>
                    <a href="https://qr.emenu.ae/saigon-station#/">
                        <button className="mb-0 uppercase text-white font-bold hover:underline">Menu</button>
                    </a>
                </li>
                <li>
                    <img src={logo_blur} alt="Saigon Station Logo" />
                </li>
                <li>
                    <a href='/contact'>
                        <button className="mb-0 uppercase text-white font-bold hover:underline">
                            Contact
                        </button>
                    </a>
                </li>
                <li>
                    <a href="/event">
                        <button className="mb-0 uppercase text-white font-bold hover:underline">Event</button>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Header