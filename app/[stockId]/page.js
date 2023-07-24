"use client";

import getSingleStockData from "@/lib/getSingleStockData";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Stock() {
  const { stockId } = useParams();
  const [stockData, setStockData] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(null);

  const getDailyPrice = (stockData) => {
    let objectDate = new Date();
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    month = month < 10 ? `0${month + 1}` : month + 1;
    let year = objectDate.getFullYear();
    const today = `${year}-${month}-${day - 3}`;
    setCurrentPrice(+stockData["Time Series (Daily)"][today]["1. open"]);
  };

  useEffect(() => {
    const getStockData = async () => {
      const data = await getSingleStockData(stockId);
      setStockData(data);
      getDailyPrice(data);
    };

    getStockData();
  }, [stockId]);

  return (
    <>
      {!stockData && <h3 className="text-center mx-0 pt-12">Loading...</h3>}
      {stockData && (
        <main className="max-w-lg flex m-auto flex-col items-center justify-center p-4 pt-8">
          <h2 className="text-3xl font-bold pb-8">{stockData.Name}</h2>

          <h3 className="self-start">
            {stockData.Symbol} | {stockData.Exchange} &#40;{stockData.Currency}
            &#41;
          </h3>
          <h4 className="self-start text-sm pb-4">{stockData.Industry}</h4>
          <p className="p-4 text-2xl font-bold">
            Price: ${currentPrice.toFixed(2)}
          </p>
          <aside className="text-xs">
            <p className="text-justify">{stockData.Description}</p>
            <br />
            <p className="font-semibold">Address</p>
            <address>{stockData.Address}</address>
          </aside>
          <button className="mt-8 px-4 py-2 bg-gold rounded-md">Buy now</button>
        </main>
      )}
    </>
  );
}
