import axios from "axios";

const API = "http://localhost:3000";
const path = "/complatedTasks";

const getCompletedTasks = () => {
  return axios.get(`${API}${path}`);
};

const getCompletedTaskId = (id) => {
  return axios.get(`${API}${path}/${id}`);
};

const pushCompletedTask = (task) => {
  return axios.post(`${API}${path}`, task);
};

const updateCompletedTask = (id, task) => {
  return axios.put(`${API}${path}/${id}`, task);
};

const deleteCompletedTaskId = (id) => {
  return axios.delete(`${API}${path}/${id}`);
};

export {
  getCompletedTasks,
  getCompletedTaskId,
  pushCompletedTask,
  updateCompletedTask,
  deleteCompletedTaskId,
};
