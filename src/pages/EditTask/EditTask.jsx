import React from "react";
import TaskForm from "../../components/task/taskForm/taskForm";
import { getTaskId } from "../../services/task";
import { useParams } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

function EditTask() {
  let { id } = useParams();


  React.useEffect(() => {
    getTaskId(id).then(({ data }) => setTask(data));
  }, [id]);

  return (
    <>
      <div className="text-center ">
        <h1 className="text-3xl  p-2 border">SA AS</h1>
        <div className="p-2">
          <label>TİTLE</label>
          <Input className="rounded-lg shadow-lg" value={task.title} />
        </div>
        <div>
          <label>Description</label>
          <Input className="rounded-lg shadow-lg" value={task.description} />
        </div>
        <div>
          <label>Due Date</label>
          <Input className="rounded-lg shadow-lg" value={task.dueDate} />
        </div>
        <div className="p-2">
          <Button
            className="bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
            text={"GÜNCELLE"}
          />
        </div>
      </div>
    </>
  );
}
export default EditTask;
