import API from "./axios";

export const getInspections = async () => {

  const response = await API.get("/inspections");

  return response.data;

};

export const getInspection = async (id) => {

  const response = await API.get(`/inspections/${id}`);

  return response.data;

};

export const createInspection = async (data) => {

  const response = await API.post("/inspections", data);

  return response.data;

};

export const updateInspection = async (id, data) => {

  const response = await API.put(`/inspections/${id}`, data);

  return response.data;

};

export const deleteInspection = async (id) => {

  const response = await API.delete(`/inspections/${id}`);

  return response.data;

};