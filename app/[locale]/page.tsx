import Image from "next/image";
import AstrologySection from "./components/AstrologySection";
import LoversAstrologySection from "./components/LoversAstrologySection";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white font-sans">
      <AstrologySection />
      <LoversAstrologySection />
    </main>
  );
}
