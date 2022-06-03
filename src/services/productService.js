import axios from "axios";
export const getProducts = async (params) => {
  const url = "http://localhost:3000/api/v1/products?" + params;
  return axios
    .get(url, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhcHBsaWNhdGlvbl9pZCI6IjEyM2U0NTY3LWU4OWItMTJkMy1hNDU2LTQyNjY1NTQ0MDAwMCIsImV4cCI6MTY1NDMzNjEwOH0.sFQYHPn1K-N1BUeQLDTsp0vm-nA4esDxzU8fUqGr798",
      },
    })
    .catch((error) => console.log("error", error));
};
