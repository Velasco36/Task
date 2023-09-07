import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default clientAxios;
