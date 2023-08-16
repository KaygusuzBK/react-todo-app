import Logo from "./logo/logo";

function Header() {
  return (
    <>
      <div className="h-14 border-b border-zinc-300 flex">
        {/* <Logo /> */}
        <a href="/" className="flex items-center">
          Tasklar{" "}
        </a>
        <img
          src="https://fastly.picsum.photos/id/717/55/35.jpg?hmac=Z8TM8FWj_tBCL5O-MzUyDqaMyhiWDbROYFOk9Go37OM"
          alt="add"
          className="w-5 h-5 mx-2"
        />
        <a href="/add-task" className="flex items-center">
          Task Ekle
        </a>
      </div>
    </>
  );
}

export default Header;
