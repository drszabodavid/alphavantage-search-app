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
          <nav className="h-24 bg-gold flex items-center justify-center">
            <Link className="lg:text-center lg:relative" href="/">
              <h1 className="text-2xl md:text-2xl lg:text-4xl uppercase">
                Alpavantage Search Tool
              </h1>
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
