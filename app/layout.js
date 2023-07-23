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
        <header>Header</header>
        {children}
      </body>
    </html>
  );
}
