import React, { useEffect } from "react";
import { asynctvSlice, deletetv } from "../store/reducers/Tvreducer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Tvdetails() {
  const { id } = useParams();
  const data = useSelector((state) => state.tv);
  const dispatch = useDispatch();

  let nav = useNavigate();

  useEffect(() => {
    dispatch(asynctvSlice(id));

    return () => {
      dispatch(deletetv());
    };
  }, [id, dispatch]);

  if (
    data != null &&
    data.items != null &&
    data.items.tvcredit != null &&
    data.items.tvdet != null
  ) {
    return (
      <div>
        <div
          className="h-[100vh] w-full "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original${data.items.tvdet.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex  px-20 py-7 text-xl gap-10  text-white items-center">
            <i
              class="ri-arrow-left-line hover:text-[#6556CD]"
              onClick={() => nav(-1)}
            ></i>

            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${data.items.externalid.wikidata_id}`}
            >
              <i class="ri-earth-line hover:text-[#6556CD] "></i>
            </a>

            <a target="_blank" href={`${data.items.tvdet.homepage}`}>
              <i class="ri-external-link-line hover:text-[#6556CD] "></i>
            </a>

            <a
              target="_blank"
              href={`https://www.imdb.com/title/${data.items.externalid.imdb_id}/`}
              className="hover:text-[#6556cd]"
            >
              imdb
            </a>
          </div>

          <div className="flex flex-col">
            <div className="flex w-full mb-3">
              <img
                className="h-[40vh] bg-red-100 object-cover ml-20 "
                src={`https://image.tmdb.org/t/p/original${data.items.tvdet.poster_path}`}
              ></img>
              <div className="flex flex-col gap-4 pl-16">
                <div className="flex items-center">
                  <div className="font-black text-white text-6xl">
                    {data.items.tvdet.original_title || data.items.tvdet.name}
                  </div>
                  <div className="text-white  font-semibold  self-center mt-3 ml-3">
                    ({data.items.tvdet.first_air_date.substring(0, 4)})
                  </div>
                </div>
                <div className="flex items-center text-white">
                  <div className="rounded-full  bg-yellow-600 px-1.5 py-3 font-bold mr-5">
                    {Math.ceil(data.items.tvdet.vote_average * 10)}%
                  </div>
                  <div className="text-white flex gap-2 text-2xl">
                    {data.items.tvdet.genres.map((genre) => (
                      <h1 key={genre.id}>{genre.name}</h1>
                    ))}
                  </div>
                  <div className="  text-white ml-5 text-sm mt-2 ">
                    ({data.items.tvdet.runtime}mins)
                  </div>
                </div>

                <div className="text-white text-lg font-bold">
                  {data.items.tvdet.tagline}
                </div>
                <div className="text-zinc-200 text-sm w-[50%]">
                  {data.items.tvdet.overview}
                </div>
              </div>
            </div>
          </div>
          <hr className="ml-20 mt-5 mb-5   border-zinc-500 border-b-1 w-[90%]"></hr>
          <div className="ml-20 font-black text-white text-3xl">Cast</div>
          <div className="h-full w-full flex gap-5   mt-5 overflow-x-scroll px-20">
            {data.items.tvcredit.cast &&
              data.items.tvcredit.cast.map((v, i) => {
                return (
                  <Link
                    key={i}
                    to={`/person/details/${v.id}`}
                    className="min-w-[12%] bg-zinc-600 h-[30%]  hover:bg-[#6556cd] overflow-y-scroll rounded-lg"
                  >
                    <img
                      className="w-[100%] h-[70%] "
                      src={
                        v.profile_path
                          ? `https://image.tmdb.org/t/p/original/${v.profile_path}`
                          : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                      }
                    ></img>
                    <div className="text-white px-2  font-semibold">
                      {v.name || v.original_name || v.original_title}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div
          className="h-[100vh] w-full py-5"
          style={{
            backgroundImage:
              data.items.images.backdrops.length > 1
                ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original${data.items.images.backdrops[1].file_path})`
                : `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original${data.items.images.backdrops[0].file_path})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <hr className="ml-20  mb-5    border-zinc-500 border-b-1 w-[90%]"></hr>
          <div className="ml-20 font-black text-white text-3xl">Similar</div>
          <div className="h-[30vh] w-full flex gap-5  mt-5 overflow-x-scroll px-20">
            {data.items.similar.results &&
              data.items.similar.results.map((v, i) => {
                return (
                  <Link
                    key={i}
                    to={`/tv/details/${v.id}`}
                    className="min-w-[12%] bg-zinc-600 h-[100%] w-[100%]  hover:bg-[#6556cd] overflow-y-scroll rounded-lg"
                  >
                    <img
                      className="w-[100%] h-[70%] "
                      src={
                        v.backdrop_path
                          ? `https://image.tmdb.org/t/p/original/${v.backdrop_path}`
                          : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                      }
                    ></img>
                    <div className="text-white px-2  font-semibold">
                      {v.name || v.original_name || v.original_title}
                    </div>
                  </Link>
                );
              })}
          </div>

          <div className="ml-20 font-black text-white text-3xl mt-10">
            Recommendations
          </div>
          <div className="h-[30vh] w-full flex gap-5  mt-5 overflow-x-scroll px-20">
            {data.items.recommendations.results &&
              data.items.recommendations.results.map((v, i) => {
                return (
                  <Link
                    to={`/tv/details/${v.id}`}
                    key={i}
                    className="min-w-[12%] bg-zinc-600 h-[100%] w-[100%]  hover:bg-[#6556cd] overflow-y-scroll rounded-lg"
                  >
                    <img
                      className="w-[100%] h-[70%] "
                      src={
                        v.backdrop_path
                          ? `https://image.tmdb.org/t/p/original/${v.backdrop_path}`
                          : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"
                      }
                    ></img>
                    <div className="text-white px-2  font-semibold">
                      {v.name || v.original_name || v.original_title}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading></Loading>;
  }
}

export default Tvdetails;
