import axios from "axios";

const API = `https://camilo-my-wallet.herokuapp.com`;

const createHeaders = (token) => {
    return { headers: { Authorization: `Bearer ${token}` } };
}

const signIn = ({ email, password }) => axios.post(`${API}/sign-in`, { email, password });
const signUp = ({ email, password, name, passwordConfirm }) => axios.post(`${API}/sign-up`, { email, password, name, passwordConfirm });
const getData = ({ token }) => axios.get(`${API}/contabil-data`, createHeaders(token));
const postTransaction = ({
    description,
    contabilType,
    value,
    token
}) => { return axios.post(`${API}/contabil-data`, { description, contabilType, value }, createHeaders(token)) };
const logOutDb = ({ token }) => axios.post(`${API}/log-out`, {}, createHeaders(token));
export {
    signIn,
    signUp,
    getData,
    postTransaction,
    logOutDb
}