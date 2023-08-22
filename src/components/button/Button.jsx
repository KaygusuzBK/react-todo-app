import { createElement } from "react";
import propTypes from "prop-types";
function Button({ text, as }) {
  createElement(as, {
    className: "rounded h-10",
    children: text,
  });
  return (
    <>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        as={"button"}
      >
        Add Task
      </button>
    </>
  );
}

export default Button;
