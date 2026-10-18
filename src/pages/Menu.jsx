import React, { useState } from "react";
import { MessageCircle, ShoppingBag, Sparkles, Filter } from "lucide-react";
import { menuCategories, menuItems } from "../data/menu";
import { siteConfig } from "../config/site";
import { SectionHeading } from "../components/SectionHeading";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/Button";
import { BeeDecoration } from "../components/BeeDecoration";

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = menuItems.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const whatsappGeneralUrl = siteConfig.getWhatsAppUrl(
    "Hello The Bees Bake House! I would like to inquire about placing a custom bakery order."
  );

  return (
    <div className="min-h-screen bg-[#FFF4E5] py-12 md:py-16 text-[#422414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD7B5]/60 border border-[#D6A54A]/30 text-xs font-semibold tracking-wider text-[#761C35] uppercase mb-4">
            <span className="text-[#D6A54A]">✦</span>
            <span>HANDCRAFTED ARTISAN MENU</span>
            <span className="text-[#D6A54A]">✦</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#422414] tracking-tight">
            Our Bakery Menu
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#422414]/80 leading-relaxed font-sans">
            Every item is baked fresh in small batches using honest ingredients. Choose your favourite brownies, cakes, or blondies and order directly on WhatsApp.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {menuCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#761C35] text-[#FFF4E5] shadow-sm"
                    : "bg-[#FFFDF9] text-[#422414] hover:bg-[#EAD7B5]/60 border border-[#EAD7B5]"
                }`}
              >
                <span>{cat.label}</span>
                {cat.id !== "all" && (
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-[#FFF4E5]/20 text-white" : "bg-[#EAD7B5] text-[#422414]"
                    }`}
                  >
                    {menuItems.filter((m) => m.category === cat.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <ProductCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* Custom Order Banner */}
        <div className="mt-16 bg-[#FFFDF9] border-2 border-[#EAD7B5] rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-sm relative overflow-hidden">
          <div className="washi-tape washi-tape-blush" />
          <BeeDecoration className="w-8 h-8 mb-3" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#422414]">
            Looking for a Custom Celebration Cake or Custom Box?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#422414]/80 max-w-xl mx-auto font-sans leading-relaxed">
            We happily take customized orders for birthdays, baby showers, festive celebrations, and corporate dessert boxes in Coimbatore.
          </p>
          <div className="mt-6">
            <Button
              href={whatsappGeneralUrl}
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
            >
              <span>Discuss Custom Order on WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
