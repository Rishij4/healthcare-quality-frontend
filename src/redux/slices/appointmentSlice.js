import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAppointments } from "../../api/appointmentApi";

export const fetchAppointments = createAsyncThunk(
  "appointments/fetch",
  async () => {
    const res = await getAppointments();
    return res.data;
  }
);

const slice = createSlice({

  name: "appointments",

  initialState: {
    appointments: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchAppointments.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.loading = false;
        state.appointments = action.payload;
      });

  },

});

export default slice.reducer;