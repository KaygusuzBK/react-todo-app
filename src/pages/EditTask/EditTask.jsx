import { getTaskId, updateTask } from "../../services/task";
import { Link, useHref, useParams } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { useState, useEffect } from "react";

function EditTask() {
  let { id } = useParams();

  const [task, setTask] = useState({});

  useEffect(() => {
    getTaskId(id).then(({ data }) => setTask(data));
  }, [getTaskId]);

  return (
    <>
      <div className="text-center ">
        <h1 className="text-3xl  p-2 border">SA AS</h1>
        <div className="p-2">
          <label>TİTLE</label>
          <Input
            className="rounded-lg shadow-lg"
            placeholder={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div>
          <label>Description</label>
          <Input
            className="rounded-lg shadow-lg"
            placeholder={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <div>
          <label>Due Date</label>
          <Input
            className="rounded-lg shadow-lg "
            value={task.dueDate}
            type={"date"}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          />
        </div>
        <div className="p-2">
          <Button
            className="bg-rose-600 hover:bg-green-500 text-white font-bold py-2 px-6 "
            text={"GÜNCELLE"}
            onClick={() => {
              updateTask(id, task);
            }}
            Link={"/"}
          />
        </div>
      </div>
    </>
  );
}
export default EditTask;
