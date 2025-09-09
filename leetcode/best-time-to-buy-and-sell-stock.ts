function maxProfit(prices: number[]): number {
  let maxPriceToSell = -1;
  let answer = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
      const price = prices[i];
      const profit = maxPriceToSell - price;
      answer = Math.max(profit, answer)
      maxPriceToSell = Math.max(maxPriceToSell, price);
  }
  return answer;
};