/**
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
function findMin(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let l = 0;
  let r = nums.length - 1;
  // could be not found if rotation is done perfect and everything remains sorted
  let minIndex = 0;

  while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (l + 1 === r) {
          if (nums[l] > nums[r]) {
              minIndex = r;
          }
          break;
      }
      if (nums[m] > nums[r]) {
          l = m;
      } else {
          r = m;
      }
  }
  return nums[minIndex]
};