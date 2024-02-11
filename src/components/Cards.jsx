import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Card from "./Card";

function Cards({ trending, fun }) {
  let [option, setoption] = useState(null);

  return (
    <div className="w-[100%] h-[60vh] mt-2 px-5 py-2 overflow-y-hidden   ">
      <div className="flex justify-between">
        <div className="font-black text-4xl  ml-3 text-white">Trending</div>
        <Dropdown
          fun={fun}
          option1={"all"}
          option2={"movie"}
          option3={"tv"}
        ></Dropdown>
      </div>

      <div className="h-full w-full flex gap-5   mt-5 overflow-x-scroll">
        {trending &&
          trending.map((v, i) => {
            return (
              <Link
                key={i}
                to={`/${v.media_type || option}/details/${v.id}`}
                className="min-w-[18%] bg-zinc-600 h-[75%] overflow-y-scroll rounded-lg"
              >
                <img
                  className="w-[100%] h-[60%] "
                  src={`https://image.tmdb.org/t/p/original/${
                    v.backdrop_path || v.poster_path
                  }`}
                ></img>
                <div className="text-white px-2  font-semibold">
                  {v.name || v.original_name || v.original_title}
                </div>
                <div className="text-zinc-400 text-xs px-2 mt-1">
                  {v.overview.substring(0, 80)}
                  <Link
                    to={`/${v.media_type || option}/details/${v.id}`}
                    className="text-blue-300  ml-1"
                  >
                    {" "}
                    ..more
                  </Link>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Cards;
