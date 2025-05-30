"use client";

import { useState } from "react";
import {
  FaShoppingCart,
  FaUserCircle,
  FaGlobe,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import Image from "next/image";
import AstroSymbolsWithTooltip from "./AstroSymbolsWithTooltip";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("HomePage");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0e3a5c] text-white relative overflow-visible z-10">
      {/* Top bar */}
      <div className="bg-gray-600 text-white text-sm px-4 py-1 flex justify-between items-center">
        <Link href={"/"}>www.neboznaye.com</Link>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <div className="flex items-center gap-1">
            <FaShoppingCart />
            <Link href="/cart"> {t("cart")} </Link>
          </div>
          <div className="flex items-center gap-1">
            <FaUserCircle />
            <Link href="/account"> {t("account")} </Link>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between md:items-center relative">
        {/* Left menu/nav */}
        <div className="flex items-center space-x-6 flex-1 z-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            <FaBars />
          </button>
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#" className="hover:underline">
              Horoscopes
            </a>
            <a href="#" className="hover:underline">
              Astro Shop
            </a>
            <a href="#" className="hover:underline">
              All about Astrology
            </a>
          </nav>
        </div>

        {/* Search + Icons */}
        <div className="flex flex-col items-center md:flex-row md:space-x-4 md:mx-6 mt-4 md:mt-0 z-10">
          <AstroSymbolsWithTooltip />
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 text-black focus:outline-none"
            />
            <button className="bg-white px-2 py-1">
              <FaSearch className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Centered Oversized Logo */}
        {/* Centered Oversized Logo (100% larger) */}
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 z-0 w-[400px] h-[130px]">
          <Image
            src="/logo.png"
            fill
            alt="Astrodienst Logo"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="bg-[#184b71] px-4 py-2 space-y-2 md:hidden">
          <a href="#" className="block text-white hover:underline">
            Horoscopes
          </a>
          <a href="#" className="block text-white hover:underline">
            Astro Shop
          </a>
          <a href="#" className="block text-white hover:underline">
            All about Astrology
          </a>
        </nav>
      )}
    </header>
  );
}
