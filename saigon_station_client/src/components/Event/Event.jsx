import React from "react"
import contact from "../../assets/image/contact_open_time.png";
import {Link} from "react-router-dom";
function Event(props) {
    const {data} = props
    return (
        <div
            className="xl:max-w-sm lg:max-w-xs mx-auto md:m-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/event/${data?._id}`}>
                <img className="w-full lg:h-[215px] object-cover rounded-t-lg" src={data?.image} alt=""/>
            </Link>
            <div className="p-5">
                <Link to={`/event/${data?._id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{data?.tittle}</h5>
                </Link>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400 line-clamp-3">{data?.description}</p>
                <Link to={`/event/${data?._id}`}
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Event
