module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = Object.fromEntries(bracketsConfig);
  const closeBrackets = bracketsConfig.map(x => x[1]);
  for (const letter of str) {
    if (closeBrackets.includes(letter)) {
      if (letter === openBrackets[stack[0]])
        stack.shift();
      else if (openBrackets[letter])
        stack.unshift(letter);
      else
        return false;
    }
    else if (openBrackets[letter])
      stack.unshift(letter);
  }
  return stack.length === 0;
}
