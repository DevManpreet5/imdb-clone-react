import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/Axios";

const initialState = {
  items: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    loadperson: (state, action) => {
      state.items = action.payload;
    },

    deleteperson: (state, action) => {
      state.items = null;
    },
  },
});
export const asyncpersonslice = (id) => async (dispatch) => {
  let persondet = await axios.get(`person/${id}`);
  let moviecredit = await axios.get(`person/${id}/movie_credits`);
  let tvcredits = await axios.get(`person/${id}/tv_credits`);
  let images = await axios.get(`person/${id}/images`);
  let externalid = await axios.get(`person/${id}/external_ids`);

  let combinedcredits = await axios.get(`person/${id}/combined_credits`);

  let data = {
    persondet: persondet.data,
    moviecredit: moviecredit.data,
    tvcredits: tvcredits.data,
    images: images.data,
    externalid: externalid.data,
    combinedcredits: combinedcredits.data,
  };

  dispatch(loadperson(data));
};

export const { loadperson, deleteperson } = personSlice.actions;

export default personSlice.reducer;
