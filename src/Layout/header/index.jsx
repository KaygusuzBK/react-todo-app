import Logo from "./logo/logo";

function Header() {
  return (
    <>
      <header className="h-16 border-b border-zinc-800 ">
        <div className="flex items-center justify-between ">
          <div className="flex justify-between">
            <label className="text-2xl p-3">Todo App</label>
            <Logo />
          </div>
          <a
            className="p-2 m-3 rounded bg-gray-300 text-black hover:bg-gray-800 hover:text-white hover:border-gray-8 border-2 border-gray-800"
            href="/add-task"
          >
            Add Task
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
