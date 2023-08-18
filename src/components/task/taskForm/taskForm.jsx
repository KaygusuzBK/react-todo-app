function TaskForm(id, title, description, dueDate, status) {
  return (
    <form className="flex flex-column align-center justify-center border">
      <ul className="flex rounded-xl bg-gray-200 border border-black p-4 m-4">
        <li>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={title} />
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
          />
        </li>
        <li>
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" id="dueDate" name="dueDate" value={dueDate} />
        </li>
        <li>
          <label htmlFor="status">Status</label>
          <input type="text" id="status" name="status" value={status} />
        </li>
        <div className="flex">
          <button className="px-4" type="submit" >Edit</button>
          <button className="px-2">sil</button>
        </div>
      </ul>
    </form>
  );
}

export default TaskForm;
