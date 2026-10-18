import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Cake, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { Button } from "../components/Button";
import { FlourishDivider, BeeDecoration } from "../components/BeeDecoration";
import logoImg from "../assets/logo/logo.png";
import bakerCardImg from "../assets/images/baker-card-ingredients.jpg";
import mixerFloralImg from "../assets/images/mixer-floral-packaging.jpg";

export function OurStory() {
  const whatsappUrl = siteConfig.getWhatsAppUrl(
    "Hello The Bees Bake House! I loved reading your story and would love to place an order."
  );

  return (
    <div className="min-h-screen bg-[#FFF4E5] py-12 md:py-20 text-[#422414]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD7B5]/60 border border-[#D6A54A]/30 text-xs font-semibold tracking-wider text-[#761C35] uppercase mb-4">
            <span className="text-[#D6A54A]">✦</span>
            <span>OUR JOURNEY</span>
            <span className="text-[#D6A54A]">✦</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#422414] tracking-tight">
            Baked with Love, <br />
            <span className="text-[#761C35] font-serif italic">Shared with Joy.</span>
          </h1>

          <FlourishDivider className="my-6" />

          <p className="text-base sm:text-xl text-[#422414]/85 leading-relaxed font-sans">
            A small-batch homemade bakery in Coimbatore, Tamil Nadu, dedicated to bringing honest sweetness into everyday moments.
          </p>
        </div>

        {/* Story Content with Imagery */}
        <div className="space-y-16">
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-[#EAD7B5] shadow-sm relative">
            <div className="washi-tape washi-tape-blush" />
            <div className="md:col-span-7 space-y-4">
              <span className="font-script text-2xl sm:text-3xl text-[#761C35]">
                How It Began
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#422414]">
                The Sweet Heart of Coimbatore
              </h2>
              <p className="text-sm sm:text-base text-[#422414]/80 leading-relaxed font-sans">
                The Bees Bake House was founded on a simple, heartfelt promise: that genuine baked goods should feel like home. No factory shortcuts, no artificial aftertastes — just pure butter, premium chocolate, honest flour, and the joy of creating something by hand.
              </p>
              <p className="text-sm sm:text-base text-[#422414]/80 leading-relaxed font-sans">
                Operating out of Coimbatore, Tamil Nadu, we take immense pride in crafting small batches where every brownie has a rich, glossy crackle top and every cake is prepared with attention to flavour and detail.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="polaroid-card rotate-1">
                <div className="aspect-square rounded overflow-hidden bg-[#FFF4E5]">
                  <img
                    src={bakerCardImg}
                    alt="Handcrafted bakery ingredients and tools"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 text-center font-serif text-xs font-semibold text-[#422414]">
                  Pure Ingredients & Craft
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#EAD7B5] text-center">
              <div className="w-12 h-12 rounded-full bg-[#FFF4E5] mx-auto flex items-center justify-center text-[#761C35] mb-4 border border-[#D6A54A]/30">
                <Sparkles className="w-6 h-6 text-[#761C35]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#422414] mb-2">Small-Batch Freshness</h3>
              <p className="text-xs sm:text-sm text-[#422414]/75 leading-relaxed font-sans">
                We bake only when you order. This guarantees optimal moisture, tender crumb, and unmatched aroma.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#EAD7B5] text-center">
              <div className="w-12 h-12 rounded-full bg-[#FFF4E5] mx-auto flex items-center justify-center text-[#761C35] mb-4 border border-[#D6A54A]/30">
                <Heart className="w-6 h-6 text-[#761C35]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#422414] mb-2">Made for Celebrations</h3>
              <p className="text-xs sm:text-sm text-[#422414]/75 leading-relaxed font-sans">
                Every birthday, milestone, or quiet afternoon tea deserves a bake crafted with genuine care.
              </p>
            </div>

            <div className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#EAD7B5] text-center">
              <div className="w-12 h-12 rounded-full bg-[#FFF4E5] mx-auto flex items-center justify-center text-[#761C35] mb-4 border border-[#D6A54A]/30">
                <Cake className="w-6 h-6 text-[#761C35]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#422414] mb-2">Artisanal Packaging</h3>
              <p className="text-xs sm:text-sm text-[#422414]/75 leading-relaxed font-sans">
                Delivered in charming handcrafted boxes and delicate floral packaging ready to be gifted.
              </p>
            </div>
          </div>

          {/* Section 3: Call to Action */}
          <div className="text-center pt-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#422414] mb-4">
              Taste the Homemade Difference
            </h3>
            <p className="text-sm sm:text-base text-[#422414]/80 max-w-lg mx-auto font-sans mb-6">
              Ready to explore our artisan brownies, cakes, and blondies? We look forward to baking for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/menu" variant="primary" size="lg">
                <span>View Bakery Menu</span>
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" size="lg" icon={MessageCircle}>
                <span>Say Hello on WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
