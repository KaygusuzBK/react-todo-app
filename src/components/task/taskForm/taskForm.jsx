import { deleteTaskId } from "../../../services/task.js";
import Button from "../../button/button.jsx";
import Checkbox from "../../checkbox/CheckBox..jsx";
import classNames from "classnames";
import Modal from "../../modal/Modal.jsx";
import { getTasks } from "../../../services/task.js";

function deleteTask(id) {
  deleteTaskId(id);
}

function TaskForm({ task, className }) {
  return (
    <>
      <div className="items-center flex flex-col">
        <div className="flex justify-start items-center w-4/6 border shadow-md h-20 m-1 mix-blend-multiply bg-gray-200 hover:bg-gray-300">
          <Checkbox task={task} onSuccess={getTasks} className="h-16 m-2" />
          <div className="text-lg font-bold">{task.title}</div>
          <div className="text-lg p-3 max-h-20">{task.description}</div>
          <div className="text-lg p-3 font-bold">{task.dueDate}</div>
          <div className="text-lg p-3">
            <a
              className={classNames(
                "bg-green-600 text-white rounded-xl hover:bg-green-700 px-4 py-2 z-50"
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
              fonksiyon={deleteTask}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
