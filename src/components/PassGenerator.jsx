import { useState, useEffect } from 'react';
import Checkbox from './Checkbox';
import generatePassword from '../utilities/generatePassword';
import generateGradient from '../utilities/generateGradient';
import { IconContext } from 'react-icons';
import { HiOutlineClipboardCopy } from 'react-icons/hi';

let colorChart = {
  isReversedOptimized: 'rgb(251, 113, 133)',
  isDictOptimized: 'rgb(56, 189, 248)',
  isBothOptimized: 'rgb(167, 139, 250)',
  isUppercased: 'rgb(250, 204, 21)',
  isLeeted: 'rgb(52, 211, 153)',
  isDoubled: 'rgb(251 146 60)',
  isAddLoading: 'rgb(251 146 60)',
};

export default function PassGenerator() {
  const [opts, setOpts] = useState({
    isDictOptimized: false,
    isBothOptimized: false,
    isUppercased: true,
    isLeeted: false,
    isDoubled: false,
    isAddLoading: false,
  });
  const [submitGradient, setSubmitGradient] = useState({
    color: 'rgb(251, 113, 133)',
    gradient: '',
  });
  const [generatedPassword, setGeneratedPassword] = useState(
    generatePassword(
      opts.isDictOptimized,
      opts.isBothOptimized,
      opts.isUppercased,
      opts.isLeeted,
      opts.isDoubled
    )
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSubmitGradient(generateGradient(opts, colorChart));
    setGeneratedPassword(
      generatePassword(
        opts.isDictOptimized,
        opts.isBothOptimized,
        opts.isUppercased,
        opts.isLeeted,
        opts.isDoubled
      )
    );
  }, [opts]);

  useEffect(() => {
    if (opts.isAddLoading) {
      setLoading(true);
    }
  }, [generatedPassword]);

  useEffect(() => {
    loading && setTimeout(() => setLoading(false), 1000);
  }, [loading]);

  function handleOnClick(name) {
    if (name === 'isBothOptimized') {
      setOpts({
        ...opts,
        isBothOptimized: !opts.isBothOptimized,
        isDictOptimized: !opts.isBothOptimized,
      });
    } else if (name === 'isReverseOptimized') {
      setOpts({ ...opts, isDictOptimized: !opts.isDictOptimized });
    } else {
      if (name === 'isAddLoading' && !opts.isAddLoading) {
        setLoading(true);
      }
      setOpts({ ...opts, [name]: !opts[name] });
    }
  }

  function handleOnSubmit() {
    setGeneratedPassword(
      generatePassword(
        opts.isDictOptimized,
        opts.isBothOptimized,
        opts.isUppercased,
        opts.isLeeted,
        opts.isDoubled
      )
    );
  }

  return (
    <div className="flex flex-col max-w-2xl">
      <p className="m-4 mb-2 mt-0 text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-sky-400 font-semibold">
        Aardvark Secure Secret Password Generator
      </p>
      <div className="border-2 border-cyan-400 p-2 m-4 mt-0 rounded-lg">
        <Checkbox
          value={opts.isBothOptimized || !opts.isDictOptimized}
          name="isReverseOptimized"
          desc="Optimize for Reverse Dictionary Attacks"
          long_desc="By optimizing your password for reverse dictionary attacks, you allow other users to be hacked first. Outrunning the slowest of the group and whatnot."
          handleOnClick={handleOnClick}
          disabled={opts.isBothOptimized}
        />
        <Checkbox
          value={opts.isDictOptimized}
          name="isDictOptimized"
          desc="Optimize for Regular Dictionary Attacks"
          long_desc="Sometimes it is better to simply brace for what's common. We can barely understand regular dictionary attacks, why bother with the reverse?"
          handleOnClick={handleOnClick}
          disabled={opts.isBothOptimized}
        />
        <hr className="border-gray-500 m-2" />
        <Checkbox
          value={opts.isBothOptimized}
          name="isBothOptimized"
          desc="Optimize for both types of Dictionary Attacks"
          long_desc="Things are best when used in moderation -- or so we tell ourselves. This is for those of us out there who enjoy the idea of commitment without actually committing."
          handleOnClick={handleOnClick}
        />
      </div>
      <div className="border-2 border-cyan-400 p-2 m-4 mt-0 rounded-lg">
        <Checkbox
          value={opts.isUppercased}
          name="isUppercased"
          desc="Include Uppercase Letters"
          long_desc="Uppercase some letters for better security, but because it's still the same character, they're easier to remember."
          example="AARDVARKSARENOTPIGS"
          handleOnClick={handleOnClick}
        />
      </div>
      <div className="border-2 border-cyan-400 p-2 m-4 mt-0 rounded-lg">
        <Checkbox
          className="border-emerald-400"
          value={opts.isLeeted}
          name="isLeeted"
          desc="Include Leeted Letters"
          long_desc="Leet speak your password so AI robots can't read it. Post your leeted password on Tumblr for massive street creds."
          example="i, l, 1, L, o, 0, O"
          handleOnClick={handleOnClick}
        />
      </div>
      <div className="border-2 border-orange-400 p-2 m-4 mt-0 rounded-lg">
        <Checkbox
          className="border-orange-400"
          value={opts.isDoubled}
          name="isDoubled"
          desc="Double the Security"
          price="$7.99"
          long_desc="For a low cost of $7.99 biweekly subscription every month, double the 'hashing rate' of your password. Just like the Double Quarter Pounder, two Deadpool films, and at least two front teeth, things are better when they're doubled. Except condoms. Please don't double-layer your condoms."
          handleOnClick={handleOnClick}
        />
      </div>
      <div className="border-2 border-orange-400 p-2 m-4 mt-0 rounded-lg">
        <Checkbox
          className="border-orange-400"
          value={opts.isAddLoading}
          name="isAddLoading"
          desc="Slow Down the Process"
          price="$7.99"
          long_desc="For a low cost of $7.99 biweekly subscription every month, double the 'hashing rate' of your password. Just like the Double Quarter Pounder, two Deadpool films, and at least two front teeth, things are better when they're doubled. Except condoms. Please don't double-layer your condoms."
          handleOnClick={handleOnClick}
        />
      </div>
      <button
        className={`rounded-lg m-4 mt-0 p-2 py-4 font-bold text-xl text-white transition ease-in-out hover:shadow-lg active:shadow-none active:scale-95 hover:shadow-gray-800`}
        onClick={() => handleOnSubmit()}
        style={{
          backgroundColor: submitGradient.color,
          backgroundImage: submitGradient.gradient,
        }}
      >
        {loading && <span>Loading</span>}
        Re-Generate Password
      </button>
      <div className="relative flex justify-center items-center h-16 w-100 rounded-lg mx-4 bg-gray-800">
        <p className="animate-pulse text-2xl font-mono text-white">
          {generatedPassword}
        </p>
        <IconContext.Provider value={{ color: 'grey', className: 'h-6 w-6' }}>
          <button
            onClick={() => navigator.clipboard.writeText(generatedPassword)}
            className="absolute right-4 p-2 rounded-lg bg-gray-900 hover:bg-gray-700 active:bg-gray-900"
          >
            <HiOutlineClipboardCopy />
          </button>
        </IconContext.Provider>
      </div>
      <p className="ml-4 mt-2 text-left opacity-25 italic text-sm text-white">
        * Remember your password by simply memorizing it.
      </p>
      {generatedPassword && opts.isDoubled && (
        <p className="ml-4 text-left opacity-25 italic text-sm text-white">
          ** We've been told that our developers don't know how to code a
          shopping cart, so I guess it's on the house.
        </p>
      )}
    </div>
  );
}
