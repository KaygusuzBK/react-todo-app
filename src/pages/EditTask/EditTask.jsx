import { getTaskId, updateTask } from "../../services/task";
import { Link, useHref, useParams } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useState, useEffect, useInsertionEffect } from "react";
import Modal from "../../components/modal/Modal";
var title = document.getElementById("title");
var description = document.getElementById("description");
var dueDate = document.getElementById("dueDate");
var updateBtn = document.getElementById("updateTask");

function EditTask() {
  let { id } = useParams();

  const [task, setTask] = useState({});

  const rules = [
    task.title < 2 || task.title > 20,
    task.description < 2 || task.description > 100,
    task.dueDate < 2,
  ];

  useEffect(() => {
    getTaskId(id).then(({ data }) => setTask(data));
  }, [getTaskId]);

  useEffect(() => {
    if (rules[0]) {
      document.getElementById("title").style.border = "2px solid red";
    } else {
      document.getElementById("title").style.border = "2px solid green";
    }
  }, [task.title]);

  useEffect(() => {
    if (rules[1]) {
      document.getElementById("description").style.border = "2px solid red";
    } else {
      document.getElementById("description").style.border = "2px solid green";
    }
  }, [task.description]);

  useEffect(() => {
    if (rules[2]) {
      document.getElementById("dueDate").style.border = "2px solid red";
    } else {
      document.getElementById("dueDate").style.border = "2px solid green";
    }
  }, [task.dueDate]);

  useEffect(() => {
    if (rules[0] || rules[1] || rules[2]) {
      updateBtn.style.display = "none";
    } else {

    }
  }, [task.title, task.description, task.dueDate]);

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
            id={"dueDate"}
          />
        </div>z
        <div className="p-2 m-2">
          <Modal
            task={task}
            id={updateTask}
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
