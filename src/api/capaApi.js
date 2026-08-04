import API from "./axios";

export const getCAPAs = async () => {
  const res = await API.get("/capa");
  return res.data;
};

export const getCAPA = async (id) => {
  const res = await API.get(`/capa/${id}`);
  return res.data;
};

export const createCAPA = async (data) => {
  const res = await API.post("/capa", data);
  return res.data;
};

export const updateCAPA = async (id, data) => {
  const res = await API.put(`/capa/${id}`, data);
  return res.data;
};

export const verifyCAPA = async (id) => {
  const res = await API.patch(`/capa/${id}/verify`);
  return res.data;
};