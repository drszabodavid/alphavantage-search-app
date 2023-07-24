import getMostTradedStocks from "@/lib/getMostTradedStocks";
import SearchWrapper from "./components/SearchWrapper";

export default async function Home() {
  const data = await getMostTradedStocks();

  return (
    <main>
      <SearchWrapper defaultData={data.most_actively_traded} />
    </main>
  );
}
