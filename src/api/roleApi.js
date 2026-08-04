import API from "./axios";

export const getRoles = async () => {
  const response = await API.get("/roles");
  return response.data;
};

export const getRole = async (id) => {
  const response = await API.get(`/roles/${id}`);
  return response.data;
};

export const createRole = async (data) => {
  const response = await API.post("/roles", data);
  return response.data;
};

export const updateRole = async (id, data) => {
  const response = await API.put(`/roles/${id}`, data);
  return response.data;
};

export const deleteRole = async (id) => {
  const response = await API.delete(`/roles/${id}`);
  return response.data;
};