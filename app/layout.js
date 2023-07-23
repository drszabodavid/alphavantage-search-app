import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alpavantage App",
  description: "A stock search tool using the Alpavantage API",
  authors: [{ name: "Dávid Szabó" }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav className="h-20 bg-emerald-200 flex items-center justify-center">
            <h1 className="text-3xl">Alpavantage Search Tool</h1>
            <Link className="absolute left-5" href="/">
              Home
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
