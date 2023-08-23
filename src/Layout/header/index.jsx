import Logo from "./logo/logo";
import Button from "../../components/button/Button";

function Header() {
  return (
    <>
      <header className="h-18 border-b shadow-xl bg-cyan-800  ">
        <div className="flex items-center justify-between ">
          <div className="flex justify-between">
            <label className="text-white text-2xl p-2">Todo App</label>
            <Logo id="logo" />
          </div>
          <a
            className="p-2 m-3 rounded-lg bg-rose-800 text-white hover:bg-rose-500 hover:text-white border-2 border-gray-800"
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
