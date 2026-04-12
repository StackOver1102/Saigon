import axios from "axios";
import {API} from "../utils/apiURL";

export const getAll = async () => {
    const res = await axios.get(`${API}/group`);
    return res.data;
};