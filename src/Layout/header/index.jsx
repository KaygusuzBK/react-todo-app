import Logo from "./logo/logo";
import Button from "../../components/button/Button";

function Header() {
  return (
    <>
      <header className="h-24 border-b shadow-xl bg-cyan-600  ">
        <div className="flex items-center justify-between h-full ">
          <div className="flex justify-between">
            <label className="text-white text-4xl p-2">Todo App</label>
            <Logo className="items-center justify-end" id="logo" />
          </div>
          <a
            className=" p-2 text-lg m-4 rounded-lg bg-rose-900 text-white hover:bg-rose-700 hover:text-white border-2 border-gray-900"
            href="/task-add"
          >
            TASK EKLE
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
