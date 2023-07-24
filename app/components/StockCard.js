import Link from "next/link";

export default function StockCard({ stock }) {
  const { ticker, price, change_amount } = stock;
  const isNegative = Math.sign(change_amount) == -1;

  return (
    <li className="flex items-center justify-center h-32 w-40 border-4 rounded-md border-gold cursor-pointer hover:scale-110 hover:border-gold hover:bg-softgold transition duration-300">
      <Link href={`/${ticker}/`}>
        <h2 className="mb-3 text-2xl font-semibold text-center">{ticker}</h2>
        <p className="text-center text-sm opacity-50">Price : ${price}</p>
        <p
          className={`text-center text-sm ${
            isNegative ? "text-red-500" : "text-green-500"
          }`}
        >
          Change : {change_amount}
        </p>
      </Link>
    </li>
  );
}
