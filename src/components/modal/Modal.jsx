import { useState } from "react";
import Button from "../button/button";
import { updateTask } from "../../services/task";

function Modal({ modalsorusu, Text, id }) {
  const [task, setTask] = useState({});

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        {Text}
      </button>
      {modal && (
        <div className="modal">
          <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-60">
            <div className="bg-slate-100 rounded shadow-xl rounded-3xl w-1/2">
              <div className=" h-20 h-full border border-black m-3 flex justify-center items-center rounded-xl">
                <h1 className="">{modalsorusu}</h1>
              </div>
              <div className="border border-black rounded-3xl m-3 p-4">
                <button
                  className="bg-blue-500 text-white rounded-lg p-2 m-2 w-16"
                  onClick={() => {
                    updateTask(id, task);
                  }}
                >
                  Evet
                </button>
                <button
                  className="bg-red-500 text-white rounded-lg p-2 m-2 w-16"
                  onClick={toggleModal}
                >
                  Hayır
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
