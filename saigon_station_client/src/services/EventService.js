import axios from "axios";
import { API } from "../utils/apiURL";

export const getAll = async () => {
    const res = await axios.get(`${API}/event`);
    return res.data;
}

export const getRecent = async () => {
    const res = await axios.get(`${API}/event/recent`);
    return res.data;
}

export const getById = async (id) => {
    const res = await axios.get(`${API}/event/${id}`);
    return res.data;
}