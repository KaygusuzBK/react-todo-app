import React, { useEffect } from "react";
import { useState } from "react";
import { pushTask } from "../../services//task.js";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/button.jsx";
import { memo } from "react";
import classNames from "classnames";


function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  useEffect(() => {
    if (task.title.length < 3 || task.title.length > 20 || task.title === "") {
      document.getElementById("title").style.borderColor = "red";
    } else {
      document.getElementById("title").style.borderColor = "green";
    }
  }, [task.title]);

  useEffect(() => {
    if (task.dueDate === "" || task.dueDate === null) {
      document.getElementById("dueDate").style.borderColor = "red";
    } else {
      document.getElementById("dueDate").style.borderColor = "green";
    }
  }, [task.dueDate]);

  useEffect(() => {
    if (
      task.description.length < 3 ||
      task.description.length > 20 ||
      task.description === ""
    ) {
      document.getElementById("description").style.borderColor = "red";
    } else {
      document.getElementById("description").style.borderColor = "green";
    }
  }, [task.description]);

  return (
    <>
      <div className="flex p-3 justify-center text-center m-4">
        <div className="grid gap-2 grid-cols-2">
          <h1 className="text-xl font-bold ">Task Başlığı:</h1>
          <Input
            placeholder="title"
            minLength="3"
            maxLength="20"
            onChange={(e) => setTask({ ...task, title: e.target.value })}
            required={true}
            id="title"
            className={"border-2 border-gray-500 p-2 rounded-lg"}
          ></Input>

          <h1 className="text-xl font-bold ">Taskın İçeriği:</h1>
          <Input
            placeholder="description"
            type="textarea"
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className={"border-2 border-gray-500 p-2 rounded-lg h-56"}
            id={"description"}
          ></Input>
          <h1 className="text-xl font-bold">Son Tarihi:</h1>
          <Input
            data-date-format="DD MMMM YYYY"
            type="date"
            id="dueDate"
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            className={"border-2 border-gray-500 p-2 rounded-lg"}
          ></Input>
        </div>
      </div>

      <div className="flex justify-center">
        <>
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
        </>
      </div>
    </>
  );
}
export default memo(AddTask);
