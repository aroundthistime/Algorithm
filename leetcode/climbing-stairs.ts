/**
 * @link https://leetcode.com/problems/climbing-stairs/
 */
function climbStairs(n: number): number {
  const dp = {};

  const solve = (remainingStairs: number) => {
      if (dp[remainingStairs] !== undefined) {
          return dp[remainingStairs];
      }

      if (remainingStairs <= 2) {
          return remainingStairs;
      }

      const distinctWaysAfterSingleStep = solve(remainingStairs - 1);
      const distinctWaysAfterTwoSteps = solve(remainingStairs - 2);
      const distinctWays = distinctWaysAfterSingleStep + distinctWaysAfterTwoSteps;
      dp[remainingStairs] = distinctWays;
      return distinctWays;
  }

  return solve(n);
};