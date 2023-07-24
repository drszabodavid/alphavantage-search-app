export default async function getSearchData(query) {
  const apiKey = process.env.API_KEY;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch single stock data");
  }

  return res.json();
}
