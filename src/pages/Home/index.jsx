import { useEffect, useState } from "react";
import { getTasks } from "../../services//task.js";
import TaskForm from "../../components/task/taskForm/taskForm.jsx";
import { useTranslation } from "react-i18next";
import i18next from "../../language/1i8.js";

function Tasks() {
  const { t, i18n } = useTranslation();

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    getTasks().then(({ data }) => {
      const tasks = data.filter((task) => task.status === false);
      setTasks(tasks);
    });
  }, []);

  return (
    <>
      <div className="items-center justify-center flex flex-col text-center h-32">
        <div className="flex justify-between items-center w-4/5 border shadow-md h-14 m-1  bg-gray-400 hover:bg">
          <div className="w-1/3 text-lg font-bold">Durum</div>
          <div className="w-1/3 text-lg font-bold">Başlık</div>
          <div className="w-1/3 text-lg font-bold">Açıklama</div>
          <div className="w-1/3 text-lg font-bold">Bitiş Tarihi</div>
          <div className="w-1/3 text-lg font-bold">İşlemler</div>
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
