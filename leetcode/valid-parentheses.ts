/**
 * @link https://leetcode.com/problems/valid-parentheses/
 */
function isValid(s: string): boolean {
  const OPENING_BRACKETS = ['(', '[', '{'];

  const BRACKET_CLOSE_OPEN_MAP = {
      ')': '(',
      ']': '[',
      '}': '{'
  };

  const stack: string[] = [];
  for (const letter of s) {
      if (OPENING_BRACKETS.includes(letter)) {
          stack.push(letter)
      } else {
          const poppedEl = stack.pop();
          if (poppedEl !== BRACKET_CLOSE_OPEN_MAP[letter]) {
              return false;
          }
      }
  }
  
  return stack.length === 0;
};