import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";
import logoImg from "../assets/logo/logo.png";
import { BeeDecoration } from "./BeeDecoration";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hello The Bees Bake House! I would like to inquire about ordering delicious homemade cakes and brownies."
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF4E5]/95 backdrop-blur-md shadow-md border-b border-[#EAD7B5]/60 py-2.5"
          : "bg-[#FFF4E5] border-b border-[#EAD7B5]/40 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A54A] rounded-lg p-1"
            aria-label="The Bees Bake House Homepage"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImg}
                alt="The Bees Bake House Mascot Logo"
                className="w-full h-full object-contain rounded-full shadow-xs border border-[#EAD7B5]"
                width="56"
                height="56"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#422414] group-hover:text-[#761C35] transition-colors leading-tight">
                The Bees Bake House
              </span>
              <span className="font-sans text-[11px] sm:text-xs text-[#761C35] font-medium tracking-wider uppercase">
                Homemade · Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative py-1 hover:text-[#761C35] ${
                    isActive
                      ? "text-[#761C35] font-semibold"
                      : "text-[#422414]/85"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#761C35] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#761C35] hover:bg-[#5a1427] text-[#FFF4E5] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 border border-[#761C35]/30 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#D6A54A]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1E7E34] text-white shadow-xs"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#422414] hover:bg-[#EAD7B5]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A54A]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#EAD7B5]/60 pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#EAD7B5]/60 text-[#761C35] font-semibold"
                        : "text-[#422414] hover:bg-[#EAD7B5]/30"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-2 mt-2 border-t border-[#EAD7B5]/40">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#761C35] text-[#FFF4E5] font-medium text-sm shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#D6A54A]" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
