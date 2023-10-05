import { getTaskId, updateTask } from "../../services/task";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../components/task/form";

function EditTask() {
  let { id } = useParams();

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: false,
  });

  useEffect(() => {
    getTaskId(id).then(({ data }) => setTask(data));
  }, [getTaskId]);


  // useEffect(() => {
  //   if (rules[1]) {
  //     document.getElementById("description").style.border = "2px solid red";
  //   } else {
  //     document.getElementById("description").style.border = "2px solid green";
  //   }
  // }, [task.description]);

  // useEffect(() => {
  //   if (rules[2]) {
  //     document.getElementById("dueDate").style.border = "2px solid red";
  //   } else {
  //     document.getElementById("dueDate").style.border = "2px solid green";
  //   }
  // }, [task.dueDate]);

  // useEffect(() => {
  //   if (rules[0] || rules[1] || rules[2]) {
  //     updateBtn.style.display = "none";
  //   } else {
  //   }
  // }, [task.title, task.description, task.dueDate]);

  return (
    <>
      <Form
        task={task}
        setTask={setTask}
        header={"Task Düzenle"}
        modalText={"Task Düzenle"}
        modalSoru={"Task Düzenlensin mi?"}
        modalFunction={updateTask}
      />
    </>
  );
}
export default EditTask;
