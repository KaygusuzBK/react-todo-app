function TaskForm(task) {
  return (
    <form className="flex flex-column align-center justify-center border">
      <ul className="flex rounded-xl bg-gray-200 border border-black p-4 m-4">
        <li className="flex p-2">
          <label htmlFor="status">Status</label>
          <input type="checkbox" />
        </li>
        <li className="flex p-2">
          <label htmlFor="title">Title: </label>
          <h2 name="title">task.title</h2>
        </li>
        <li className="flex p-2">
          <label htmlFor="description">Description</label>
          <h2 id="description" name="description">
            task.description
          </h2>
        </li>
        <li className="flex p-2">
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value={"23.02.2024"} />
        </li>
        <div className="flex">
          <button className="px-4" type="submit">
            Edit
          </button>
          <button className="px-2">sil</button>
        </div>
      </ul>
    </form>
  );
}

export default TaskForm;
