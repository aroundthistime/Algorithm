/**
 * @link https://leetcode.com/problems/product-of-array-except-self/
 */
function productExceptSelf(nums: number[]): number[] {
  const {
      product: productOfAllElements,
      zerolessProduct,
      zeroCount
  } = nums.reduce((acc, cur) => {
      return {
          product: acc.product * cur,
          zerolessProduct: acc.zerolessProduct * (cur === 0 ? 1 : cur),
          zeroCount: acc.zeroCount + (cur === 0 ? 1 : 0)
      }
  }, {
      product: 1,
      zerolessProduct: 1,
      zeroCount: 0,
  });

  return nums.map(n => {
      if (n !== 0) {
          return productOfAllElements / n;
      } else if (zeroCount > 1) {
          return 0
      } else {
          return zerolessProduct
      }
  })
};