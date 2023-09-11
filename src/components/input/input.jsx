function Input({
  placeholder,
  type,
  onChange,
  value,
  checked,
  minLength,
  maxLength,
  required,
}) {
  return (
    <>
      <div>
        <input
          className="border rounded shadow-md"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
          checked={checked}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      </div>
    </>
  );
}

export default Input;
