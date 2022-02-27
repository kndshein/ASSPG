export default function Button({
  value,
  name,
  desc,
  long_desc,
  handleOnClick,
  disabled,
  example,
}) {
  const colorConfig = {
    isReverseOptimized: {
      border: 'border-rose-400',
      borderHover: 'hover:border-rose-400',
      gradient: 'from-fuchsia-400 to-rose-400',
      textColor: 'text-rose-500',
    },
    isDictOptimized: {
      border: 'border-sky-400',
      borderHover: 'hover:border-sky-400',
      gradient: 'from-sky-400 to-indigo-400',
      textColor: 'text-sky-500',
    },
    isBothOptimized: {
      border: 'border-violet-400',
      borderHover: 'hover:border-violet-400',
      gradient: 'from-fuchsia-400 to-violet-400',
      textColor: 'text-violet-500',
    },
    isUppercased: {
      border: 'border-yellow-400',
      borderHover: 'hover:border-yellow-400',
      gradient: 'from-yellow-400 to-orange-400',
      textColor: 'text-yellow-500',
    },
    isLeeted: {
      border: 'border-emerald-400',
      borderHover: 'hover:border-emerald-400',
      gradient: 'from-lime-400 to-emerald-400',
      textColor: 'text-emerald-500',
    },
  };

  return (
    <section className="flex p-2">
      <div
        className={`flex shrink-0 justify-center items-center mr-4 mt-1.5 w-14 h-14 border-gray-500 border-4 rounded-lg transition ease-in-out ${colorConfig[name].borderHover}`}
        style={{ borderColor: disabled && 'lightgrey' }}
      >
        <button
          className={`h-10 w-10 p-3 m-1 rounded-md transition ease-in-out ${
            value && `bg-gradient-to-r ${colorConfig[name].gradient}`
          } ${!disabled && 'hover:shadow-lg'}`}
          style={{
            backgroundColor: disabled && 'lightgrey',
            backgroundImage: disabled && 'none',
          }}
          onClick={() => handleOnClick(name)}
          disabled={disabled}
        />
      </div>
      <section className="flex flex-col">
        <p
          className={`font-bold ${
            value ? `${colorConfig[name].textColor}` : 'text-gray-500'
          }`}
          style={{ color: disabled && 'lightgrey' }}
        >
          {desc}
        </p>
        <p className="text-gray-400">{long_desc}</p>
        {example && <p className="text-gray-400 italic">Examples: {example}</p>}
      </section>
    </section>
  );
}
