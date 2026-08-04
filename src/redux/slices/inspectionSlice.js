import { createSlice } from "@reduxjs/toolkit";

const inspectionSlice = createSlice({
  name: "inspections",

  initialState: {
    inspections: [],
    selectedInspection: null,
    loading: false,
    error: null,
  },

  reducers: {
    setInspections(state, action) {
      state.inspections = action.payload;
    },

    setSelectedInspection(state, action) {
      state.selectedInspection = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setInspections,
  setSelectedInspection,
  setLoading,
  setError,
} = inspectionSlice.actions;

export default inspectionSlice.reducer;