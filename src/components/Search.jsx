import React, { useEffect, useState } from "react";
import axios from "../utils/Axios";
import { Link } from "react-router-dom";

function Search() {
  let [text, settext] = useState("");
  let [data, setdata] = useState([]);
  let inputhandle = (e) => {
    e.preventDefault();
    settext(e.target.value);
  };

  let cleartexthandle = () => {
    settext("");
  };

  let fetchsearch = async () => {
    let data1 = await axios.get(`/search/multi?query=${text}`);
    setdata(data1.data.results);
  };

  useEffect(() => {
    fetchsearch();
  }, [text]);
  return (
    <div>
      {" "}
      <div
        className={`flex w-[50%] absolute left-[50%] top-10 items-center rounded-lg -translate-x-1/2 -translate-y-1/2 px-2 justify-between`}
      >
        <i class="ri-search-line text-zinc-500  text-lg  mr-14"></i>
        <input
          onChange={(e) => inputhandle(e)}
          value={text}
          type="text"
          className="flex w-[90%]  bg-inherit focus:outline-none text-zinc-200"
          placeholder="search!!"
        ></input>
        {text.length >= 1 ? (
          <i
            class="ml-5 ri-close-circle-fill text-zinc-500"
            onClick={cleartexthandle}
          ></i>
        ) : (
          ""
        )}
      </div>
      <div
        className={`bg-red-100 w-[50%] absolute mt-20 left-[25%] max-h-[40%] flex flex-col text-zinc-500 font-semibold overflow-y-scroll`}
      >
        {data.map((val, index) => {
          return (
            <Link
              to={
                val.media_type == "person"
                  ? `/person/details/${val.id}`
                  : `/${val.media_type}/details/${val.id}`
              }
              key={index}
              className="w-full h-20 bg-zinc-200 p-7 border-b-2 border-white hover:bg-zinc-400 hover:text-black flex items-center  gap-10"
            >
              <img
                className="h-16 w-20 rounded object-cover"
                src={
                  val.poster_path || val.backdrop_path || val.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        val.poster_path || val.backdrop_path || val.profile_path
                      }`
                    : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                }
                alt="Movie Poster"
              />

              {val.name || val.title || val.original_name || val.original_title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
