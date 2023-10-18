import { useEffect, useState } from "react";
import { pushTask } from "../../services//task.js";
import Form from "../../components/task/form/index.jsx";
import { memo } from "react";
import { NavLink } from "react-router-dom";

function AddTask() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  return (
    <>
      <Form
        task={task}
        setTask={setTask}
        header={"Task Ekle"}
        modalText={"Task Ekle"}
        modalSoru={"Task Eklensin mi?"}
        modalFunction={pushTask}
        to={"/"}
      />
    </>
  );
}
export default memo(AddTask);
