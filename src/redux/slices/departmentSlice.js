import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDepartments } from "../../api/departmentApi";

export const fetchDepartments = createAsyncThunk(
  "departments/fetchAll",
  async () => {
    const res = await getDepartments();
    return res.data;
  }
);

const departmentSlice = createSlice({
  name: "departments",

  initialState: {
    departments: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchDepartments.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })

      .addCase(fetchDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },

});

export default departmentSlice.reducer;