/**
 * @link https://leetcode.com/problems/word-break/
 */
function wordBreak(s: string, wordDict: string[]): boolean {
  const canBeSegmentedMap = new Map<string, boolean>();

  for (const word of wordDict) {
      canBeSegmentedMap.set(word, true)
  }

  const solve = (str: string) => {
      if (!str.length) return true;

      const cachedResult = canBeSegmentedMap.get(str);
      if (cachedResult !== undefined) {
          return cachedResult;
      }

      const canBeSegmented = wordDict.some(word => {
          if (str.startsWith(word)) {
              return solve(str.slice(word.length))
          }

          return false;
      });

      canBeSegmentedMap.set(str, canBeSegmented);
      return canBeSegmented
  }

  return solve(s)
};