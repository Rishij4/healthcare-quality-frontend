import API from "./axios";

export const getPermissions = async () => {
  const response = await API.get("/permissions");
  return response.data;
};

export const getPermission = async (id) => {
  const response = await API.get(`/permissions/${id}`);
  return response.data;
};

export const createPermission = async (data) => {
  const response = await API.post("/permissions", data);
  return response.data;
};

export const updatePermission = async (id, data) => {
  const response = await API.put(`/permissions/${id}`, data);
  return response.data;
};

export const deletePermission = async (id) => {
  const response = await API.delete(`/permissions/${id}`);
  return response.data;
};