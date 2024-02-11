import React, { useEffect, useState } from "react";
import Search from "./Search";
import axios from "../utils/Axios";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";

function People() {
  let navigate = useNavigate();

  let [trending, settrending] = useState([]);

  let fetchtrending = async () => {
    let randomPage = Math.ceil(Math.random() * 8);
    let data1 = await axios.get(`person/popular?page=${randomPage}`);

    settrending((prevs) => [...prevs, ...data1.data.results]);
  };

  useEffect(() => {
    fetchtrending();
    settrending([]);
    document.title = `Person Popular `;
  }, []);

  return (
    <div className="p-5 bg-[#1F1E24] ">
      <div className="flex  w-full justify-between">
        <div className="flex  text-2xl text-white items-center gap-8">
          <i
            className="ri-arrow-left-line text-3xl hover:text-[#6556cd]"
            onClick={() => navigate("/")}
          ></i>
          <div className=" font-semibold ">Person</div>
        </div>

        <Search></Search>
        <div className="flex"></div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={fetchtrending}
        hasMore={true}
      ></InfiniteScroll>
      <Card trending={trending} title={"person"}></Card>
    </div>
  );
}

export default People;
