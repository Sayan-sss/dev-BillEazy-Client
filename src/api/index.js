import axios from "axios";
import { baseURL } from "../Config/config";
const API = axios.create({ baseURL: "http://localhost:8080" });

export default API;
