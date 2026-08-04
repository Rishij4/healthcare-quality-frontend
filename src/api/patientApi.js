import API from "./axios";

/* ===========================
   Get All Patients
=========================== */

export const getPatients = async () => {
  const response = await API.get("/patients");
  return response.data;
};

/* ===========================
   Get Single Patient
=========================== */

export const getPatient = async (id) => {
  const response = await API.get(`/patients/${id}`);
  return response.data;
};

/* ===========================
   Create Patient
=========================== */

export const createPatient = async (data) => {
  const response = await API.post("/patients", data);
  return response.data;
};

/* ===========================
   Update Patient
=========================== */

export const updatePatient = async (id, data) => {
  const response = await API.put(`/patients/${id}`, data);
  return response.data;
};

/* ===========================
   Delete Patient
=========================== */

export const deletePatient = async (id) => {
  const response = await API.delete(`/patients/${id}`);
  return response.data;
};