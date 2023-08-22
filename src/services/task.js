import axios from "axios";
import memo from "react"

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

const updateTask = (id, task) => {
  return axios.put(`${API}${path}/${id}`, task);
};

const deleteTask = (id) => {
  return axios.delete(`${API}${path}/${id}`);
};

export { getTasks, getTaskId, pushTask, updateTask, deleteTask };
