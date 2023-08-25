function Input({ placeholder, type, onChange, value, required }) {
  return (
    <>
      <div className="flex justify-end">
        <input
          required={required}
          className="border rounded shadow-md"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
}

export default Input;
