import React from "react"
import contact from "../../assets/image/contact_open_time.png";
import orange from "../../assets/image/Orange.png";
import mint from "../../assets/image/Mint.png";

function GetInTouchPage() {
    return (
        <div className="">
            <div className="relative">
                <img src={contact} alt="contact" className="object-cover w-screen h-[70vh]"/>
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
                    <h1 className="md:text-[6rem] text-[2.5rem] font-bold">Get In Touch</h1>
                    <p className="text-center">The freshest ingredients for you every day</p>

                    <div className="mt-4 flex flex-col justify-center items-center ml-4">
                        <p className="font-bold text-[#EBF0E4]">Open Time</p>
                        <p>Monday - Sunday</p>
                        <p>10:00 AM - 11:45 PM</p>
                    </div>
                </div>

            </div>

            <div className="container pb-10 mx-auto mt-4 space-y-5">
                <div className="lg:flex">
                    <div
                        className="flex flex-col items-start justify-center xl:p-[10rem] lg:px-[6rem] lg:py-[8rem] xs:pt-[4rem] xs:px-[5rem] pt-[3rem] px-3 pb-3 relative">
                        <div className="absolute top-0 left-0">
                            <img className="xl:w-[15rem] md:w-[10rem] xs:w-[8rem] w-[4rem]" src={orange} alt=""/>
                        </div>
                        <p className="font-medium">Branch 1: <span className="font-semibold text-[#9CAA00]">Silicon Gates 1 - Dubai Silicon Oasis - Dubai - United Arab Emirates</span>
                        </p>
                        <p className="font-normal">Phone: ☎️ <span className="text-[#9CAA00]"
                                                                   style={{fontFamily: "Roboto"}}>+971585678678</span>
                        </p>
                    </div>
                    <div className="">
                        <iframe
                            className="md:w-[600px] md:h-[450px] w-[300px] h-[220px] mx-auto"
                            title="branch 1"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.539897430315!2d55.388646775048784!3d25.11743167776238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f65873dc0d68b%3A0xee71974ddb5b16ee!2sSaigon%20Station!5e0!3m2!1sen!2s!4v1713334195764!5m2!1sen!2s"
                            style={{border: 0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="lg:flex">
                    <div
                        className="lg:order-2 flex flex-col items-start justify-center xl:p-[10rem] lg:px-[6rem] lg:py-[8rem] xs:pt-[4rem] xs:px-[5rem] pt-[3rem] px-3 pb-3 relative">
                        <div className="absolute lg:bottom-0 top-0 right-0">
                            <img className="xl:w-[15rem] md:w-[10rem] xs:w-[8rem] w-[4rem]" src={mint} alt=""/>
                        </div>
                        <p className="font-medium">Branch 2: <span className="text-[#9CAA00]">The 9 tower - Marasi Dr - Business Bay - Dubai - United Arab Emirates</span>
                        </p>
                        <p className="font-medium">Phone☎️ <span className="text-[#9CAA00]">+971585559229</span></p>
                    </div>

                    <div className="lg:order-1">
                        <iframe
                            className="md:w-[600px] md:h-[450px] w-[300px] h-[220px] mx-auto"
                            title="branch 2"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.498490984415!2d55.269484075051096!3d25.18640637771795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69afefd7485d%3A0xfbb260f76333447b!2sSaigon%20Station%20Restaurant!5e0!3m2!1sen!2s!4v1713333930788!5m2!1sen!2s"
                            style={{border: 0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouchPage
