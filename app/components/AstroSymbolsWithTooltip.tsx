"use client";

import { useState } from "react";
import CurrentPlanets from "./CurrentPlanets";

export default function AstroSymbolsWithTooltip() {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <div className="relative">
      {/* Symbols */}
      <button
        onClick={() => setTooltipOpen(!tooltipOpen)}
        className="text-xl md:text-xl hover:text-yellow-300 transition duration-200"
      >
        ☉ ☽ ☿
      </button>

      {/* Tooltip */}
      {tooltipOpen && <CurrentPlanets />}
    </div>
  );
}
