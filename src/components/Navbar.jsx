"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["about", "work-experience", "work", "projects", "contact"];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar after scrolling 50px
          setHidden(currentScrollY <= 50);

          // Progress bar
          const windowHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const prog = windowHeight > 0 ? (currentScrollY / windowHeight) * 100 : 0;
          setProgress(prog);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    document.body.classList.toggle("overflow-hidden");
  };

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work-experience", label: "Experience" },
    { href: "#work", label: "Works" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav
        id="navbar"
        className={`fixed top-8 left-0 w-full z-[100] px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          hidden ? "nav-hidden" : ""
        }`}
      >
        {/* Desktop Menu */}
        <ul
          className="hidden md:flex gap-10 text-xs font-bold tracking-[0.3em] uppercase text-white/90
          absolute left-1/2 -translate-x-1/2
          bg-black/50 backdrop-blur-lg rounded-full px-8 py-3 overflow-hidden border border-white/10"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`hover:text-blue-400 transition ${
                    isActive ? "border-b border-blue-500 pb-1 text-blue-400 font-extrabold" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}

          {/* Scroll Progress Bar */}
          <div
            id="scroll-progress"
            className="absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </ul>

        {/* Mobile Toggle Button */}
        <button
          id="menu-btn"
          className={`md:hidden flex flex-col justify-center items-end gap-1.5 z-[110] focus:outline-none group ${
            mobileOpen ? "open" : ""
          }`}
          onClick={toggleMobile}
        >
          <span className="w-8 h-0.5 bg-white transition-all duration-300 rounded-full" />
          <span className="w-6 h-0.5 bg-white transition-all duration-300 rounded-full group-hover:w-8" />
          <span className="w-8 h-0.5 bg-white transition-all duration-300 rounded-full" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-center gap-12 text-3xl font-black tracking-tighter uppercase transform transition-transform ${
          mobileOpen ? "active" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-link hover:text-blue-400 transition-all ${
                isActive ? "text-blue-400 border-b-2 border-blue-400" : ""
              }`}
              onClick={closeMobile}
            >
              {link.label}
            </a>
          );
        })}

        <div className="absolute bottom-10 opacity-30 text-xs tracking-[0.5em] font-bold">
          KEVIN PORTFOLIO 2026
        </div>
      </div>
    </>
  );
}
