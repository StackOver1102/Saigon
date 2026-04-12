import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menupage from "./pages/Menupage/Menupage";
import Header from "./components/Header/Header";
import GetInTouchPage from "./pages/GetInTouchPage/GetInTouchPage";
import Footer from "./components/Footer/Footer";
import EventPage from "./pages/EventPage/EventPage";
import EventDetailPage from "./pages/EventPage/EventDetailPage";
import Sidebar from "./components/Sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import React, {useEffect, useState} from "react";
import logo from "./assets/image/logo_blur.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// import {Link} from "react-router-dom";
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Xử lý khi click ra ngoài để đóng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu')) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="">
            <BrowserRouter>
                <Header/>
                {isOpen && (
                    <div
                        className="min-h-screen flex flex-shrink-0 bg-gray-50 text-gray-800 md:hidden block">
                        <div
                            className="fixed flex flex-col top-0 left-0 w-[13rem] bg-white h-full border-r"
                        >
                            <div className="flex items-center justify-center h-[12rem] border-b text-[#233000]">
                                <a href="/" className="font-semibold">
                                    <img className="object-cover" src={logo} alt="Saigon Station"/>
                                    <p className="text-center">Saigon Station</p>
                                </a>
                            </div>
                            <div className="overflow-y-auto overflow-x-hidden flex-grow">
                                <ul className="flex flex-col py-4 space-y-1">
                                    <li>
                                        <a href='/'
                                           className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span
                    className="material-icons material-icons-outlined inline-flex justify-center items-center ml-4"
                >
                  home
                </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Home</span>
                                        </a>
                                    </li>
                                    <li className=''>
                                        <a
                                            className="flex items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 dropdown-button"
                                            onClick={toggleDropdown}
                                        >
          <span className="material-icons material-icons-outlined inline-flex items-center ml-4">
            restaurant
          </span>
                                            <button className="ml-2 text-sm tracking-wide truncate">
                                                Menu
                                            </button>
                                            <span className="text-end"><ArrowDropDownIcon/></span>
                                        </a>
                                    </li>
                                    {isDropdownOpen && (
                                        <li>
                                            <ul className="pl-2 dropdown-menu">
                                                {/* Đặt nội dung của dropdown ở đây */}
                                                <li>
                                                    <a href='/menu?start=2'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Starter</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=7'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Salad</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=9'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                        <span className="ml-2 text-sm tracking-wide truncate">Main Course</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=24'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Sandwiches</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=27'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Vegetarian</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=32'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Desert</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=34'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Special</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/menu?start=46'
                                                       className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                                                            <span
                                                                className="ml-2 text-sm tracking-wide truncate">Drink</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    )}

                                    <li>
                                        <a href='/contact'
                                           className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                                        >
                <span
                    className="material-icons material-icons-sharp inline-flex justify-center items-center ml-4"
                >
                  my_location
                </span>
                                            <span className="ml-2 text-sm tracking-wide truncate"
                                            >Contact</span
                                            >
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/event"
                                            className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                                        >
                <span
                    className="material-icons material-icons-outlined inline-flex justify-center items-center ml-4"
                >
                  article
                </span>
                                            <span className="ml-2 text-sm tracking-wide truncate">Event</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <div className={isOpen ? "ml-[13rem] top-0 absolute" : "flex-1 relative"}>
                    <button className="md:hidden block absolute z-10 top-0 left-0 p-2 rounded shadow" onClick={(e) => handleOpen()}>
                        <MenuIcon/>
                    </button>
                    {!isOpen && (
                        <>
                            <Routes>
                                <Route path="/" element={<Homepage/>}/>
                                <Route path="/menu" element={<Menupage/>}/>
                                <Route path="/contact" element={<GetInTouchPage/>}/>
                                <Route path="/event" element={<EventPage/>}/>
                                <Route path="/event/:id" element={<EventDetailPage/>}/>
                                <Route path="/sidebar" element={<Sidebar/>}/>
                            </Routes>
                            <Footer/>

                        </>
                    )}
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
