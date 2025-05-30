import Image from "next/image";

import Slider from "./home/Slider";
import Signs from "./home/Signs";
import LoverForm from "./home/LoverForm";
import { useTranslations } from "next-intl";


export default function AstrologySection() {
  const t = useTranslations("HomePage");
  return (
    <section className="text-white bg-gray-900 py-12 text-center w-full px-2 mt-3 mb-2">
      <h2 className="text-4xl font-bold mb-2">{t("title")}</h2>
      <p className="text-lg text-gray-300 mb-10">{t("welcome")}</p>
      <Slider />
      <Signs />
      <LoverForm />
    </section>
  );
}
