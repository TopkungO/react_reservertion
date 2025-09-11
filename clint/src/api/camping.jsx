import axios from "axios";

export const createCampimg = async (token, data) => {
  return await axios.post("http://localhost:5000/api/camping", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const listCamping = async () => {
  return await axios.get("http://localhost:5000/api/camping");
};
