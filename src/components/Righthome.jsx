import React, { useEffect, useState } from "react";

import Header from "./Header";
import Cards from "./Cards";
import Search from "./Search";

function Righthome({ trending, fun }) {
  return (
    <div className="w-[80%] flex flex-col relative">
      <Search></Search>

      <Header trending={trending}></Header>
      <Cards trending={trending} fun={fun}></Cards>
    </div>
  );
}

export default Righthome;
