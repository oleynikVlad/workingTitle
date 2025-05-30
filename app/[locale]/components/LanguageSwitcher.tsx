"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "uk", label: "UA" },
  { code: "ru", label: "RU" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as "uk" | "ru";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeLocale = (locale: "uk" | "ru") => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#888",
          color: "white",
          padding: "0.3rem 0.6rem",
          borderRadius: "0.25rem",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          border: "none",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        🌐 {languages.find((l) => l.code === currentLocale)?.label ?? "Lang"}
      </button>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            background: "#fff",
            color: "#333",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            listStyle: "none",
            padding: 0,
            margin: "0.3rem 0 0 0",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            zIndex: 100,
          }}
        >
          {languages.map(({ code, label }) => (
            <li key={code}>
              <button
                onClick={() => changeLocale(code as "uk" | "ru")}
                style={{
                  background: "none",
                  border: "none",
                  padding: "0.5rem 1rem",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
