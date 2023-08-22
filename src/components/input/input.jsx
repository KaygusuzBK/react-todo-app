function Input({ placeholder, type, onChange, value }) {
  return (
    <>
      <div className="flex justify-end">
        <input
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
