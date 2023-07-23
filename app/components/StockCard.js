import Link from "next/link";

export default function StockCard({ ticker, price, change_amount }) {
  const isNegative = Math.sign(change_amount) == -1;
  
  return (
    <li className="flex items-center justify-center h-32 w-40 border-4 rounded-md border-emerald-500/50 cursor-pointer hover:scale-110 hover:border-emerald-500 hover:bg-emerald-100/30 transition duration-300">
      <Link href={`/${ticker}`}>
        <h2 className="mb-3 text-2xl font-semibold text-center">{ticker}</h2>
        <p className="text-center text-sm opacity-50">Price : ${price}</p>
        <p
          className={`text-center text-sm ${
            isNegative ? "text-green-500" : "text-red-500"
          }`}
        >
          Change : {change_amount}
        </p>
      </Link>
    </li>
  );
}
