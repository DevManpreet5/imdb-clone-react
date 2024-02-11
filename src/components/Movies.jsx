import React, { useEffect, useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

function Movies() {
  let [option, setoption] = useState("popular");
  let navigate = useNavigate();
  let fun = (funvalue) => {
    setoption(funvalue);
  };

  let [trending, settrending] = useState([]);

  let fetchtrending = async () => {
    let cat;
    if (option == "now playing") {
      cat = "now_playing";
    } else if (option == "top rated") {
      cat = "top_rated";
    } else {
      cat = option;
    }
    let randomPage = Math.ceil(Math.random() * 8);
    let data1 = await axios.get(`movie/${cat}?page=${randomPage}`);

    settrending((prevs) => [...prevs, ...data1.data.results]);
  };

  useEffect(() => {
    fetchtrending();
    settrending([]);
    document.title = `MOVIES ${option.toUpperCase()} `;
  }, [option]);

  return (
    <div className="p-5 bg-[#1F1E24] ">
      <div className="flex  w-full justify-between">
        <div className="flex  text-2xl text-white items-center gap-8">
          <i
            className="ri-arrow-left-line text-3xl hover:text-[#6556cd]"
            onClick={() => navigate("/")}
          ></i>
          <div className=" font-semibold ">MOVIES</div>
        </div>

        <Search></Search>
        <div className="flex">
          <Dropdown
            fun={fun}
            option1={"now playing"}
            option2={"popular"}
            option3={"top rated"}
            option4={"upcoming"}
          ></Dropdown>
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={fetchtrending}
        hasMore={true}
      ></InfiniteScroll>
      <Card trending={trending} title={"movie"}></Card>
    </div>
  );
}

export default Movies;
