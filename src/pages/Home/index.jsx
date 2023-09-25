import React, { useEffect, useState } from "react";
import { getTasks } from "../../services/task.js";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const getTaskList = () => {
    getTasks().then(({ data }) => {
      const tasks = data.filter((task) => task.status === false);
      setTasks(tasks);
    });
  };

  useEffect(() => {
    getTaskList();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-evenly items-center p-2 w-4/6 border shadow-md h-14 bg-gray-400 hover:bg">
          <div className="text-lg font-bold ml-5 w-28">Başlık</div>
          <div className="text-lg font-bold w-6/12">Açıklama</div>
          <div className="text-lg font-bold ml-6 w-2/12 ">Bitiş Tarihi</div>
          <div className="text-lg font-bold mr-20  w-1/12">İşlemler</div>
        </div>
      </div>
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskForm task={task} />
        </div>
      ))}
    </>
  );
}

export default Tasks;
