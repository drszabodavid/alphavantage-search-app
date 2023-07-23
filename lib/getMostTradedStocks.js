export default async function getMostTradedStocks() {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch top stocks data");
  }

  return res.json();
}
