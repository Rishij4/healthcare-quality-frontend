import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patients",

  initialState: {
    patients: [],
    selectedPatient: null,
    loading: false,
    error: null,
  },

  reducers: {
    setPatients(state, action) {
      state.patients = action.payload;
    },

    setSelectedPatient(state, action) {
      state.selectedPatient = action.payload;
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
  setPatients,
  setSelectedPatient,
  setLoading,
  setError,
} = patientSlice.actions;

export default patientSlice.reducer;