export default function Checkbox({
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
        className={`flex shrink-0 justify-center items-center mr-4 mt-1.5 w-14 h-14 border-4 rounded-lg dark:rounded-xl transition ease-in-out ${
          disabled
            ? 'border-gray-300 dark:border-gray-600'
            : `border-gray-500 dark:border-gray-200 ${colorConfig[name].borderHover}`
        }`}
      >
        <button
          className={`h-10 w-10 p-3 m-1 rounded-md transition ease-in-out ${
            disabled
              ? 'bg-gray-300 dark:bg-gray-600'
              : `${
                  value && `bg-gradient-to-r ${colorConfig[name].gradient}`
                } hover:shadow-md active:shadow-inner`
          }`}
          onClick={() => handleOnClick(name)}
          disabled={disabled}
        />
      </div>
      <section className="flex flex-col">
        <p
          className={`font-bold text-lg ${
            disabled
              ? 'text-gray-300 dark:text-gray-600'
              : `${
                  value
                    ? `${colorConfig[name].textColor}`
                    : 'text-gray-500 dark:text-gray-200'
                }`
          }`}
        >
          {desc}
        </p>
        <p className="text-gray-400 dark:text-gray-500">{long_desc}</p>
        {example && (
          <p className="text-gray-500 italic mt-0.5 dark:text-gray-600">
            Examples: {example}
          </p>
        )}
      </section>
    </section>
  );
}
