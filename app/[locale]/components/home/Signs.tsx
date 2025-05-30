import Link from "next/link";
import Image from "next/image";
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
export default function Signs() {
  return (
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
  );
}
