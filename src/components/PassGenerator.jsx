import { useState } from 'react';
import Button from './Button';
import generatePassword from '../generatePassword';

export default function PassGenerator() {
  const [opts, setOpts] = useState({
    isDictOptimized: false,
    isBothOptimized: false,
    isUppercased: false,
    isLeeted: false,
  });
  const [generatedPassword, setGeneratedPassword] = useState('');

  function handleOnClick(name) {
    if (name === 'isBothOptimized') {
      setOpts({
        ...opts,
        isBothOptimized: !opts.isBothOptimized,
        isDictOptimized: !opts.isBothOptimized,
      });
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
    <div>
      <div className="flex flex-col">
        <Button
          value={opts.isBothOptimized || !opts.isDictOptimized}
          name="isDictOptimized"
          desc="Optimize for Reverse Dictionary Attacks"
          long_desc="By optimizing your password for reverse dictionary attacks, you allow other users to be hacked first. Outrunning the slowest of the group and whatnot."
          handleOnClick={handleOnClick}
          disabled={opts.isBothOptimized}
        />
        <Button
          value={opts.isDictOptimized}
          name="isDictOptimized"
          desc="Optimize for Regular Dictionary Attacks"
          long_desc="Sometimes it is better to simply brace for regular dictionary attacks. We can barely understand what regular dictionary attacks are, why bother reversing it?"
          handleOnClick={handleOnClick}
          disabled={opts.isBothOptimized}
        />
        <Button
          value={opts.isBothOptimized}
          name="isBothOptimized"
          desc="Optimize for Both types of Dictionary Attacks"
          long_desc="Things are best when used in moderation, so we have provided you with the worst of both worlds"
          handleOnClick={handleOnClick}
        />
        <Button
          value={opts.isUppercased}
          name="isUppercased"
          desc="Include Uppercase Letters"
          long_desc="Uppercase some letters for better security while looking the same so you don't forget it"
          handleOnClick={handleOnClick}
        />
        <Button
          value={opts.isLeeted}
          name="isLeeted"
          desc="Include Leeted Letters"
          long_desc="Leet speak your password so AI robots have a harder time deciphering it"
          handleOnClick={handleOnClick}
        />
        <button onClick={() => handleOnSubmit()}>Submit</button>
      </div>
      <p>{generatedPassword}</p>
    </div>
  );
}
