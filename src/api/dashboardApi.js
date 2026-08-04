import API from "./axios";

export const fetchDashboard = async () => {
  const response = await API.get("/dashboard");
  return response.data.data;
};