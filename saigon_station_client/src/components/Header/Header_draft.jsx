import React, {useEffect, useRef, useState} from "react"
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
                <li className="group inline-block ">
                    <button
                        className="mb-0 uppercase text-white font-bold inline-flex items-center hover:underline"> Menu
                        <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </button>

                    {/*Sub Menu*/}
                    <div
                        className="group-hover:block hidden transition absolute left-[5%] w-full max-w-[90%] bg-white border border-slate-200 p-2 rounded-lg shadow-xl">
                        <div className="slider-container relative">
                            <Slider
                                {...settings}
                                ref={slider => {
                                    sliderRef = slider;
                                }}>
                                {
                                    // menuImages.map((menuImage, index) => (
                                    //     <img key={index} className="sm:h-screen" src={menuImage} alt={"menu" + index}/>
                                    // ))
                                    data?.map((item) => (
                                        <>
                                            <div>
                                                <a href={`/menu?start=${item?.start}`}
                                                   className="flex-col bg-[#09511D] border hover:bg-[#09511D]/80 py-2 px-4 block whitespace-no-wrap">
                                                    <img className="mx-auto w-[10rem] h-[8rem] object-cover"
                                                         src={item?.image}
                                                         alt="Saigon Station Food Introduce"/>
                                                    <p className="mt-1 text-center font-semibold text-white">{item?.name}</p>
                                                </a>
                                            </div>
                                        </>
                                   ))
                                }
                            </Slider>
                            <button className="absolute top-1/2 -translate-y-1/2 right-0" onClick={next}>
                                <span
                                    className="material-icons material-icons-outlined text-white lg:text-4xl"
                                >arrow_forward_ios</span>
                            </button>

                            <button className="absolute top-1/2 -translate-y-1/2 left-0" onClick={previous}>
                                <span
                                    className="material-icons material-icons-outlined text-white lg:text-4xl"
                                >arrow_back_ios</span>
                            </button>
                        </div>
                    </div>
                    {/*End Sub Menu*/}
                </li>
                <li>
                    <img src={logo_blur} alt="Saigon Station Logo"/>
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