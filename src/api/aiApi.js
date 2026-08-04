import API from "./axios";

export const analyzeInspection = async (id) => {

  const response = await API.post(
    `/ai/inspection/${id}`
  );

  return response.data;

};