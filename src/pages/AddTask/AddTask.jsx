import React from "react";
import { useState, useEffect } from "react";
import { pushTask } from "../../services//task.js";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/button.jsx";

function AddTask() {
  const [task, setTask] = useState({});

  useEffect(() => {
    console.log("task", task);
    setTask({
      title: "title",
      description: "description",
      date: "date",
    });
  }, []);

  return (
    <>
      <div className="flex p-3 justify-center text-center">
        <div className="grid gap-2 grid-cols-2">
          <h1 className="text-xl font-bold ">Add Task:</h1>
          <Input placeholder="Title" />
          <h1 className="text-xl font-bold ">Description:</h1>
          <Input placeholder="Description" type="textarea"></Input>
          <h1 className="text-xl font-bold">Date:</h1>
          <Input type="date" />
        </div>
      </div>

      <div className="flex justify-center">
        <Button text="Taskı ekle" />
      </div>
    </>
  );
}
export default AddTask;
