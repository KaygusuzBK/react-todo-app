import axios from "axios";

const API = "http://localhost:3000";
const path = "/tasks";

const getTasks = () => {
  return axios.get(`${API}${path}`);
};

const getTaskId = (id) => {
  return axios.get(`${API}${path}/${id}`);
};

const pushTask = (task) => {
  return axios.post(`${API}${path}`, task);
};

export { getTasks, getTaskId, pushTask };
