import Image from "next/image";
import Link from "next/link";

const signs = [
  {
    name: "Aries",
    symbol: "♈",
    color: "text-red-500",
    path: "/images/aries.png",
  },
  {
    name: "Taurus",
    symbol: "♉",
    color: "text-green-500",
    path: "/images/taurus.png",
  },
  {
    name: "Gemini",
    symbol: "♊",
    color: "text-yellow-400",
    path: "/images/gemini.png",
  },
  {
    name: "Cancer",
    symbol: "♋",
    color: "text-blue-400",
    path: "/images/cancer.png",
  },
  {
    name: "Leo",
    symbol: "♌",
    color: "text-red-600",
    path: "/images/leo.png",
  },
  {
    name: "Virgo",
    symbol: "♍",
    color: "text-green-400",
    path: "/images/virgo.png",
  },
  {
    name: "Libra",
    symbol: "♎",
    color: "text-yellow-300",
    path: "/images/libra.png",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    color: "text-blue-500",
    path: "/images/scorpio.png",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    color: "text-red-500",
    path: "/images/sagittarius.png",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    color: "text-green-500",
    path: "/images/sagittarius.png",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    color: "text-yellow-400",
    path: "/images/aquarius.png",
  },
  {
    name: "Pisces",
    symbol: "♓",
    color: "text-blue-400",
    path: "/images/pisces.png",
  },
];

const cards = [
  {
    title: "Daily Horoscope",
    text: (
      <>
        Your <span className="font-semibold">individual topics</span> for each
        day! With the{" "}
        <span className="text-red-400 font-semibold">Love Horoscope</span> and
        the <span className="font-semibold">Celestial Events!</span>
      </>
    ),
    image: "/images/hkhp3_300x300.png",
  },
  {
    title: "Free Horoscopes",
    text: (
      <>
        Find all the <span className="font-semibold">free horoscopes</span>:
        Personality, Forecast, Love and Relationship and much more.
      </>
    ),
    image: "/images/allfreehp22.png",
  },
  {
    title: "Charts & Calculations",
    text: (
      <>
        For Astrologers: Chart Drawings, Ephemeris, Data Collections and more.
      </>
    ),
    image: "/images/charthp4_300x300.png",
  },
  {
    title: "The Best Time",
    text: (
      <>
        Find the best moment for your project - with the{" "}
        <span className="text-red-400 font-semibold">
          electional horoscope!
        </span>
      </>
    ),
    image: "/images/elecbanner_hp.jpg",
  },
];

export default function AstrologySection() {
  return (
    <section className="text-white bg-gray-900 py-12 px-4 text-center">
      <h2 className="text-4xl font-bold mb-2">The Art of Astrology</h2>
      <p className="text-lg text-gray-300 mb-10">
        Welcome to Astrodienst and the world's best horoscopes!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-600 rounded-md overflow-hidden text-left shadow-md hover:shadow-lg transition"
          >
            <Link
              key={index}
              href={`/page/${card.title.toLowerCase()}`}
              className="group transition"
            >
              <div className="h-32 w-full bg-gray-600 relative group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-blue-200">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 transition-colors duration-200 group-hover:text-blue-200">
                  {card.text}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
        <h3 className="text-xl font-semibold mb-4 text-left">
          Star Signs, by Liz Greene
        </h3>
        <div className="flex flex-wrap  gap-6">
          {signs.map((sign, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-1 min-w-[70px] max-w-[100px]"
            >
              <div className="w-20 h-20 rounded-full border-2 border-gray-500 bg-gray-700 flex justify-center items-center overflow-hidden group transition-transform duration-300 hover:scale-105">
                <Link key={index} href={`/signs/${sign.name.toLowerCase()}`}>
                  <Image
                    src={sign.path}
                    alt={sign.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </Link>
              </div>
              <span className="mt-2 text-sm ">{sign.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
