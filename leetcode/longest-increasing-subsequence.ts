/**
 * @link https://leetcode.com/problems/longest-increasing-subsequence/
 */
function lengthOfLIS(nums: number[]): number {
  /**
   * dp[n] means the maximum length of increasing subsequence that ends with nums[n]
   */
  const dp = Array(nums.length).fill(1)
  for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
      for (let prevIndex = 0; prevIndex < currentIndex; prevIndex ++) {
          if (nums[prevIndex] < nums[currentIndex]) {
              dp[currentIndex] = Math.max(dp[currentIndex], dp[prevIndex] + 1)
          }
          const maxLength = nums[prevIndex] < nums[currentIndex] ? dp[prevIndex] + 1 : dp[prevIndex];
          
      }
  }
  
  return Math.max(...dp);
};