// Redux store
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import inspectionReducer from "./slices/inspectionSlice";
import reportReducer from "./slices/reportSlice";
import patientReducer from "./slices/patientSlice";
import appointmentReducer from "./slices/appointmentSlice";
import departmentReducer from "./slices/departmentSlice";
import staffReducer from "./slices/staffSlice";
import defectReducer from "./slices/defectSlice";
import capaReducer from "./slices/capaSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    inspections: inspectionReducer,
    report: reportReducer,
    patients: patientReducer,
    appointments: appointmentReducer,
    departments: departmentReducer,

  staff: staffReducer,


  defects: defectReducer,

  capa: capaReducer,
  },
});