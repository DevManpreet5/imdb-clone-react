import { configureStore } from "@reduxjs/toolkit";
import Moviereducer from "../store/reducers/Moviereducer";
import Tvreducer from "../store/reducers/Tvreducer";
import Personreducer from "../store/reducers/Personreducer";

export const store = configureStore({
  reducer: {
    movie: Moviereducer,
    tv: Tvreducer,
    person: Personreducer,
  },
});
