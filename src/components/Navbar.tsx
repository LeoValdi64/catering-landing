"use client";

import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#menus", label: "Menus" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#areas", label: "Service Areas" },
  { href: "#quote", label: "Get a Quote" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <UtensilsCrossed className="w-8 h-8 text-gold transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <span className="text-xl font-bold text-gold tracking-wide font-[family-name:var(--font-playfair)]">
                GoldenPlate
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-warm-gray">
                Catering
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-colors duration-200 ${
                  link.href === "#quote"
                    ? "bg-gold text-charcoal px-5 py-2.5 rounded font-bold hover:bg-gold-light"
                    : "text-cream/80 hover:text-gold"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cream hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-charcoal/98 backdrop-blur-md border-t border-gold/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded transition-colors ${
                link.href === "#quote"
                  ? "bg-gold text-charcoal font-bold text-center mt-2"
                  : "text-cream/80 hover:text-gold hover:bg-charcoal-light"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
