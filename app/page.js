import getTopStocks from "@/lib/getTopStocks";

export default async function Home() {
  const defaultData = await getTopStocks();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}
