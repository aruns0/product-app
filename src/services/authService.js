import axios from "axios";
export const getToken = async () => {
  const url = process.env.REACT_APP_TOKEN_API + "token";
  const data = {
    application_id: process.env.REACT_APP_APP_ID,
  };
  return axios.post(url, data).catch((error) => console.log("error", error));
};
