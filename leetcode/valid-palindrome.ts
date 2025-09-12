/**
 * @link https://leetcode.com/problems/valid-palindrome/
 */
function isPalindrome(s: string): boolean {
  const alphanumericOnlyStr = s.replace(/[^a-zA-Z0-9]/g, '');

  let l = 0;
  let r = alphanumericOnlyStr.length - 1;

  while (l <= r) {
      if (alphanumericOnlyStr[l].toLowerCase() !== alphanumericOnlyStr[r].toLowerCase()) return false;
      l += 1;
      r -= 1;
  }
  return true;
};