import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStaff } from "../../api/staffApi";

export const fetchStaff = createAsyncThunk(
  "staff/fetch",
  async () => {
    const res = await getStaff();
    return res.data;
  }
);

const slice = createSlice({

  name: "staff",

  initialState: {
    staff: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchStaff.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchStaff.fulfilled, (state, action) => {
        state.loading = false;
        state.staff = action.payload;
      });

  },

});

export default slice.reducer;