import React, { useEffect, useState } from "react";
import Search from "./Search";
import Dropdown from "./Dropdown";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Card from "./Card";

function Trending() {
  let [option, setoption] = useState("all");
  let [option2, setoption2] = useState("day");
  let navigate = useNavigate();
  let fun = (funvalue) => {
    setoption(funvalue);
  };

  let fun2 = (funvalue) => {
    setoption2(funvalue);
  };

  let [trending, settrending] = useState([]);

  let fetchtrending = async () => {
    let timeFrame = option2 === "all" ? "day" : option2;
    let randomPage = Math.ceil(Math.random() * 50);
    let data1 = await axios.get(
      `/trending/${option}/${timeFrame}?page=${randomPage}`
    );

    settrending((prevs) => [...prevs, ...data1.data.results]);
  };

  useEffect(() => {
    fetchtrending();
    settrending([]);
    document.title = `TRENDING ${option.toUpperCase()} `;
  }, [option, option2]);

  return (
    <div className="p-5 bg-[#1F1E24] ">
      <div className="flex  w-full justify-between">
        <div className="flex  text-2xl text-white items-center gap-8">
          <i
            className="ri-arrow-left-line text-3xl hover:text-[#6556cd]"
            onClick={() => navigate("/")}
          ></i>
          <div className=" font-semibold ">trending</div>
        </div>

        <Search></Search>
        <div className="flex">
          <Dropdown
            fun={fun}
            option1={"all"}
            option2={"movie"}
            option3={"tv"}
            option4={""}
          ></Dropdown>

          <Dropdown fun={fun2} option1={"day"} option2={"week"}></Dropdown>
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={fetchtrending}
        hasMore={true}
      ></InfiniteScroll>
      <Card trending={trending} title={option}></Card>
    </div>
  );
}

export default Trending;
