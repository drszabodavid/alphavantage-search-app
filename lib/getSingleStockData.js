export default async function getSingleStockData(symbol) {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch single stock data");
  }

  return res.json();
}
