import React from "react";
import axios from "../utils/Axios";
import { Link } from "react-router-dom";
function Card({ trending, title }) {
  return (
    <div className="h-[100%] w-full flex gap-7   mt-5 flex-wrap px-4">
      {trending.length >= 1
        ? trending.slice(0, 1000).map((v, i) => {
            return (
              <Link
                to={`/${v.media_type || title}/details/${v.id}`}
                key={i}
                className="w-[18%] bg-zinc-600 h-[32vh] overflow-y-scroll rounded-lg"
              >
                <img
                  className="w-[100%] h-[60%]"
                  src={
                    v.backdrop_path || v.poster_path || v.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          v.backdrop_path || v.poster_path || v.profile_path
                        }`
                      : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                  }
                  alt="Movie Image"
                />

                <div className="text-white px-2 font-semibold">
                  {v.name || v.original_name || v.original_title}
                  <span className=" text-zinc-400  font-light text-xs  ml-2">
                    ({v.vote_average || v.popularity})
                  </span>
                </div>
                <div className="text-zinc-400 text-xs px-2 mt-1">
                  {v.overview && v.overview.substring(0, 80)}
                  {v.known_for && v.known_for[0] && (
                    <div>{v.known_for[0].title}</div>
                  )}

                  {v.known_for && v.known_for[1] && (
                    <div>{v.known_for[1].title}</div>
                  )}
                  {v.known_for && v.known_for[2] && (
                    <div>{v.known_for[2].title}</div>
                  )}
                  <Link className="text-blue-300 ml-1">
                    {v.overview && "..more"}{" "}
                  </Link>
                </div>
              </Link>
            );
          })
        : ""}
    </div>
  );
}

export default Card;
