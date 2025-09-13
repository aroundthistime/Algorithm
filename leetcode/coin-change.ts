/**
 * @link https://leetcode.com/problems/coin-change/
 */
function coinChange(coins: number[], amount: number): number {
  const dp = {};

  const solve = (moneyToMake: number) => {
      if (dp[moneyToMake] !== undefined) {
          return dp[moneyToMake];
      }

      if (moneyToMake === 0) {
          return 0;
      }

      const minCoinCount = Math.min(...coins.map(coin => {
          const leftMoney = moneyToMake - coin;
          if (leftMoney >= 0) {
              return solve(leftMoney) + 1;
          } else {
              return Infinity;
          }
      }));

      dp[moneyToMake] = minCoinCount;
      return minCoinCount;
  }

  const minRequiredCoin = solve(amount);
  return minRequiredCoin === Infinity ? -1 : minRequiredCoin;
};