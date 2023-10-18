import { createElement } from "react";
import propTypes from "prop-types";
function Button({ text, className, onClick, href }) {
  return (
    <>
      <button
        className={`rounded h-10 ${className}`}
        onClick={onClick}
        href={href}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
