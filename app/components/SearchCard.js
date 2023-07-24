import Link from "next/link";

export default function SearchCard({ stock }) {
  return (
    <li className="flex items-center justify-center h-32 w-40 border-4 rounded-md border-gold cursor-pointer hover:scale-110 hover:border-gold hover:bg-softgold transition duration-300">
      <Link href={`/${stock["1. symbol"]}/`}>
        <h2 className="mb-3 text-xl font-semibold text-center">
          {stock["1. symbol"]}
        </h2>
        <p className="text-center text-sm opacity-50">{stock["2. name"]}</p>
      </Link>
    </li>
  );
}
