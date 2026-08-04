import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCAPAs } from "../../api/capaApi";

export const fetchCAPAs = createAsyncThunk(
  "capa/fetch",
  async () => {
    const res = await getCAPAs();
    return res.data;
  }
);

const slice = createSlice({

  name: "capa",

  initialState: {
    capas: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchCAPAs.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCAPAs.fulfilled, (state, action) => {
        state.loading = false;
        state.capas = action.payload;
      });

  },

});

export default slice.reducer;