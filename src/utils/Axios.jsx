import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmYyNWQzN2Q2YTgwZWI5YTFmYzY0ZDg3NDljNWI2MCIsInN1YiI6IjY1YzIzNDZhMDkyOWY2MDE2MWU0YTg3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IBn6zzrt90NTCEr3wM0qjmXZeD54VUdp3hs55QJEwNA",
  },
});
export default instance;
