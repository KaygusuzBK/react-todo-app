import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { updateTask, getTaskId } from "~/services/task.js";
import Input from "~/components/input/input.jsx";
import Modal from "~/components/modal/Modal.jsx";

function Form({ header, modalText, modalSoru, modalFunction }) {
  let { id } = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  useEffect(() => {
    if (id) {
      getTaskId(id).then((res) => {
        setTask(res.data);
      });
    }
  }, [id]);

  const isTitleValid = task.title.length >= 2 && task.title.length <= 20;
  const isDescriptionValid =
    task.description.length >= 2 && task.description.length <= 100;
  const isDueDateValid = task.dueDate.length >= 2;

  useEffect(() => {
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");
    const dueDateElement = document.getElementById("dueDate");

    if (titleElement) {
      titleElement.style.border = isTitleValid
        ? "2px solid green"
        : "2px solid red";
    }

    if (descriptionElement) {
      descriptionElement.style.border = isDescriptionValid
        ? "2px solid green"
        : "2px solid red";
    }

    if (dueDateElement) {
      dueDateElement.style.border = isDueDateValid
        ? "2px solid green"
        : "2px solid red";
    }

    const modalBtn = document.getElementById("modalBtn");

    if (modalBtn) {
      modalBtn.style.display =
        isTitleValid && isDescriptionValid && isDueDateValid ? "block" : "none";
    }
  }, [task.title, task.description, task.dueDate]);

  const handleModalButtonClick = () => {
    if (task.title && task.description && task.dueDate) {
      modalFunction(id, task);
    } else {
      alert("Lütfen tüm alanları doldurunuz.");
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl p-2 m-2 border">{header}</h1>
      <div className="p-2">
        <label className="text-xl">Başlık</label>
        <Input
          minLength={2}
          maxLength={20}
          className={`rounded-lg px-5 py-2 m-2 border-gray-500 text-black bg-slate-300`}
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
          className={`rounded-lg shadow-lg px-5 py-2 m-2 w-72 h-80 bg-slate-300 text-black`}
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
          className={`rounded-lg shadow-lg px-5 py-2 m-2 text-lg border bg-slate-300 text-black`}
          value={task.dueDate}
          type={"date"}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          required={true}
          id={"dueDate"}
        />
      </div>

      <div className="p-2 m-2">
        <Modal
          task={task}
          modalsorusu={modalSoru}
          className="bg-green-600 hover-bg-green-500 text font-bold py-2 px-6 z-50 rounded-lg text-white"
          text={modalText}
          fonksiyon={handleModalButtonClick}
          id="modalBtn"
        />
      </div>
    </div>
  );
}

export default memo(Form);
