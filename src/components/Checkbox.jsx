export default function Checkbox({
  value,
  name,
  desc,
  long_desc,
  handleOnChange,
  disabled,
}) {
  return (
    <div>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={() => handleOnChange(name)}
        disabled={disabled}
      />
      <label htmlFor={name}>{desc}</label>
      <p>{long_desc}</p>
    </div>
  );
}
