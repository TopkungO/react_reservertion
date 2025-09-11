import axios from "axios";

export const uploadImage = async (token, file) => {
  return await axios.post(
    "http://localhost:5000/api/images",
    { image: file },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
