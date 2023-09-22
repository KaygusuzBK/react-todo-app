import { getTaskId, updateTask } from "../../services/task";
import { Link, useHref, useParams } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useState, useEffect } from "react";
import Modal from "../../components/modal/Modal";

function EditTask() {
  let { id } = useParams();

  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskId(id).then(({ data }) => setTask(data));
  }, [getTaskId]);

  useEffect(() => {
    document.getElementById("title").value = task.title;
  }, [task.title]);

  return (
    <>
      <div className="text-center ">
        <h1 className="text-4xl p-2 m-2 border">Task Güncelleme</h1>
        <div className="p-2">
          <label className="text-xl">Başlık</label>
          <Input
            minLength={2}
            maxLength={20}
            className="rounded-lg px-5 py-2 m-2 border-gray-500 text-black bg-slate-300"
            o
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required={true}
            id={"title"}
          />
        </div>
        <div className="p-2">
          <label className="text-xl">İçerik</label>
          <Input
            minLength={2}
            maxLength={100}
            className="rounded-lg shadow-lg px-5 py-2 m-2 w-72 h-80 bg-slate-300 text-black"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            required={true}
            type={"textarea"}
            id={"description"}
          />
        </div>
        <div className="p-2">
          <label>Son Bitiş Tarihi</label>
          <Input
            className="rounded-lg shadow-lg px-5 py-2 m-2 text-lg border bg-slate-300 text-black "
            value={task.dueDate}
            type={"date"}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            required={true}
          />
        </div>
        <div className="p-2">
          <Modal
            task={task}
            id={id}
            modalsorusu={"Günceleme işlemini onaylıyor musunuz?"}
            className="bg-green-600 hover:bg-green-500 text font-bold py-2 px-6 z-50 rounded-lg text-white"
            text={"Güncelle"}
            fonksiyon={updateTask}
          />
        </div>
      </div>
    </>
  );
}
export default EditTask;
