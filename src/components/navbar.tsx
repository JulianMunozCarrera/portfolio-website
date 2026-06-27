"use client";
import { useState, useEffect } from "react";
import { portfolioConfig } from "@/config/portfolio";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-white font-bold text-lg tracking-widest uppercase hover:text-blue-400 transition-colors"
        >
          {portfolioConfig.name.split(" ")[0]}
          <span className="text-blue-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`mailto:${portfolioConfig.email}`}
          className="hidden md:block text-sm tracking-widest uppercase border border-blue-500 text-blue-400 px-4 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/70 hover:text-white text-sm tracking-widest uppercase text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${portfolioConfig.email}`}
            className="text-sm tracking-widest uppercase border border-blue-500 text-blue-400 px-4 py-2 text-center hover:bg-blue-500 hover:text-white transition-all duration-300 mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
