import React from "react"
import logo from "../../assets/image/logo_blur.png"
import tiktok from "../../assets/icon/tiktok.svg"

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <footer className="bg-[#233000] min-w-screen p-4 text-white text-center">
            <div className="container mx-auto p-4 border-b-2 border-dashed">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:text-normal text-xs">
                    <div className="flex gap-1">
                        <div className="">
                            <img src={logo} alt="" />
                        </div>
                        <div className="">
                            <ul className="text-start">
                                <li className="mb-2">
                                    <a href="https://www.facebook.com/saigonstation.dxb" target="_blank"
                                        rel="noreferrer">
                                        <FacebookIcon /> Saigon Station
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://www.instagram.com/saigonstation/" target="_blank" rel="noreferrer">
                                        <InstagramIcon /> saigonstation
                                    </a>
                                </li>
                                <li className="">
                                    <a className="flex gap-2" href="https://www.tiktok.com/@saigonstation678/"
                                        target="_blank" rel="noreferrer">
                                        <img className="bg-white h-[20px] w-[20px]" src={tiktok} alt="" />saigonstation678
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-start md:mt-0 mt-4">
                        <h4 className="mb-2 font-medium md:text-xl text-lg">Contact</h4>
                        <ul>
                            <li className="mb-1">
                                <div className="flex gap-1">
                                    <MailOutlineIcon />
                                    <p>info@saigonstations.com</p>
                                </div>
                            </li>
                            <li className="mb-1">
                                <div className="flex gap-1">
                                    <PhoneIcon></PhoneIcon>
                                    <p>+971585313666</p>
                                </div>
                            </li>
                            <li className="mb-1">
                                <div className="flex gap-1">
                                    <PhoneIcon></PhoneIcon>
                                    <p>+971585616777</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="text-start lg:mt-0 mt-4">
                        <h4 className="mb-2 font-medium md:text-xl text-lg">Address</h4>
                        <ul>
                            <li className="mb-1">
                                <div className="flex gap-1">
                                    <LocationOnIcon />
                                    <p>Silicon Gates 1 - Dubai Silicon Oasis - Dubai - United Arab Emirates</p>
                                </div>
                            </li>
                            <li className="mb-1">
                                <div className="flex gap-1">
                                    <LocationOnIcon />
                                    <p>The 9 tower - Marasi Dr - Business Bay - Dubai - United Arab Emirates</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-2 md:text-normal text-xs">
                <p className="">© 2024 Saigon Station. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
