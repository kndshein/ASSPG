export default function Button({
  value,
  name,
  desc,
  long_desc,
  handleOnClick,
  disabled,
}) {
  return (
    <section className="flex">
      <div
        className="m-3 border-sky-500 border-4 rounded-lg hover:border-sky-700"
        style={{ borderColor: disabled && 'grey' }}
      >
        <button
          className={`flex shrink-0 w-12 h-12 p-3 m-1 rounded-md transition ease-in-out ${
            value ? 'bg-gradient-to-r from-cyan-400 to-sky-400' : ''
          }  disabled:opacity-75 disabled:bg-gray-500 hover:shadow-lg`}
          style={{
            backgroundColor: disabled && 'grey',
            backgroundImage: disabled && 'none',
          }}
          onClick={() => handleOnClick(name)}
          disabled={disabled}
        />
      </div>
      <section className="flex flex-col justify-center">
        <p className="font-bold">{desc}</p>
        <p className="text-gray-700">{long_desc}</p>
      </section>
    </section>
  );
}
