import { useState } from "react";
import { updateTask } from "../../services/task";

function Modal({ modalsorusu, text, id, task, fonksiyon, className }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className={className}>
        {text}
      </button>
      {modal && (
        <div className="modal z-50">
          <div className="h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
            <div className="bg-slate-100  rounded-3xl w-1/2 ">
              <div className="h-full border border-black m-3 p-2 flex items-center justify-center rounded-xl bg-white text-black">
                <h1 className="h-24 z-50">{modalsorusu}</h1>
              </div>
              <div className="border  rounded-3xl m-3 p-4 flex items-center justify-center bg-slate-100 text-black">
                <button
                  className="bg-blue-500 text-white rounded-lg p-2 m-2 w-16"
                  onClick={() => {
                    toggleModal();
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
