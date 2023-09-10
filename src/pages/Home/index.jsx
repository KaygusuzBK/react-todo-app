import { useEffect, useState } from "react";
import { getTasks } from "../../services//task.js";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const nowDate = new Date().toISOString().slice(0, 10);
  console.log(nowDate);
  useEffect(() => {
    getTasks().then(({ data }) => {
      const tasks = data.filter((task) => task.status === false);
      setTasks(tasks);
    });
  }, []);

  return (
    <>
        <div className="items-center justify-center flex flex-col text-center h-32">
          <div className="flex justify-between items-center p-3 w-4/5 border shadow-md h-14 m-1 mix-blend-multiply bg-gray-400 hover:bg">
            <div className="w-1/3 text-lg font-bold">Durum</div>
            <div className="w-1/3 text-lg font-bold">Başlık</div>
            <div className="w-1/3 text-lg font-bold">Açıklama</div>
            <div className="w-1/3 text-lg font-bold">Bitiş Tarihi</div>
            <div className="w-1/4 text-lg font-bold">İşlemler</div>
            <hr />
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
