/**
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;

  let answer = 0;
  let left = 0;
  const letterSet = new Set<string>();

  for (let right = 0; right < s.length; right++) {
    const letter = s[right];
    
    while (letterSet.has(letter)) {
      letterSet.delete(s[left]);
      left++;
    }

    letterSet.add(letter);
    answer = Math.max(answer, right - left + 1)
  }
  return answer;
};