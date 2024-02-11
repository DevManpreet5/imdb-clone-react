import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import {
  asyncpersonslice,
  deleteperson,
} from "../store/reducers/Personreducer";

function Peopledetails() {
  const { id } = useParams();
  const data = useSelector((state) => {
    return state.person;
  });
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(asyncpersonslice(id));

    return () => {
      dispatch(deleteperson());
    };
  }, [id, dispatch]);

  if (data && data.items && data.items.persondet.name) {
    return (
      <div className="py-5 px-20 h-[150vh] bg-[#1f1e24]">
        <i
          class="ri-arrow-left-line hover:text-[#6556CD]  text-4xl  text-white"
          onClick={() => nav(-1)}
        ></i>

        <div className="flex gap-20 mt-10 ">
          <div className=" h-[90vh] w-[21vw]  flex flex-col ">
            <img
              className="h-[40vh] w-[16vw] bg-red-100 object-cover self-center  "
              src={`https://image.tmdb.org/t/p/original${data.items.persondet.profile_path}`}
            ></img>
            <hr className="w-[70%]  self-center   border-zinc-500 border-b-1 mt-3 mb-2"></hr>
            <div className="flex  w-[16vw]  text-2xl text-white gap-4 ">
              <a
                href={`https://www.wikidata.org/wiki/${data.items.externalid.wikidata_id}`}
                target="_blank"
              >
                <i class="ri-earth-fill hover:text-[#6556cd]"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.instagram.com/${data.items.externalid.instagram_id}/?hl=en`}
              >
                <i class="ri-instagram-line hover:text-[#6556cd]"></i>
              </a>

              <a
                target="_blank"
                href={`https://www.facebook.com/${data.items.externalid.facebook_id}/`}
              >
                <i class="ri-facebook-circle-line hover:text-[#6556cd]"></i>
              </a>

              <a
                target="_blank"
                href={`https://twitter.com/${data.items.externalid.twitter_id}?lang=en`}
              >
                <i class="ri-twitter-x-line hover:text-[#6556cd]"></i>
              </a>

              <a
                href={`https://www.imdb.com/name/${data.items.externalid.imdb_id}/`}
                target="_blank"
              >
                <div className="hover:text-[#6556cd]">imdb</div>
              </a>
            </div>
            <div className="text-zinc-400 px-5 mt-5 flex flex-col ">
              <div className="text-lg font-semibold">DEPARTMENT</div>
              <div>{data.items.persondet.known_for_department}</div>
            </div>

            <div className="text-zinc-400 px-5 mt-3 flex flex-col">
              <div className="text-lg font-semibold">BIRTHDAY</div>
              <div>{data.items.persondet.birthday}</div>
            </div>

            <div className="text-zinc-400 px-5 mt-3 flex flex-col">
              <div className="text-lg font-semibold">PLACE</div>
              <div>{data.items.persondet.place_of_birth}</div>
            </div>

            <div className="text-zinc-400 px-5 mt-3 flex flex-col">
              <div className="text-lg font-semibold">ALSO KNOWN AS</div>
              <div>
                {data.items.persondet.also_known_as.map((val) => (
                  <span className="text-sm ml-1">{val},</span>
                ))}
              </div>
            </div>
          </div>
          <div className=" h-[120vh] w-[100%] flex flex-col px-16 gap-7">
            <div className="font-black text-6xl text-white flex">
              {data.items.persondet.name}
              <span className="text-sm font-normal ml-7 text-gray-400 self-center">
                ({data.items.persondet.popularity})
              </span>
            </div>
            <div className="text-2xl text-white font-semibold">Biography</div>
            <div className="text-sm text-gray-400 max-h-[20%] ">
              {data.items.persondet.biography.substring(0, 500)}
            </div>

            <div className="text-2xl mt-5 text-white font-semibold">
              KNOWN FOR
            </div>

            <div className="h-[30vh] w-[90%] flex gap-5   mt-3 overflow-x-scroll  mr-5">
              {data.items.combinedcredits.cast &&
                data.items.combinedcredits.cast.map((v, i) => {
                  return (
                    <Link
                      key={i}
                      to={`/${v.media_type}/details/${v.id}`}
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
      </div>
    );
  } else {
    return <Loading></Loading>;
  }
}

export default Peopledetails;
