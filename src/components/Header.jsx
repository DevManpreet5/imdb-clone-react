import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Header({ trending }) {
  let [wallpaper, setwallpaper] = useState(null);
  let [movie, setmovie] = useState(null);
  useEffect(() => {
    if (trending && trending.length > 0) {
      let wal = Math.floor(Math.random() * trending.length);
      setmovie(trending[wal]);
      setwallpaper(
        trending[wal].backdrop_path ||
          trending[wal].poster_path ||
          trending[wal].profile_path
      );
    }
  }, []);
  return (
    <div
      className="w-full h-[50vh]  mt-20 flex flex-col justify-end  
      "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className="font-black text-white  text-6xl px-5 py-1">
        {movie && (movie.name || movie.original_name || movie.original_title)}
      </div>

      <div className="  text-zinc-300 text-xs px-5 py-1 w-[70%]">
        {movie && movie.overview}
      </div>

      <div className="text-white px-5  mb-10 py-5 ">
        <i class="ri-megaphone-fill mr-5 text-xl text-yellow-500"></i>
        {movie && movie.vote_average} ({movie && movie.vote_count})
      </div>
    </div>
  );
}

export default Header;
