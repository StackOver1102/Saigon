import React, {useEffect, useRef, useState} from 'react'
import Slider from 'react-slick';
import "./carousel.css"
import menu1 from '../../assets/image/menu/menu-update_page-0001.jpg';
import menu2 from '../../assets/image/menu/menu-update_page-0002.jpg';
import menu3 from '../../assets/image/menu/menu-update_page-0003.jpg';
import menu4 from '../../assets/image/menu/menu-update_page-0004.jpg';
import menu5 from '../../assets/image/menu/menu-update_page-0005.jpg';
import menu6 from '../../assets/image/menu/menu-update_page-0006.jpg';
import menu7 from '../../assets/image/menu/menu-update_page-0007.jpg';
import menu8 from '../../assets/image/menu/menu-update_page-0008.jpg';
import menu9 from '../../assets/image/menu/menu-update_page-0009.jpg';
import menu10 from '../../assets/image/menu/menu-update_page-0010.jpg';
import menu11 from '../../assets/image/menu/menu-update_page-0011.jpg';
import menu12 from '../../assets/image/menu/menu-update_page-0012.jpg';
import menu13 from '../../assets/image/menu/menu-update_page-0013.jpg';
import menu14 from '../../assets/image/menu/menu-update_page-0014.jpg';
import menu15 from '../../assets/image/menu/menu-update_page-0015.jpg';
import menu16 from '../../assets/image/menu/menu-update_page-0016.jpg';
import menu17 from '../../assets/image/menu/menu-update_page-0017.jpg';
import menu18 from '../../assets/image/menu/menu-update_page-0018.jpg';
import menu19 from '../../assets/image/menu/menu-update_page-0019.jpg';
import menu20 from '../../assets/image/menu/menu-update_page-0020.jpg';
import menu21 from '../../assets/image/menu/menu-update_page-0021.jpg';
import menu22 from '../../assets/image/menu/menu-update_page-0022.jpg';
import menu23 from '../../assets/image/menu/menu-update_page-0023.jpg';
import menu24 from '../../assets/image/menu/menu-update_page-0024.jpg';
import menu25 from '../../assets/image/menu/menu-update_page-0025.jpg';
import menu26 from '../../assets/image/menu/menu-update_page-0026.jpg';
import menu27 from '../../assets/image/menu/menu-update_page-0027.jpg';
import menu28 from '../../assets/image/menu/menu-update_page-0028.jpg';
import menu29 from '../../assets/image/menu/menu-update_page-0029.jpg';
import menu30 from '../../assets/image/menu/menu-update_page-0030.jpg';
import menu31 from '../../assets/image/menu/menu-update_page-0031.jpg';
import menu32 from '../../assets/image/menu/menu-update_page-0032.jpg';
import menu33 from '../../assets/image/menu/menu-update_page-0033.jpg';
import menu34 from '../../assets/image/menu/menu-update_page-0034.jpg';
import menu35 from '../../assets/image/menu/menu-update_page-0035.jpg';
import menu36 from '../../assets/image/menu/menu-update_page-0036.jpg';
import menu37 from '../../assets/image/menu/menu-update_page-0037.jpg';
import menu38 from '../../assets/image/menu/menu-update_page-0038.jpg';
import menu39 from '../../assets/image/menu/menu-update_page-0039.jpg';
import menu40 from '../../assets/image/menu/menu-update_page-0040.jpg';
import menu41 from '../../assets/image/menu/menu-update_page-0041.jpg';
import menu42 from '../../assets/image/menu/menu-update_page-0042.jpg';
import menu43 from '../../assets/image/menu/menu-update_page-0043.jpg';
import menu44 from '../../assets/image/menu/menu-update_page-0044.jpg';
import menu45 from '../../assets/image/menu/menu-update_page-0045.jpg';
import menu46 from '../../assets/image/menu/menu-update_page-0046.jpg';
import menu47 from '../../assets/image/menu/menu-update_page-0047.jpg';
import menu48 from '../../assets/image/menu/menu-update_page-0048.jpg';
import menu49 from '../../assets/image/menu/menu-update_page-0049.jpg';
import menu50 from '../../assets/image/menu/menu-update_page-0050.jpg';
import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import * as MenuService from '../../services/MenuService'

function Menupage() {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const start = parseInt(queryParams.start ?? 0);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: start,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },

            },
        ]
    };
    const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10,
        menu11, menu12, menu13, menu14, menu15, menu16, menu17, menu18, menu19, menu20, menu21,
        menu22, menu23, menu24, menu25, menu26, menu27, menu28, menu29, menu30, menu31, menu32,
        menu33, menu34, menu35, menu36, menu37, menu38, menu39, menu40, menu41, menu42, menu43,
        menu44, menu45, menu46, menu47, menu48, menu49, menu50];


    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await MenuService.getAll();
            if (data) {
                setData(data);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            {loading && <div
                className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div role="status">
                    <svg aria-hidden="true"
                         className="w-8 h-8 text-gray-200 animate-spin mx-auto dark:text-gray-600 fill-blue-600"
                         viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"/>
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"/>
                    </svg>
                    <span className="block mt-1 text-center">Loading...</span>
                </div>
            </div>}
            <div className="mx-auto sm:p-10 p-5">
                <div
                    className="slide-container relative xl:max-w-[70rem] lg:max-w-[55rem] md:max-w-[40rem] max-w-[100%] mx-auto">
                    <Slider
                        ref={slider => {
                            sliderRef = slider;
                        }}
                        {...settings}
                    >
                        {
                            data?.map((group, index) => (
                                group?.images?.map((item, index) => (
                                    <img key={index} className="sm:h-screen" src={item}/>
                                ))
                            ))
                        }
                    </Slider>
                    <button className="absolute top-1/2 -translate-y-1/2 right-0" onClick={next}>
                    <span
                        className="material-icons material-icons-outlined text-[#2e7d32] lg:text-4xl inline-flex justify-center items-center ml-4"
                    >arrow_forward_ios</span>
                        {/*<ArrowForwardIosIcon fontSize={'large'} color={'success'}/>*/}
                    </button>

                    <button className="absolute top-1/2 -translate-y-1/2 left-0" onClick={previous}>
                <span
                    className="material-icons material-icons-outlined text-[#2e7d32] lg:text-4xl inline-flex justify-center items-center ml-2"
                >arrow_back_ios</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Menupage
