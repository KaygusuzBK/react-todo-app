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
      <div className="items-center justify-center flex flex-col text-center">
        <div className="flex justify-between items-center p-3 w-4/5 border shadow-md h-20 m-1 mix-blend-multiply bg-gray-200 hover:bg-gray-300">
          <Checkbox task={task} onSuccess={getTasks} className="w-1/3 h-5" />
          <div className="w-1/3 text-lg">{task.title}</div>
          <div className="w-1/3 text-lg">{task.description}</div>
          <div className="w-1/3 text-lg">{task.dueDate}</div>
          <div className="w-1/3">
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
              Text="Sil"
              id={task.id}
              task={task}
              fonksiyon={deleteTask}
            />
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}

export default TaskForm;
