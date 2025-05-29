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

        {/* Main Layout with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Content */}
          <main className="md:col-span-8">{children}</main>

          {/* Right Sidebar */}
          <aside className="md:col-span-4 space-y-6">
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Current Planets</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>☉ Sun: Taurus</li>
                <li>☽ Moon: Pisces</li>
                <li>☿ Mercury: Aries</li>
                <li>♀ Venus: Gemini</li>
                <li>♂ Mars: Aries</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Astro Wiki</h3>
              <p className="text-sm text-gray-300">
                Explore 9000 years of ephemeris, terms, and concepts in
                astrology.
              </p>
            </div>
          </aside>
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
