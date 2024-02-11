import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/Axios";

const initialState = {
  items: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    loadtv: (state, action) => {
      state.items = action.payload;
    },

    deletetv: (state, action) => {
      state.items = null;
    },
  },
});
export const asynctvSlice = (id) => async (dispatch) => {
  let tvdet = await axios.get(`tv/${id}`);
  let tvcredit = await axios.get(`tv/${id}/credits`);
  let recommendations = await axios.get(`tv/${id}/recommendations`);
  let similar = await axios.get(`tv/${id}/similar`);
  let watchproviders = await axios.get(`tv/${id}/watch/providers`);
  let videos = await axios.get(`tv/${id}/videos`);
  let reviews = await axios.get(`tv/${id}/reviews`);
  let externalid = await axios.get(`tv/${id}/external_ids`);
  let images = await axios.get(`tv/${id}/images`);

  let data = {
    tvdet: tvdet.data,
    tvcredit: tvcredit.data,
    recommendations: recommendations.data,
    similar: similar.data,
    watchproviders: watchproviders.data,
    videos: videos.data,
    reviews: reviews.data,
    externalid: externalid.data,
    images: images.data,
  };

  dispatch(loadtv(data));
};

export const { loadtv, deletetv } = tvSlice.actions;

export default tvSlice.reducer;
