function twoSum(nums: number[], target: number): number[] {
  const sortedNumsWithOriginalIndex = nums.map((n, i) => {
      return {
          num: n,
          originalIndex: i
      }
  }).sort((a, b) => {
      return a.num - b.num
  });
  
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
      const el1 = sortedNumsWithOriginalIndex[start];
      const el2 = sortedNumsWithOriginalIndex[end];
      
      const elSum = el1.num + el2.num;
      if (elSum === target) {
          return [el1.originalIndex, el2.originalIndex];
      } else if (elSum > target) {
          end -= 1;
      } else {
          start += 1;
      }
  }
};