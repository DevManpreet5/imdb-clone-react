import React, { useEffect, useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

function Series() {
  let [option, setoption] = useState("airing_today");
  let navigate = useNavigate();
  let fun = (funvalue) => {
    setoption(funvalue);
  };

  let [trending, settrending] = useState([]);

  let fetchtrending = async () => {
    let cat;
    if (option == "airing today") {
      cat = "airing_today";
    } else if (option == "top rated") {
      cat = "top_rated";
    } else if (option == "on the air") {
      cat = "on_the_air";
    } else {
      cat = option;
    }
    let randomPage = Math.ceil(Math.random() * 8);
    let data1 = await axios.get(`tv/${cat}?page=${randomPage}`);

    settrending((prevs) => [...prevs, ...data1.data.results]);
  };

  useEffect(() => {
    fetchtrending();
    settrending([]);
    document.title = `SHOWS ${option.toUpperCase()} `;
  }, [option]);

  return (
    <div className="p-5 bg-[#1F1E24] ">
      <div className="flex  w-full justify-between">
        <div className="flex  text-2xl text-white items-center gap-8">
          <i
            className="ri-arrow-left-line text-3xl hover:text-[#6556cd]"
            onClick={() => navigate("/")}
          ></i>
          <div className=" font-semibold ">SHOWS</div>
        </div>

        <Search></Search>
        <div className="flex">
          <Dropdown
            fun={fun}
            option1={"airing today"}
            option2={"on the air"}
            option3={"top rated"}
            option4={"popular"}
          ></Dropdown>
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={fetchtrending}
        hasMore={true}
      ></InfiniteScroll>
      <Card trending={trending} title={"tv"}></Card>
    </div>
  );
}

export default Series;
