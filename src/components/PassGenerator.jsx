import { useState, useEffect } from 'react';
import Button from './Button';
import generatePassword from '../generatePassword';
import generateGradient from '../generateGradient';

let colorChart = {
  isReversedOptimized: 'rgb(251, 113, 133)',
  isDictOptimized: 'rgb(56, 189, 248)',
  isBothOptimized: 'rgb(167, 139, 250)',
  isUppercased: 'rgb(250, 204, 21)',
  isLeeted: 'rgb(52, 211, 153)',
};

export default function PassGenerator() {
  const [opts, setOpts] = useState({
    isDictOptimized: false,
    isBothOptimized: false,
    isUppercased: false,
    isLeeted: false,
  });
  const [submitGradient, setSubmitGradient] = useState({
    color: 'rgb(251, 113, 133)',
    gradient: '',
  });
  const [generatedPassword, setGeneratedPassword] = useState('');

  useEffect(() => {
    setSubmitGradient(generateGradient(opts, colorChart));
  }, [opts]);

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
      setOpts({ ...opts, [name]: !opts[name] });
    }
  }

  function handleOnSubmit() {
    setGeneratedPassword(
      generatePassword(
        opts.isDictOptimized,
        opts.isBothOptimized,
        opts.isUppercased,
        opts.isLeeted
      )
    );
  }

  return (
    <>
      <div className="flex flex-col max-w-xl">
        <div className="border-2 border-sky-400 p-2 m-4 mt-0 rounded-lg">
          <Button
            value={opts.isBothOptimized || !opts.isDictOptimized}
            name="isReverseOptimized"
            desc="Optimize for Reverse Dictionary Attacks"
            long_desc="By optimizing your password for reverse dictionary attacks, you allow other users to be hacked first. Outrunning the slowest of the group and whatnot."
            handleOnClick={handleOnClick}
            disabled={opts.isBothOptimized}
          />
          <Button
            value={opts.isDictOptimized}
            name="isDictOptimized"
            desc="Optimize for Regular Dictionary Attacks"
            long_desc="Sometimes it is better to simply brace for regular dictionary attacks. We can barely understand regular dictionary attacks, why bother with the reverse?"
            handleOnClick={handleOnClick}
            disabled={opts.isBothOptimized}
          />
          <hr className="border-gray-400 m-2" />
          <Button
            value={opts.isBothOptimized}
            name="isBothOptimized"
            desc="Optimize for Both types of Dictionary Attacks"
            long_desc="Things are best when used in moderation -- or so we tell ourselves. This is for those of us out there who enjoy the idea of commitment without actually committing."
            handleOnClick={handleOnClick}
          />
        </div>
        <div className="border-2 border-sky-400 p-2 m-4 mt-0 rounded-lg">
          <Button
            value={opts.isUppercased}
            name="isUppercased"
            desc="Include Uppercase Letters"
            long_desc="Uppercase some letters for better security while using the same character so it's easier to remember, lest we forget."
            handleOnClick={handleOnClick}
          />
        </div>
        <div className="border-2 border-sky-400 p-2 m-4 mt-0 rounded-lg">
          <Button
            className="border-emerald-400"
            value={opts.isLeeted}
            name="isLeeted"
            desc="Include Leeted Letters"
            long_desc="Leet speak your password so AI robots can't read it. Post your leeted password on Tumblr for massive street creds."
            handleOnClick={handleOnClick}
          />
        </div>
        <button
          className={`rounded-lg m-4 mt-0 p-2 font-bold text-white transition ease-in-out`}
          onClick={() => handleOnSubmit()}
          style={{
            backgroundColor: submitGradient.color,
            backgroundImage: submitGradient.gradient,
          }}
        >
          Submit
        </button>
      </div>
      <p>{generatedPassword}</p>
    </>
  );
}
