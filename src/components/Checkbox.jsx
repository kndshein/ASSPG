export default function Checkbox({ value, name, desc, handleOnChange }) {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={() => handleOnChange(name)}
      />
      <label htmlFor={name}>{desc}</label>
    </>
  );
}
