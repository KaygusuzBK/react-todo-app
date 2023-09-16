import { useState, useEffect } from "react";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";
import { getTasks } from "../../services/task.js";

function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    getTasks().then(({ data }) => {
      const completedTasks = data.filter((task) => task.status === true);
      setCompletedTasks(completedTasks);
    });
  }, []);

  return (
    <>
      <div className="items-center justify-center flex flex-col text-center h-32">
        <div className="flex justify-between items-center p-3 w-4/6 border shadow-md h-14 m-1 mix-blend-multiply bg-gray-400 hover:bg">
          <div className="w-1/3 text-lg font-bold">Durum</div>
          <div className="w-1/3 text-lg font-bold">Başlık</div>
          <div className="w-1/3 text-lg font-bold">Açıklama</div>
          <div className="w-1/3 text-lg font-bold">Bitiş Tarihi</div>
          <div className="w-1/3 text-lg font-bold">İşlemler</div>
          <hr />
        </div>
      </div>
      <div>
        {completedTasks.map((task) => (
          <div key={task.id}>
            <TaskForm task={task} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CompletedTasks;
