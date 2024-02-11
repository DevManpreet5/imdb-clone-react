import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function Leftnav() {
  return (
    <div className="w-[20%] h-[100%] border-r-2 border-zinc-400 flex flex-col px-4 ">
      <h1 className="text-white mt-5 text-4xl  flex   font-extrabold ">
        <svg
          className=" h-9 rounded-lg inline-block mr-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(101,86,205,1)"
        >
          <path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
        </svg>
        Movies
      </h1>
      <div className="text-white  mt-8 flex flex-col gap-4">
        <div className="text-2xl mb-3  font-bold ">New Feeds</div>
        <Link
          to={"/trending"}
          className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd] hover:text-white py-3 px-5"
        >
          <i className="ri-fire-fill mr-3"></i>Trending
        </Link>
        <Link
          to="/popular"
          className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd] hover:text-white  py-3 px-5 "
        >
          <i className="ri-clapperboard-fill mr-3"></i>Popular
        </Link>
        <Link
          to={"/movies"}
          className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd]  duration-500 hover:text-white py-3 px-5   "
        >
          <i className="ri-movie-2-fill mr-3"></i>Movies
        </Link>
        <Link
          to={"/shows"}
          className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd] hover:text-white py-3 px-5  "
        >
          <i className="ri-bard-fill mr-3"></i>T.V. Shows
        </Link>
        <Link
          to="/person"
          className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd] hover:text-white py-3 px-5 "
        >
          <i className="ri-fire-fill mr-3"></i>person
        </Link>
      </div>
      <hr className="mt-4 bg-zinc-200"></hr>
      <div className="text-white  mt-8 flex flex-col gap-4">
        <div className="text-2xl mb-3  font-bold ">Website information</div>
        <Link className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd] hover:text-white py-3 px-5">
          <i class="ri-building-4-line mr-3"></i>About
        </Link>
        <Link className=" text-zinc-300  ml-4 w-[90%] rounded-lg hover:bg-[#6556cd] hover:text-white py-3 px-5 ">
          <i class="ri-contacts-fill mr-3"></i>Contacts Us
        </Link>
      </div>
    </div>
  );
}

export default Leftnav;
