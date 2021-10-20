import axios from "axios";

const API = `http://localhost:4000`;

const siginIn = ({ email, password }) => axios.post(`${API}/`, { email, password });

export {
    siginIn,
}