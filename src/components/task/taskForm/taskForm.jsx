import { deleteTaskId } from "../../../services/task.js";
import { useEffect } from "react";
import Button from "../../button/button.jsx";
import Checkbox from "../../checkbox/CheckBox..jsx";
import classNames from "classnames";
import Modal from "../../modal/Modal.jsx";
import { getTasks } from "../../../services/task.js";

function deleteTask() {
  deleteTaskId(id);
  getTasks().then(({ data }) => {
    const tasks = data.filter((task) => task.status === false);
    setTasks(tasks);
  });
}

function test() {
  console.log("test");
}

function TaskForm({ task }) {
  // useEffect(() => {
  //   if (task.title.length < 3 || task.title.length > 20 || task.title === "") {
  //     document.getElementById("title").style.borderColor = "red";
  //   } else {
  //     document.getElementById("title").style.borderColor = "green";
  //   }
  // }, [task.title]);

  // useEffect(() => {
  //   if (task.dueDate === "" || task.dueDate === null) {
  //     document.getElementById("dueDate").style.borderColor = "red";
  //   } else {
  //     document.getElementById("dueDate").style.borderColor = "green";
  //   }
  // }, [task.dueDate]);

  // useEffect(() => {
  //   if (
  //     task.description.length < 3 ||
  //     task.description.length > 20 ||
  //     task.description === ""
  //   ) {
  //     document.getElementById("description").style.borderColor = "red";
  //   } else {
  //     document.getElementById("description").style.borderColor = "green";
  //   }
  // }, [task.description]);

  return (
    <>
      <div className="items-center flex flex-col">
        <div className="flex justify-start items-center w-4/6 border shadow-md h-20 m-1 mix-blend-multiply bg-gray-200 hover:bg-gray-300">
          <Checkbox
            task={task}
            onSuccess={getTasks}
            className="w-5 h-4 ml-3 m-2"
          />
          <div className="text-lg flex font-bold w-1/12">
            {task.title === "" ? "Başlık belirtilmedi" : task.title}
          </div>
          <div className="text-lg flex p-3 max-h-20 w-6/12  overflow-x-auto ">
            {task.description === ""
              ? "Açıklama belirtilmedi"
              : task.description}
          </div>
          <div className="text-lg flex p-3 items-center justify-center font-bold w-2/12">
            {task.dueDate === null ? "Tarih belirtilmedi" : task.dueDate}
          </div>
          <div className="text-lg flex p-3 items-center justify-center font-bold ">
            <a
              className={classNames(
                "bg-green-600 text-white rounded-xl hover:bg-green-700 px-4 py-2 "
              )}
              text="Düzenle"
              href={`/task-edit/${task.id}`}
            >
              Düzenle
            </a>
            <Modal
              className="bg-red-700 text-white rounded-xl hover:bg-red-900 ml-2 px-4 py-2 z-50"
              modalsorusu="Silmek istediğinize emin misiniz?"
              text="Sil"
              id={task.id}
              task={task}
              fonksiyon={test()}
              onSuccess={getTasks}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
