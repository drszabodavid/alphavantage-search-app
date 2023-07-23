import StockCard from "./StockCard";

export default function StockList({ stocks }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-10">
      {stocks.map((stock) => {
        const { ticker, price, change_amount } = stock;
        return (
          <StockCard
            key={ticker}
            ticker={ticker}
            price={price}
            change_amount={change_amount}
          />
        );
      })}
    </ul>
  );
}
