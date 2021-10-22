import axios from "axios";

const API = `http://localhost:4000`;

const signIn = ({ email, password }) => axios.post(`${API}/`, { email, password });
const signUp = ({ email, password, name, passwordConfirm }) => axios.post(`${API}/sign-up`, { email, password, name, passwordConfirm });

export {
    signIn,
    signUp,
}