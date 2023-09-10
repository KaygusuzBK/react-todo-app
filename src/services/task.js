import axios from "axios";

const API = "http://localhost:3000";
const path = "/tasks";
const pathCompleted = "/complatedTasks";

const getTasks = () => {
  return axios.get(`${API}${path}`);
};

const getTaskId = (id) => {
  return axios.get(`${API}${path}/${id}`);
};

const pushTask = (task) => {
  return axios.post(`${API}${path}`, task);
};

const updateTask = (id, task) => {
  return axios.put(`${API}${path}/${id}`, task);
};

const deleteTaskId = (id) => {
  return axios.delete(`${API}${path}/${id}`);
};

const sendCompletedTask = (task) => {
  pushTask(task);
};

export { getTasks, getTaskId, pushTask, updateTask, deleteTaskId };
