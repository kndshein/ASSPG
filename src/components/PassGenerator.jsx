import { useState } from 'react';
import Checkbox from './Checkbox';

export default function PassGenerator() {
  const [opts, setOpts] = useState({
    isReverseDictOptimized: true,
    isDictOptimized: false,
    isUppercased: false,
    isLeeted: false,
  });

  function handleOnChange(name) {
    setOpts({ ...opts, [name]: !opts[name] });
  }

  return (
    <div>
      <form>
        <Checkbox
          value={opts.isReverseDictOptimized}
          name="isReverseDictOptimized"
          desc="Optimize for Reverse Dictionary Attacks"
          handleOnChange={handleOnChange}
        />
        <Checkbox
          value={opts.isDictOptimized}
          name="isDictOptimized"
          desc="Optimize for the more familiar Dictionary Attacks"
          handleOnChange={handleOnChange}
        />
        <Checkbox
          value={opts.isUppercased}
          name="isUppercased"
          desc="Include uppercase letters for better security while looking the same so you don't forget it"
          handleOnChange={handleOnChange}
        />
        <Checkbox
          value={opts.isLeeted}
          name="isLeeted"
          desc="Leet speak your password so AI robots cannot decipher it"
          handleOnChange={handleOnChange}
        />
      </form>
    </div>
  );
}
