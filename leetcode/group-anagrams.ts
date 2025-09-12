/**
 * @link https://leetcode.com/problems/group-anagrams/
 */
function groupAnagrams(strs: string[]): string[][] {
  const getAnagramKey = (str: string) => {
      const NUM_OF_ALPHABETS = 26;
      const letterCountArr = Array.from({length: NUM_OF_ALPHABETS}, () => 0)
      for (const letter of str) {
          const alphabeticalIndex = letter.charCodeAt(0) - 'a'.charCodeAt(0);
          letterCountArr[alphabeticalIndex] += 1;
      }

      return letterCountArr.join('-')
  }

  const groupedAnagramsObj = strs.reduce((cur, acc) => {
      const anagramKey = getAnagramKey(acc)
      if (cur[anagramKey] === undefined) {
          cur[anagramKey] = [];
      }
      cur[anagramKey].push(acc)
      return cur;
  }, {} as Record<string, string[]>);

  return [...Object.values(groupedAnagramsObj)]
};