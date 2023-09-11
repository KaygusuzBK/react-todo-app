import React from "react";
import { useState } from "react";
import { pushTask } from "../../services//task.js";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/Button.jsx";
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
      <div className="flex p-3 justify-center text-center m-4">
        <div className="grid gap-2 grid-cols-2">
          <h1 className="text-xl font-bold ">Task Başlığı:</h1>
          <Input
            placeholder="Title"
            minLength="3"
            maxLength="20"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required={true}
          ></Input>
          <h1 className="text-xl font-bold ">Taskın İçeriği:</h1>
          <Input
            placeholder="Description"
            type="textarea"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          ></Input>
          <h1 className="text-xl font-bold">Son Tarihi:</h1>
          <Input
            data-date-format="DD MMMM YYYY"
            type="date"
            id="dueDate"
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          ></Input>
        </div>
      </div>

      <div className="flex justify-center">
        <>
          <Button
            className="bg-green-500 text-white p-2 m-2 hover:bg-green-700 rounded-lg"
            text="Task Ekle"
            as="button"
            onClick={() => {
              pushTask(task);
            }}
          ></Button>
        </>
      </div>
    </>
  );
}
export default memo(AddTask);
