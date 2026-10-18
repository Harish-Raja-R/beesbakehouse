import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle, Heart } from "lucide-react";
import { siteConfig } from "../config/site";
import logoImg from "../assets/logo/logo.png";
import { BeeDecoration, InstagramIcon } from "./BeeDecoration";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = siteConfig.getWhatsAppUrl("Hello The Bees Bake House! I would like to place an order.");

  return (
    <footer className="bg-[#422414] text-[#FFF4E5] border-t-4 border-[#D6A54A] pt-14 pb-8 relative overflow-hidden">
      {/* Decorative subtle honeycomb background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-repeat bg-[radial-gradient(#FFF4E5_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FFF4E5]/15">
          {/* Col 1: Brand Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-[#FFF4E5] rounded-full p-1 border-2 border-[#D6A54A] shrink-0">
                <img
                  src={logoImg}
                  alt="The Bees Bake House"
                  className="w-full h-full object-contain rounded-full"
                  width="56"
                  height="56"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#FFF4E5] block">
                  The Bees Bake House
                </span>
                <span className="text-xs font-medium text-[#D6A54A] tracking-wider uppercase block">
                  Homemade with Love
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FFF4E5]/80 leading-relaxed font-sans">
              Handcrafted brownies, blondies, and celebration cakes baked fresh in small batches in Coimbatore. Bringing sweetness to every moment.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFF4E5]/10 hover:bg-[#D6A54A] hover:text-[#422414] text-[#FFF4E5] flex items-center justify-center transition-colors border border-[#FFF4E5]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A54A]"
                aria-label="Follow The Bees Bake House on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFF4E5]/10 hover:bg-[#1E7E34] hover:text-white text-[#FFF4E5] flex items-center justify-center transition-colors border border-[#FFF4E5]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A54A]"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#EAD7B5] mb-4 flex items-center gap-2">
              <span>Explore</span>
              <span className="text-[#D6A54A] text-xs">✦</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#FFF4E5]/80 hover:text-[#D6A54A] transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6A54A]"
                  >
                    <span className="text-xs text-[#D6A54A]/60">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#EAD7B5] mb-4 flex items-center gap-2">
              <span>Our Treats</span>
              <span className="text-[#D6A54A] text-xs">✦</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF4E5]/80">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A]" />
                <span>Classic & Loaded Fudge Brownies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A]" />
                <span>Custom Celebration Cakes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A]" />
                <span>Biscoff & Nutella Specials</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A]" />
                <span>Artisanal Butter Blondies</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D6A54A]" />
                <span>Eggless Options Available</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-[#EAD7B5] mb-4 flex items-center gap-2">
              <span>Bakery Location</span>
              <span className="text-[#D6A54A] text-xs">✦</span>
            </h4>
            <div className="space-y-3.5 text-sm text-[#FFF4E5]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6A54A] shrink-0 mt-0.5" />
                <span>{siteConfig.location}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D6A54A] shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phoneNumber}`}
                  className="hover:text-[#D6A54A] transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D6A54A] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-[#D6A54A] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E7E34] hover:bg-[#166329] text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF4E5]/60">
          <p>© {currentYear} The Bees Bake House. Handcrafted in Coimbatore. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Baked with</span>
            <Heart className="w-3.5 h-3.5 text-[#F5D6D8] fill-current" />
            <span className="font-serif italic text-[#D6A54A]">for your sweetest moments</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
