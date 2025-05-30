import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Art of Astrology",
  description: "Horoscopes, charts, cosmic guides, and more from Astrodienst.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {/* Top Header */}
        <Header />

        {/* Full-width wrapper */}
        <div className="w-full bg-gray-900 px-4 py-8">
          {/* Centered content using max-w */}
          {/* Main Content */}
          <main className="md:col-span-8 w-full">{children}</main>
          {/* Optional sidebar */}
          {/* <aside className="md:col-span-4">...</aside> */}
        </div>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 text-center text-sm py-6 mt-10">
          <p>© 2025 Astrodienst AG. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
