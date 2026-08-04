import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",

  initialState: {
    stats: {},
    severity: [],
    category: [],
    trend: [],
    loading: false,
  },

  reducers: {
    setDashboard(state, action) {
      state.stats = action.payload.stats;
      state.severity = action.payload.severity;
      state.category = action.payload.category;
      state.trend = action.payload.trend;
    },
  },
});

export const { setDashboard } = dashboardSlice.actions;

export default dashboardSlice.reducer;