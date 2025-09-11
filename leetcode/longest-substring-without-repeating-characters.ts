/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;

  let answer = 1;
  let currentSubstrWithoutDuplication = s[0];

  for (let i = 1; i < s.length; i++) {
      const letter = s[i];

      const letterIndex = currentSubstrWithoutDuplication.indexOf(letter)
      if (letterIndex > -1) {
          answer = Math.max(answer, currentSubstrWithoutDuplication.length);
          currentSubstrWithoutDuplication = currentSubstrWithoutDuplication.slice(letterIndex + 1) + letter;
      } else {
          currentSubstrWithoutDuplication += letter;
      }
  }
  answer = Math.max(answer, currentSubstrWithoutDuplication.length);
  return answer
};