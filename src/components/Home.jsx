import React, { useEffect, useState } from "react";
import Leftnav from "./Leftnav";
import Righthome from "./Righthome";
import axios from "../utils/Axios";

const Home = () => {
  let [trending, settrending] = useState(null);
  let [option, setoption] = useState("all");
  let [page, setpage] = useState(1);
  document.title = "HOME";

  useEffect(() => {
    setpage(Math.ceil(Math.random() * 10));
  }, []);

  let fetchtrending = async () => {
    let data1 = await axios.get(`/trending/${option}/day?page=${page}`);
    settrending(data1.data.results);
  };

  let fun = (funvalue) => {
    setoption(funvalue);
  };

  useEffect(() => {
    fetchtrending();
  }, [option]);

  return (
    <div className=" h-full w-full flex">
      <Leftnav></Leftnav>
      {trending != null && <Righthome trending={trending} fun={fun} />}
    </div>
  );
};

export default Home;
