export default function CurrentPlanets() {
  const data = [
    {
      planet: "Sun",
      symbol: "☉",
      sign: "♊",
      signColor: "text-yellow-400",
      deg: "8",
      min: `20'35"`,
      lat: "21n42",
    },
    {
      planet: "Moon",
      symbol: "☽",
      sign: "♋",
      signColor: "text-blue-400",
      deg: "10",
      min: `42' 2"`,
      lat: "27n49",
    },
    {
      planet: "Mercury",
      symbol: "☿",
      sign: "♊",
      signColor: "text-yellow-400",
      deg: "7",
      min: `28' 2"`,
      lat: "22n00",
    },
    {
      planet: "Venus",
      symbol: "♀",
      sign: "♈",
      signColor: "text-red-500",
      deg: "22",
      min: `31'13"`,
      lat: "6n54",
    },
    {
      planet: "Mars",
      symbol: "♂",
      sign: "♌",
      signColor: "text-red-600",
      deg: "19",
      min: `42'55"`,
      lat: "16n19",
    },
    {
      planet: "Jupiter",
      symbol: "♃",
      sign: "♊",
      signColor: "text-yellow-400",
      deg: "27",
      min: `26' 3"`,
      lat: "23n14",
    },
    {
      planet: "Saturn",
      symbol: "♄",
      sign: "♈",
      signColor: "text-red-500",
      deg: "0",
      min: `18'49"`,
      lat: "1s48",
    },
    {
      planet: "Uranus",
      symbol: "♅",
      sign: "♉",
      signColor: "text-green-500",
      deg: "27",
      min: `57'50"`,
      lat: "19n30",
    },
    {
      planet: "Neptune",
      symbol: "♆",
      sign: "♈",
      signColor: "text-red-500",
      deg: "1",
      min: `49' 7"`,
      lat: "0s28",
    },
    {
      planet: "Pluto",
      symbol: "♇",
      sign: "♒",
      signColor: "text-yellow-400",
      deg: "3",
      min: `40'46"r`,
      lat: "22s51",
    },
    {
      planet: "TrueNode",
      symbol: "☊",
      sign: "♓",
      signColor: "text-blue-400",
      deg: "24",
      min: `15'32"r`,
      lat: "2s17",
    },
    {
      planet: "Chiron",
      symbol: "⚷",
      sign: "♈",
      signColor: "text-red-500",
      deg: "25",
      min: `34'53"`,
      lat: "10n34",
    },
  ];

  return (
    <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm p-4 rounded shadow-lg w-64 z-20">
      <h2 className="text-xl font-bold text-center">Current Planets</h2>
      <p className="text-center text-sm mt-1 mb-4">
        29-May-2025, 11:15 <span className="text-red-500">▸</span> UT/GMT
      </p>

      <table className="w-full text-sm">
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className="border-b border-gray-700 last:border-none">
              <td className="py-1 pr-2 flex items-center space-x-1">
                <span>{item.symbol}</span>
                <span>{item.planet}</span>
              </td>
              <td className={`py-1 text-xl ${item.signColor}`}>{item.sign}</td>
              <td className="py-1 text-right">{item.deg}</td>
              <td className="py-1 text-right">{item.min}</td>
              <td className="py-1 text-right text-gray-300">{item.lat}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="bg-slate-700 mt-4 py-3 px-2 rounded text-sm space-y-2">
        <p>
          <span className="text-red-400">▸</span> Explanations of the symbols
        </p>
        <p>
          <span className="text-red-400">▸</span> Chart of the moment
        </p>
      </div>
    </div>
  );
}
