import Link from "next/link";
import Image from "next/image";

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
export default function Slider() {
  return (
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
  );
}
