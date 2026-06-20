"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={`fixed bottom-8 right-8 z-[150] p-4 rounded-full bg-blue-600/80 hover:bg-blue-600 text-white shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 border border-white/10 hover:scale-110 active:scale-95 backdrop-blur-md transition-all duration-300 cursor-pointer flex items-center justify-center ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-75 pointer-events-none"
      }`}
    >
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
