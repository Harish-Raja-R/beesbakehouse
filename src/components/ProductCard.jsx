import React from "react";
import { MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "../config/site";

export function ProductCard({ item, index = 0 }) {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    `Hello The Bees Bake House! I would like to order the ${item.name} (${item.servings || "custom order"}). Please share availability and details.`
  );

  // Category specific pastel badges and icons
  const categoryStyles = {
    brownies: {
      badge: "bg-[#422414]/10 text-[#422414] border-[#422414]/20",
      accent: "#422414",
    },
    cakes: {
      badge: "bg-[#761C35]/10 text-[#761C35] border-[#761C35]/20",
      accent: "#761C35",
    },
    blondies: {
      badge: "bg-[#D6A54A]/20 text-[#422414] border-[#D6A54A]/40",
      accent: "#D6A54A",
    },
  };

  const style = categoryStyles[item.category] || categoryStyles.brownies;

  return (
    <div className="relative group bg-[#FFFDF9] rounded-2xl p-6 border border-[#EAD7B5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
      {/* Decorative Washi Tape on hover / top */}
      <div className="washi-tape washi-tape-blush opacity-40 group-hover:opacity-85 transition-opacity" />

      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border uppercase tracking-wider ${style.badge}`}
          >
            {item.category === "brownies"
              ? "Brownie"
              : item.category === "cakes"
              ? "Celebration Cake"
              : "Artisanal Blondie"}
          </span>

          <div className="flex items-center gap-1.5">
            {item.isBestseller && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium bg-[#FFF4E5] text-[#761C35] border border-[#761C35]/20 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-[#D6A54A]" />
                Bestseller
              </span>
            )}
            {/* Indian Vegetarian / Bakery Green Indicator */}
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded border border-emerald-600 bg-white"
              title="Vegetarian / Eggless bake available"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#422414] group-hover:text-[#761C35] transition-colors leading-snug">
          {item.name}
        </h3>

        {/* Tagline */}
        {item.tagline && (
          <p className="text-xs font-medium text-[#D6A54A] font-serif italic mt-1">
            ✦ {item.tagline}
          </p>
        )}

        {/* Description */}
        <p className="mt-3 text-sm text-[#422414]/80 leading-relaxed font-sans">
          {item.description}
        </p>

        {/* Details pill / Batch info */}
        <div className="mt-4 pt-3 border-t border-[#EAD7B5]/60 flex flex-wrap items-center justify-between text-xs text-[#422414]/70">
          <span className="font-medium text-[#761C35]">{item.servings}</span>
          <span className="italic">{item.dietary}</span>
        </div>
      </div>

      {/* Action: WhatsApp order */}
      <div className="mt-5 pt-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#FFF4E5] hover:bg-[#761C35] text-[#422414] hover:text-[#FFF4E5] border border-[#EAD7B5] hover:border-[#761C35] text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-[#FFF4E5] transition-colors" />
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
