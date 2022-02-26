import { useState } from 'react';
import Checkbox from './Checkbox';
import generatePassword from '../generatePassword';

export default function PassGenerator() {
  const [opts, setOpts] = useState({
    isReverseDictOptimized: true,
    isDictOptimized: false,
    isUppercased: false,
    isLeeted: false,
    isBothOptimized: false,
  });
  const [generatedPassword, setGeneratedPassword] = useState('');

  function handleOnChange(name) {
    if (name === 'isBothOptimized') {
      if (opts.isBothOptimized) {
        setOpts({
          ...opts,
          isBothOptimized: false,
          isReverseDictOptimized: true,
          isDictOptimized: false,
        });
      } else {
        setOpts({
          ...opts,
          isBothOptimized: true,
          isReverseDictOptimized: true,
          isDictOptimized: true,
        });
      }
    } else if (
      name === 'isDictOptimized' ||
      name === 'isReverseDictOptimized'
    ) {
      setOpts({
        ...opts,
        isReverseDictOptimized: !opts.isReverseDictOptimized,
        isDictOptimized: !opts.isDictOptimized,
      });
    } else {
      setOpts({ ...opts, [name]: !opts[name] });
    }
  }

  function handleOnSubmit(evt) {
    evt.preventDefault();
    setGeneratedPassword(
      generatePassword(
        opts.isReverseDictOptimized,
        opts.isDictOptimized,
        opts.isUppercased,
        opts.isLeeted
      )
    );
  }

  return (
    <div>
      <form onSubmit={(evt) => handleOnSubmit(evt)} className="flex flex-col">
        <Checkbox
          value={opts.isReverseDictOptimized}
          name="isReverseDictOptimized"
          desc="Optimize for Reverse Dictionary Attacks"
          long_desc="By optimizing your password for reverse dictionary attacks, you allow other users to be hacked first. Outrunning the slowest of the group and whatnot."
          handleOnChange={handleOnChange}
          disabled={opts.isBothOptimized}
        />
        <Checkbox
          value={opts.isDictOptimized}
          name="isDictOptimized"
          desc="Optimize for Regular Dictionary Attacks"
          long_desc="Sometimes it is better to simply brace for regular dictionary attacks. We barely understand what regular dictionary attacks are, why reverse it?"
          handleOnChange={handleOnChange}
          disabled={opts.isBothOptimized}
        />
        <Checkbox
          value={opts.isBothOptimized}
          name="isBothOptimized"
          desc="Optimize for Both types of Dictionary Attacks"
          long_desc="Sometimes it is better to simply brace for regular dictionary attacks. We barely understand what regular dictionary attacks are, why reverse it?"
          handleOnChange={handleOnChange}
        />
        <Checkbox
          value={opts.isUppercased}
          name="isUppercased"
          desc="Include Uppercase Letters"
          long_desc="Uppercase some letters for better security while looking the same so you don't forget it"
          handleOnChange={handleOnChange}
        />
        <Checkbox
          value={opts.isLeeted}
          name="isLeeted"
          desc="Include Leeted Letters"
          long_desc="Leet speak your password so AI robots have a harder time deciphering it"
          handleOnChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{generatedPassword}</p>
    </div>
  );
}
