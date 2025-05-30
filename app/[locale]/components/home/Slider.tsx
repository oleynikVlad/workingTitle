import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
const cards = [
  {
    titleKey: "dailyTitle",
    textKey: "dailyTextRich",
    image: "/images/hkhp3_300x300.png",
  },
  {
    titleKey: "freeTitle",
    textKey: "freeTextRich",
    image: "/images/allfreehp22.png",
  },
  {
    titleKey: "chartsTitle",
    textKey: "chartsText",
    image: "/images/charthp4_300x300.png",
  },
  {
    titleKey: "bestTimeTitle",
    textKey: "bestTimeTextRich",
    image: "/images/elecbanner_hp.jpg",
  },
];
export default function Slider() {
  const t = useTranslations("HomePage");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-600 rounded-md overflow-hidden text-left shadow-md hover:shadow-lg transition"
        >
          <Link
            key={index}
            href={`/page/${index}`}
            className="group transition"
          >
            <div className="h-32 w-full bg-gray-600 relative group-hover:scale-105 transition-transform duration-300">
              <Image
                src={card.image}
                alt={card.titleKey}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 transition-colors duration-200 group-hover:text-blue-200">
                {t(card.titleKey)}
              </h3>
              <p className="text-sm text-gray-300 transition-colors duration-200 group-hover:text-blue-200">
                {t.rich(card.textKey, {
                  strong: (chunks) => (
                    <span className="font-semibold">{chunks}</span>
                  ),
                  red: (chunks) => (
                    <span className="text-red-400 font-semibold">{chunks}</span>
                  ),
                })}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
