import { useState } from "react";
import Tasks from "../../pages/Home";
import { updateTask } from "../../services/task";

function Checkbox({ task, className }) {
  return (
    <>
      <input
        type="checkbox"
        defaultChecked={task.status}
        onChange={() => updateTask(task.id, { ...task, status: !task.status })}
        className={className}
      />
    </>
  );
}

export default Checkbox;
