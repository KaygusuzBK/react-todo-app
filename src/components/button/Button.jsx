import { createElement } from "react";
import propTypes from "prop-types";
function Button({ text, className, onClick }) {
  return (
    <>
      <button
        as={"button"}
        className={`rounded h-10 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
