import Logo from "./logo/logo";
import Button from "../../components/button/button";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="h-24 border-b shadow-xl bg-cyan-600  ">
        <div className="flex items-center justify-between h-full ">
          <div className="flex justify-center items-center w-64">
            <NavLink to="/" className="text-white text-4xl p-2" >Todo App</NavLink>
            <Logo className="items-center justify-end" id="logo" />
          </div>
          <a
            className=" p-2 text-lg m-4 rounded-lg bg-yellow-500 text-black hover:bg-yellow-600 hover:text-white border-2 border-gray-900"
            href="/task-add"
          >
            TASK EKLE
          </a>

          <div className="flex w-64 justify-center items-center">
            <a
              className="bg-red-700 text-white p-2 m-4 rounded-lg hover:bg-red-800 hover:text-white border-2 border-gray-900"
              href={"/completed-tasks"}
            >
              Tamamlananlar
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
