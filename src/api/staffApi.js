import API from "./axios";

export const getStaff = async () => {
  const res = await API.get("/staff");
  return res.data;
};

export const getStaffById = async (id) => {
  const res = await API.get(`/staff/${id}`);
  return res.data;
};

export const createStaff = async (data) => {
  const res = await API.post("/staff", data);
  return res.data;
};

export const updateStaff = async (id, data) => {
  const res = await API.put(`/staff/${id}`, data);
  return res.data;
};

export const deleteStaff = async (id) => {
  const res = await API.delete(`/staff/${id}`);
  return res.data;
};