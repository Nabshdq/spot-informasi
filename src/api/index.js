import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
};

const api = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}api`,
    headers,
});

export default api;