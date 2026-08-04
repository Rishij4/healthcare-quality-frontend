import API from "./axios";

export const getDefects = async () => {
  const res = await API.get("/defects");
  return res.data;
};

export const getDefect = async (id) => {
  const res = await API.get(`/defects/${id}`);
  return res.data;
};

export const createDefect = async (data) => {
  const res = await API.post("/defects", data);
  return res.data;
};

export const updateDefect = async (id, data) => {
  const res = await API.put(`/defects/${id}`, data);
  return res.data;
};

export const deleteDefect = async (id) => {
  const res = await API.delete(`/defects/${id}`);
  return res.data;
};