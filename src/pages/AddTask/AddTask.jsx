import React, { useEffect } from "react";
import { useState } from "react";
import { pushTask } from "../../services//task.js";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/Button.jsx";
import classNames from "classnames";
import Form from "../../components/task/form/index.jsx";
import { memo } from "react";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  return (
    <>
      <Form task={task} setTask={setTask} />

      <div className="flex justify-center">
        <Button
          href={"/"}
          to={"/"}
          id="addTask"
          className={classNames(
            "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
            {
              "opacity-50": !(
                task.title.length >= 3 &&
                task.title.length <= 20 &&
                task.title !== "" &&
                task.description.length >= 3 &&
                task.description.length <= 100 &&
                task.description !== "" &&
                task.dueDate !== "" &&
                task.dueDate !== null
              ),
            }
          )}
          text="Task Ekle"
          onClick={() => {
            if (
              task.title.length >= 3 &&
              task.title.length <= 20 &&
              task.title !== "" &&
              task.description.length >= 3 &&
              task.description.length <= 100 &&
              task.description !== "" &&
              task.dueDate !== "" &&
              task.dueDate !== null
            )
              pushTask(task);
            else {
              alert("Lütfen tüm alanları doldurunuz.");
            }
          }}
        ></Button>
      </div>
    </>
  );
}
export default memo(AddTask);
