export default async function getSingleStockData(symbol) {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch single stock data");
  }

  const priceRes = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`
  );

  if (!priceRes.ok) {
    throw new Error("Failed to fetch single stock data");
  }

  const overview = await res.json();
  const price = await priceRes.json();

  return { ...price, ...overview };
}
