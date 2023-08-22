import React, { useState, useEffect } from "react";
import { getTaskId } from "../../services/taskService";
import { useParams, Link, useHistory } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getTaskId(id).then((task) => {
      setTask(task);
    });
  }, [id]);

  const handleDelete = () => {
    getTaskId(id).then((task) => {
      setTask(task);
    });
    history.push("/tasks");
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <h2>{task.title}</h2>
      <p>Description: {task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/task/${task.id}/edit`}>Edit</Link>
    </div>
  );
}

export default TaskDetail;
