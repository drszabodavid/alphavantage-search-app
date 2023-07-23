import getMostTradedStocks from "@/lib/getMostTradedStocks";
import Link from "next/link";
import StockList from "./components/StockList";
import SearchBar from "./components/SearchBar";

export default async function Home() {
  const data = await getMostTradedStocks();

  const offlineData = [
    {
      ticker: "MULN",
      price: "0.14",
      change_amount: "-0.01",
      change_percentage: "-6.6667%",
      volume: "215988804"
    },
    {
      ticker: "TSLA",
      price: "260.02",
      change_amount: "-2.88",
      change_percentage: "-1.0955%",
      volume: "159165475"
    },
    {
      ticker: "SIRI",
      price: "7.08",
      change_amount: "-0.73",
      change_percentage: "-9.347%",
      volume: "132547768"
    },
    {
      ticker: "AMZN",
      price: "130.0",
      change_amount: "0.04",
      change_percentage: "0.0308%",
      volume: "131850104"
    },
    {
      ticker: "SQQQ",
      price: "18.03",
      change_amount: "0.18",
      change_percentage: "1.0084%",
      volume: "131699920"
    },
    {
      ticker: "TQQQ",
      price: "42.69",
      change_amount: "-0.38",
      change_percentage: "-0.8823%",
      volume: "101926222"
    },
    {
      ticker: "TTOO",
      price: "0.1007",
      change_amount: "0.0006",
      change_percentage: "0.5994%",
      volume: "92089770"
    },
    {
      ticker: "RIVN",
      price: "25.27",
      change_amount: "-0.54",
      change_percentage: "-2.0922%",
      volume: "80613194"
    },
    {
      ticker: "INTC",
      price: "34.02",
      change_amount: "0.65",
      change_percentage: "1.9479%",
      volume: "79346229"
    },
    {
      ticker: "NVDA",
      price: "443.09",
      change_amount: "-12.11",
      change_percentage: "-2.6604%",
      volume: "79100759"
    },
    {
      ticker: "AMD",
      price: "110.95",
      change_amount: "0.7",
      change_percentage: "0.6349%",
      volume: "76586040"
    },
    {
      ticker: "GFAI",
      price: "8.4",
      change_amount: "1.96",
      change_percentage: "30.4348%",
      volume: "75167591"
    },
    {
      ticker: "GOOGL",
      price: "120.02",
      change_amount: "0.82",
      change_percentage: "0.6879%",
      volume: "72909168"
    },
    {
      ticker: "CEI",
      price: "1.2",
      change_amount: "0.4043",
      change_percentage: "50.8106%",
      volume: "71528944"
    },
    {
      ticker: "LCID",
      price: "6.87",
      change_amount: "-0.05",
      change_percentage: "-0.7225%",
      volume: "70913697"
    },
    {
      ticker: "BAC",
      price: "31.99",
      change_amount: "0.3",
      change_percentage: "0.9467%",
      volume: "70695637"
    },
    {
      ticker: "SPY",
      price: "452.21",
      change_amount: "0.03",
      change_percentage: "0.0066%",
      volume: "69196629"
    },
    {
      ticker: "MSFT",
      price: "343.77",
      change_amount: "-3.1",
      change_percentage: "-0.8937%",
      volume: "67591759"
    },
    {
      ticker: "SOXS",
      price: "9.53",
      change_amount: "-0.26",
      change_percentage: "-2.6558%",
      volume: "67057751"
    },
    {
      ticker: "VRAY",
      price: "0.059",
      change_amount: "-0.001",
      change_percentage: "-1.6667%",
      volume: "64657724"
    }
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-between px-4 pb-4">
        <SearchBar />
        <StockList stocks={offlineData} />
      </main>
    </>
  );
}
