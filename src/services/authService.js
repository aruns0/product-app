import axios from "axios";
import { logMessage } from "./loggingService";
export const getToken = async () => {
  const url = process.env.REACT_APP_TOKEN_API + "token";
  const data = {
    application_id: process.env.REACT_APP_APP_ID,
  };
  return axios.post(url, data).catch((error) => logMessage(error));
};
