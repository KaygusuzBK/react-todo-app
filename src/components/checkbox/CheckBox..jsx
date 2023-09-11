import { useState } from "react";
import Tasks from "../../pages/Home";
import { updateTask } from "../../services/task";

function Checkbox({ task, className, onSuccess, onError }) {
  return (
    <>
      <input
        type="checkbox"
        defaultChecked={task.status}
        onChange={() =>
          updateTask(task.id, { ...task, status: !task.status })
            .then(onSuccess)
            .catch(onError)
        }
        className={className}
      />
    </>
  );
}

export default Checkbox;
