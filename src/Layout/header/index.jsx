import Logo from "./logo/logo";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="h-24 border-b shadow-xl bg-cyan-900 bg-opacity-95 p-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex justify-center items-center w-60 border border-cyan-100 rounded-full bg-cyan-100 bg-opacity-30 m-4">
            <NavLink to="/" className="text-black text-3xl p-2">
              Todo App
            </NavLink>
            <Logo className="items-center justify-end" id="logo" />
          </div>
          <NavLink
            to={"/task-add"}
            className=" p-2 text-lg m-4 rounded-lg bg-yellow-500 text-black hover:bg-yellow-600 hover:text-white border-2 border-gray-900"
          >
            TASK EKLE
          </NavLink>

          <div className="flex w-64 justify-end items-center">
            <NavLink
              to={"/completed-tasks"}
              className="bg-red-700 text-white p-2 m-4 rounded-lg hover:bg-red-800 hover:text-white border-2 border-gray-900"
            >
              Tamamlananlar
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
