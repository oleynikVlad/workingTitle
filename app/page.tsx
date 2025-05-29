import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white font-sans">
      <header className="bg-gray-800 py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">The Art of Astrology</h1>
        <nav className="space-x-4">
          <a href="#" className="text-sm hover:underline">Horoscopes</a>
          <a href="#" className="text-sm hover:underline">Astro Shop</a>
          <a href="#" className="text-sm hover:underline">All about Astrology</a>
        </nav>
      </header>

      <section className="bg-gray-700 text-center py-10 px-4">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Astrodienst and the world's best horoscopes!</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Daily Horoscope", "Free Horoscopes", "Charts & Calculations", "The Best Time"].map((title, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-600 transition">
              <div className="h-24 bg-gray-600 mb-4 rounded"></div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-300">Explore more...</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-6 px-4 bg-gray-800">
        <h3 className="text-center text-lg font-semibold mb-4">Star Signs</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {["♈ Aries", "♉ Taurus", "♊ Gemini", "♋ Cancer", "♌ Leo", "♍ Virgo", "♎ Libra", "♏ Scorpio", "♐ Sagittarius", "♑ Capricorn", "♒ Aquarius", "♓ Pisces"].map(sign => (
            <span key={sign} className="bg-gray-600 px-3 py-1 rounded hover:bg-gray-500">{sign}</span>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-900 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Current</h2>
        <div className="space-y-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold">Astrology Article Title {i}</h3>
              <p className="text-sm text-gray-300 mt-2">Short excerpt from the article, diving into astrology themes, planetary influence, and cosmic significance. <a href="#" className="text-blue-400 underline">Read more...</a></p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-gray-800 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Astro Shop</h2>
        <p className="text-sm text-gray-300 mb-6">High Quality Horoscopes and Subscriptions</p>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">Enter the Astro Shop</button>
      </section>

      <footer className="bg-gray-950 text-gray-400 text-sm text-center py-6">
        <p>© 2025 Astrodienst AG. All rights reserved.</p>
        <p className="mt-1"><a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms of Service</a></p>
      </footer>
    </main>
  )
}
