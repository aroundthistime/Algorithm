/**
 * @link https://leetcode.com/problems/maximum-subarray/
 */
function maxSubArray(nums: number[]): number {
  let totalMaxPartialSum = nums[0]
  let currentMaxPartialSum = nums[0]

  for (let i = 1; i < nums.length; i++) {
      const num = nums[i];
      currentMaxPartialSum = Math.max(currentMaxPartialSum + num, num);
      totalMaxPartialSum = Math.max(currentMaxPartialSum, totalMaxPartialSum)
  }
  return totalMaxPartialSum
};