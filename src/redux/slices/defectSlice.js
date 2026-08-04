import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDefects } from "../../api/defectApi";

export const fetchDefects = createAsyncThunk(
  "defects/fetch",
  async () => {
    const res = await getDefects();
    return res.data;
  }
);

const slice = createSlice({

  name: "defects",

  initialState: {
    defects: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchDefects.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDefects.fulfilled, (state, action) => {
        state.loading = false;
        state.defects = action.payload;
      });

  },

});

export default slice.reducer;