import { useEffect } from "react";
import Modal from "../modal/Modal";

function Input({
  id,
  placeholder,
  type,
  onChange,
  value,
  minLength,
  maxLength,
  required,
  className,
}) {
  if (type === "textarea") {
    return (
      <>
        <div>
          <textarea
            id={id}
            className={className}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <input
          id={id}
          className={className}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      </div>
    </>
  );
}

export default Input;
