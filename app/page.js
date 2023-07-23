import getMostTradedStocks from "@/lib/getMostTradedStocks";

export default async function Home() {
  const defaultData = await getMostTradedStocks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}
