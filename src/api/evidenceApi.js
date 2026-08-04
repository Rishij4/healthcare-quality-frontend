import API from "./axios";

export const uploadEvidence = async (formData) => {

  const response = await API.post(
    "/evidence",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};