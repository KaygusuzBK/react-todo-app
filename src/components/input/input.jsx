function Input({
  placeholder,
  type,
  onChange,
  value,
  checked,
  minLength,
  maxLength,
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
        />
      </div>
    </>
  );
}

export default Input;
