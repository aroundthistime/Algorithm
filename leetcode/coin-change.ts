/**
 * @link https://leetcode.com/problems/coin-change/
 */
function coinChange(coins: number[], amount: number): number {
  // Array.fill is way faster than Array.from + initializer callback
  const dp = new Array(amount+1).fill(Infinity);
  dp[0] = 0;
  for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
          dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};