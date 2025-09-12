/**
 * @link https://leetcode.com/problems/valid-anagram/
 */
function isAnagram(s: string, t: string): boolean {
  const letterCountMap = new Map();
  
  for (const letter of s) {
      const prevValue = letterCountMap.get(letter) ?? 0;
      letterCountMap.set(letter, prevValue + 1)
  }

  for (const letter of t) {
      const currentCount = letterCountMap.get(letter) ?? 0;
      if (currentCount < 1) {
          return false;
      }
      
      const updatedCount = currentCount - 1;
      if (updatedCount === 0) {
          letterCountMap.delete(letter)
      } else {
          letterCountMap.set(letter, updatedCount)
      }
  }

  return letterCountMap.size === 0;
};