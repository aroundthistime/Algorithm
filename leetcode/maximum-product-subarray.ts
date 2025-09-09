/**
 * @link https://leetcode.com/problems/maximum-product-subarray/
 */
function maxProduct(nums: number[]): number {
  let totalMaxProduct = nums[0];
  // keep both min and max values because a negative number can become positive when multiplied by a negative number
  let currentMaxProduct = nums[0];
  let currentMinProduct = nums[0]

  for (let i = 1; i < nums.length; i++) {
      const num = nums[i];
      const allPossibleProducts = [num, num * currentMinProduct, num * currentMaxProduct]
      currentMaxProduct = Math.max(...allPossibleProducts);
      currentMinProduct = Math.min(...allPossibleProducts);
      totalMaxProduct = Math.max(currentMaxProduct, totalMaxProduct)
  }
  return totalMaxProduct
};