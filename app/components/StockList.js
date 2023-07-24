import SearchCard from "./SearchCard";
import StockCard from "./StockCard";

export default function StockList({
  noResults,
  isSearch,
  defaultData,
  searchData
}) {
  if (noResults) {
    return <h3>No results</h3>;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-10">
      {isSearch
        ? searchData?.map((stock) => {
            return <SearchCard key={stock.ticker} stock={stock} />;
          })
        : defaultData?.map((stock) => {
            return <StockCard key={stock.symbol} stock={stock} />;
          })}
    </ul>
  );
}
