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

  let answer = '';

  for (let i = 0; i < s.length; i++) {
      /**
       * palindrome에는 크게 두 가지 종류가 있음
       * 짝수 개수여서 두 개가 같을 수도 있고
       * 홀수여서 가운데꺼 제외하고 양쪽이 같을 수도 있음
       */
      const oddLengthLongestPalindrome = getMaxExpandablePalindrome(i, i);
      if (oddLengthLongestPalindrome.length > answer.length) {
          answer = oddLengthLongestPalindrome;
      }

      if (s[i] === s[i + 1]) {
          const evenLengthLongestPalindrome = getMaxExpandablePalindrome(i, i + 1);
          if (evenLengthLongestPalindrome.length > answer.length) {
              answer = evenLengthLongestPalindrome;
          }
      }
  }

  return answer
};