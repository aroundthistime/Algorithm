/**
 * @link https://leetcode.com/problems/palindromic-substrings/
 */
function countSubstrings(s: string): number {
  const getDerivedPalindromeCount = (leftStartIndex: number, rightStartIndex: number) => {
    let l = leftStartIndex;
    let r = rightStartIndex;
    let count = 0;

    const canExpand = () => {
      const nextLeftIndex = l - 1;
      const nextRightIndex = r + 1;

      return (
          nextLeftIndex >= 0
          && nextRightIndex < s.length
          && s[nextLeftIndex] === s[nextRightIndex]
      )
    }

    while (canExpand()) {
        l -= 1;
        r += 1;
        count += 1;
    }
    return count + 1;
}

let answer = 0;

for (let i = 0; i < s.length; i++) {
  const oddLengthCount = getDerivedPalindromeCount(i, i);
  answer += oddLengthCount;

  if (s[i] === s[i + 1]) {
      const evenLengthCount = getDerivedPalindromeCount(i, i + 1);
      answer += evenLengthCount
  }
}

return answer;
};