/**
 * @link https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
  const MIN_ALPHABET_CHAR_CODE = 'a'.charCodeAt(0);
  const MAX_ALPHABET_CHAR_CODE = 'z'.charCodeAt(0);

  const filteredLowercaseStr = s.toLowerCase().split('').filter((letter) => {
      if (letter === ' ') return;
      const charCode = letter.charCodeAt(0);
      const isAlphabet = charCode >= MIN_ALPHABET_CHAR_CODE && charCode <= MAX_ALPHABET_CHAR_CODE;
      const isNumeric = !Number.isNaN(Number(letter));
      return isAlphabet || isNumeric
  }).join('');

  let l = 0;
  let r = filteredLowercaseStr.length - 1;

  while (l <= r) {
      if (filteredLowercaseStr[l] !== filteredLowercaseStr[r]) return false;
      l += 1;
      r -= 1;
  }
  return true;
};