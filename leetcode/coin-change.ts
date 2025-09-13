/**
 * @link https://leetcode.com/problems/coin-change/
 */
function coinChange(coins: number[], amount: number): number {
  const dp = {};

  coins.sort((a, b) => a - b);

  const solve = (moneyToMake: number) => {
      if (dp[moneyToMake] !== undefined) {
          return dp[moneyToMake];
      }

      if (moneyToMake === 0) {
          return 0;
      }

      let minCoinCount = Infinity;

      for (const coin of coins) {
          const leftMoney = moneyToMake - coin;
          if (leftMoney >= 0) {
              const coinCount = solve(leftMoney) + 1;
              minCoinCount = Math.min(minCoinCount, coinCount)
          } else {
              break;
          }
      }

      dp[moneyToMake] = minCoinCount;
      return minCoinCount;
  }

  const minRequiredCoin = solve(amount);
  return minRequiredCoin === Infinity ? -1 : minRequiredCoin;
};