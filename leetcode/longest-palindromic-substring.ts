/**
 * @link https://leetcode.com/problems/longest-palindromic-substring/
 */
function longestPalindrome(s: string): string {
  const getMaxExpandablePalindrome = (leftStartIndex: number, rightStartIndex: number) => {
      let l = leftStartIndex;
      let r = rightStartIndex
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
      }
      return s.slice(l, r + 1)
  }

  /**
   * Calculate the maximum possible palindrome length for a given left and right index
   * Used to prevent unnecessary palindrome expansion
   */
  const getMaxPossiblePalindromeLength = (l: number, r: number) => {
    const basicLength = r - l + 1;
    const leftMaxExpand = l;
    const rightMaxExpand = s.length - 1 - r;
    return Math.min(leftMaxExpand, rightMaxExpand) * 2 + basicLength;
  }


  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const maxOddPossibleLength = getMaxPossiblePalindromeLength(i, i);
    if (answer.length < maxOddPossibleLength) {
        const oddLengthLongestPalindrome = getMaxExpandablePalindrome(i, i);
        if (oddLengthLongestPalindrome.length > answer.length) {
            answer = oddLengthLongestPalindrome;
        }
    }

    if (s[i] === s[i + 1]) {
        const maxEvenPossibleLength = getMaxPossiblePalindromeLength(i, i + 1);
        if (answer.length < maxEvenPossibleLength) {
            const evenLengthLongestPalindrome = getMaxExpandablePalindrome(i, i + 1);
            if (evenLengthLongestPalindrome.length > answer.length) {
                answer = evenLengthLongestPalindrome;
            }
        }
    }
  }

  return answer
};