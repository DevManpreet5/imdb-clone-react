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

function Popular() {
  let [option, setoption] = useState("movie");
  let navigate = useNavigate();
  let fun = (funvalue) => {
    setoption(funvalue);
  };

  let [trending, settrending] = useState([]);

  let fetchtrending = async () => {
    let timeFrame = option === "all" ? "movie" : option;
    let randomPage = Math.ceil(Math.random() * 8);
    let data1 = await axios.get(`${timeFrame}/popular?page=${randomPage}`);

    settrending((prevs) => [...prevs, ...data1.data.results]);
  };

  useEffect(() => {
    fetchtrending();
    settrending([]);
    document.title = `POPULAR ${option.toUpperCase()} `;
  }, [option]);

  return (
    <div className="p-5 bg-[#1F1E24] ">
      <div className="flex  w-full justify-between">
        <div className="flex  text-2xl text-white items-center gap-8">
          <i
            className="ri-arrow-left-line text-3xl hover:text-[#6556cd]"
            onClick={() => navigate("/")}
          ></i>
          <div className=" font-semibold ">POPULAR</div>
        </div>

        <Search></Search>
        <div className="flex">
          <Dropdown
            fun={fun}
            option1={"movie"}
            option2={"tv"}
            option3={""}
            option4={""}
          ></Dropdown>
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

export default Popular;
