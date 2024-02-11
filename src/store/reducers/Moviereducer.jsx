import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/Axios";

const initialState = {
  items: null,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadmovie: (state, action) => {
      state.items = action.payload;
    },

    deletemovie: (state, action) => {
      state.items = null;
    },
  },
});
export const asyncmovieSlice = (id) => async (dispatch) => {
  let moviedet = await axios.get(`movie/${id}`);
  let moviecredit = await axios.get(`movie/${id}/credits`);
  let recommendations = await axios.get(`movie/${id}/recommendations`);
  let similar = await axios.get(`movie/${id}/similar`);
  let watchproviders = await axios.get(`movie/${id}/watch/providers`);
  let videos = await axios.get(`movie/${id}/videos`);
  let reviews = await axios.get(`movie/${id}/reviews`);
  let externalid = await axios.get(`movie/${id}/external_ids`);
  let images = await axios.get(`movie/${id}/images`);

  let data = {
    moviedet: moviedet.data,
    moviecredit: moviecredit.data,
    recommendations: recommendations.data,
    similar: similar.data,
    watchproviders: watchproviders.data,
    videos: videos.data,
    reviews: reviews.data,
    externalid: externalid.data,
    images: images.data,
  };

  dispatch(loadmovie(data));
};

export const { loadmovie, deletemovie } = movieSlice.actions;

export default movieSlice.reducer;
