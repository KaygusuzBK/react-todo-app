function Input({
  placeholder,
  type,
  onChange,
  value,
  minLength,
  maxLength,
  required,
  className,
}) {
  return (
    <>
      <div>
        <input
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
