let leetSpeakList = {
  a: ['4', '@', 'Д', 'α', 'λ', '∆'],
  d: ['[)', '|}', '|)', 'cl', 'c1', 'Ð'],
  k: ['|{', 'l<', '1<', '|<', '|('],
  m: ['[V]', '(V)', '1v1', ']V[', '|V|', 'AA', '^^', '|Y|', 'м'],
  n: ['И', '/V', 'ท', 'п'],
  r: ['Я', '®', '|2'],
};

let generatePassword = (
  isDictOptimized,
  isBothOptimized,
  isUppercased,
  isLeeted
) => {
  let password = 'aardvark';
  if (isBothOptimized) {
    let midAlphabet = ['m', 'n'];
    password = midAlphabet[Math.round(Math.random())] + password;
  } else if (isDictOptimized) {
    password = 'z' + password;
  }
  password = password
    .split('')
    .map((digit) => {
      let replaceBank = [digit];
      if (isUppercased) {
        replaceBank.push(digit.toUpperCase());
      }
      if (isLeeted) {
        replaceBank = replaceBank.concat(leetSpeakList[digit] || []);
      }
      return digit.replace(
        digit,
        replaceBank[Math.floor(Math.random() * replaceBank.length)]
      );
    })
    .join('');
  return password;
};

export default generatePassword;
