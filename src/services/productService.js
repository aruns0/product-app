import axios from "axios";
import jwt from "jwt-decode";
import { getToken } from "./authService";
export const getProducts = async (params) => {
  var latestToken;
  const url = process.env.REACT_APP_TOKEN_API + "products" + params;
  const token = localStorage.getItem("token");
  const expTime = jwt(token);
  if (!token || expTime.exp * 1000 < new Date().getTime()) {
    const response = await getToken();
    latestToken = response.data.token;
    localStorage.setItem("token", latestToken);
  } else latestToken = localStorage.getItem("token");
  return axios
    .get(url, {
      headers: {
        Authorization: latestToken,
      },
    })
    .catch((error) => console.log("error", error));
};
