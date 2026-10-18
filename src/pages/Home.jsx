import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Sparkles,
  Heart,
  ArrowRight,
  Cake,
  Cookie,
  Flame,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";
import { siteConfig } from "../config/site";
import { menuItems } from "../data/menu";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { ProductCard } from "../components/ProductCard";
import { BeeDecoration, FlourishDivider, HeartIcon } from "../components/BeeDecoration";

// Asset imports
import logoImg from "../assets/logo/logo.png";
import heroSpreadImg from "../assets/images/hero-bakery-spread.jpg";
import categoryBrowniesImg from "../assets/images/category-brownies.jpg";
import categoryCakesImg from "../assets/images/category-cakes.jpg";
import categoryBlondiesImg from "../assets/images/category-blondies.jpg";
import bakerCardImg from "../assets/images/baker-card-ingredients.jpg";
import mixerFloralImg from "../assets/images/mixer-floral-packaging.jpg";
import stationeryImg from "../assets/images/brand-stationery-cards.jpg";
import socialCardImg from "../assets/images/social-connection-card.jpg";

export function Home() {
  const [bestsellerFilter, setBestsellerFilter] = useState("all");

  const whatsappHeroUrl = siteConfig.getWhatsAppUrl(
    "Hello The Bees Bake House! I would like to place an order from your homemade bakery in Coimbatore."
  );

  const whatsappCtaUrl = siteConfig.getWhatsAppUrl(
    "Hello The Bees Bake House! Something sweet is calling! I'd love to discuss an order."
  );

  // Filtered bestsellers (strictly from actual menu)
  const filteredBestsellers = menuItems
    .filter((item) => item.isBestseller)
    .filter((item) => (bestsellerFilter === "all" ? true : item.category === bestsellerFilter))
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-[#FFF4E5] text-[#422414] overflow-hidden">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-parchment-stripes border-b border-[#EAD7B5]/60 overflow-hidden">
        {/* Decorative corner background flourishes */}
        <div className="absolute top-6 left-6 opacity-30 hidden lg:block pointer-events-none">
          <BeeDecoration className="w-10 h-10" />
        </div>
        <div className="absolute top-24 right-12 opacity-35 hidden md:block pointer-events-none">
          <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#D6A54A]/40 flex items-center justify-center">
            <HeartIcon className="w-6 h-6 text-[#761C35]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD7B5]/70 border border-[#D6A54A]/40 text-xs sm:text-sm font-semibold tracking-wider text-[#761C35] uppercase shadow-2xs">
                <span className="text-[#D6A54A]">✦</span>
                <span>HOMEMADE WITH LOVE IN COIMBATORE</span>
                <span className="text-[#D6A54A]">✦</span>
              </div>

              {/* Headline */}
              <div className="relative">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#422414] leading-[1.15] tracking-tight">
                  A Little Sweetness <br className="hidden sm:inline" />
                  in Every{" "}
                  <span className="relative inline-block text-[#761C35]">
                    Moment.
                    {/* Gentle script underline flourish */}
                    <svg
                      viewBox="0 0 200 16"
                      fill="none"
                      className="absolute -bottom-2 left-0 w-full text-[#D6A54A] h-3 pointer-events-none"
                    >
                      <path
                        d="M2 12 Q50 2 100 8 T198 6"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h1>

                {/* Floating Gentle Mascot Bee near Hero */}
                <div className="absolute -top-10 -right-6 sm:top-2 sm:right-6 lg:-right-8 pointer-events-none">
                  <div className="flex items-center gap-1 bg-[#FFFDF9]/90 border border-[#EAD7B5] px-2.5 py-1 rounded-full shadow-xs text-xs font-serif italic text-[#761C35]">
                    <BeeDecoration className="w-6 h-6" />
                    <span>Buzzing with fresh bakes!</span>
                  </div>
                </div>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg md:text-xl text-[#422414]/85 leading-relaxed max-w-2xl font-sans mx-auto lg:mx-0">
                From rich, fudgy brownies to beautifully crafted cakes, every bake is made with care to make your special moments sweeter.
              </p>

              {/* Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  to="/menu"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>

                <Button
                  href={whatsappHeroUrl}
                  variant="whatsapp"
                  size="lg"
                  icon={MessageCircle}
                  className="w-full sm:w-auto"
                >
                  <span>Order on WhatsApp</span>
                </Button>
              </div>

              {/* Small trust badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-[#422414]/75">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Small-batch artisan baking
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#D6A54A]">★</span>
                  Eggless & Veg options
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#761C35] fill-current" />
                  Coimbatore hand-delivery
                </span>
              </div>
            </div>

            {/* Right Visual Arrangement Column */}
            <div className="lg:col-span-5 relative">
              {/* Outer Parchment Frame */}
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Washi tape decoration at top */}
                <div className="washi-tape washi-tape-blush" />

                {/* Main Hero Card Container */}
                <div className="polaroid-card rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-lg aspect-4/3 bg-[#FFF4E5]">
                    <img
                      src={heroSpreadImg}
                      alt="Artisanal chocolate cake, fudge brownies, and honey on rustic bakery table"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                      width="600"
                      height="450"
                    />

                    {/* Badge on Image */}
                    <div className="absolute bottom-3 left-3 bg-[#FFF4E5]/95 backdrop-blur-xs px-3 py-1.5 rounded-full text-xs font-serif font-bold text-[#422414] border border-[#EAD7B5] shadow-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D6A54A]" />
                      <span>Freshly Baked in Coimbatore</span>
                    </div>
                  </div>

                  {/* Caption underneath Polaroid */}
                  <div className="mt-4 flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={logoImg}
                        alt="The Bees Bake House logo"
                        className="w-8 h-8 rounded-full border border-[#D6A54A]/50 object-contain"
                      />
                      <span className="font-script text-xl sm:text-2xl text-[#761C35]">
                        Baked with Love
                      </span>
                    </div>
                    <span className="text-xs font-medium text-[#422414]/60 uppercase tracking-widest font-sans">
                      Artisan Bakes
                    </span>
                  </div>
                </div>

                {/* Overlapping Small Badge Card */}
                <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-[#FFFDF9] border border-[#EAD7B5] p-3 rounded-2xl shadow-lg flex items-center gap-3 -rotate-3 hover:rotate-0 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-[#EAD7B5]/60 flex items-center justify-center text-[#761C35] shrink-0">
                    <Cake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#422414] block">Made to Order</span>
                    <span className="text-[11px] text-[#422414]/70 block">Always warm & fresh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED CATEGORIES
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-[#EAD7B5]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="HANDCRAFTED SPECIALTIES"
            title="Our Signature Collections"
            subtitle="Explore our handcrafted range of fudge brownies, celebration cakes, and golden blondies made with honest ingredients."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Category 1: Brownies */}
            <div className="polaroid-card -rotate-1 group">
              <div className="washi-tape washi-tape-blush" />
              <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-[#EAD7B5]/40 mb-4">
                <img
                  src={categoryBrowniesImg}
                  alt="Stack of fudgy dark chocolate brownies with crinkly crust"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <span className="absolute top-3 left-3 bg-[#422414] text-[#FFF4E5] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Customer Favourite
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#422414] group-hover:text-[#761C35] transition-colors">
                Signature Brownies
              </h3>
              <p className="mt-2 text-sm text-[#422414]/80 leading-relaxed font-sans">
                Dense, fudgy, and crackly-topped. From classic fudge and triple chocolate to Lotus Biscoff, Nutella, and loaded nuts.
              </p>
              <div className="mt-5 pt-3 border-t border-[#EAD7B5]/60 flex items-center justify-between">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#761C35] hover:text-[#422414] transition-colors"
                >
                  <span>Explore Brownies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-[#D6A54A] font-medium font-serif italic">10 Flavours</span>
              </div>
            </div>

            {/* Category 2: Cakes */}
            <div className="polaroid-card rotate-1 group">
              <div className="washi-tape washi-tape-sage" />
              <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-[#EAD7B5]/40 mb-4">
                <img
                  src={categoryCakesImg}
                  alt="Handcrafted two-tier celebration sponge cake with fresh florals"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <span className="absolute top-3 left-3 bg-[#761C35] text-[#FFF4E5] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Celebration Special
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#422414] group-hover:text-[#761C35] transition-colors">
                Homemade Cakes
              </h3>
              <p className="mt-2 text-sm text-[#422414]/80 leading-relaxed font-sans">
                Layered sponges with velvety frosting. Featuring chocolate truffle, red velvet, blueberry, gulab jamun, and rasamalai.
              </p>
              <div className="mt-5 pt-3 border-t border-[#EAD7B5]/60 flex items-center justify-between">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#761C35] hover:text-[#422414] transition-colors"
                >
                  <span>Explore Cakes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-[#D6A54A] font-medium font-serif italic">8 Highlights</span>
              </div>
            </div>

            {/* Category 3: Blondies & Desserts */}
            <div className="polaroid-card -rotate-1 group">
              <div className="washi-tape" />
              <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-[#EAD7B5]/40 mb-4">
                <img
                  src={categoryBlondiesImg}
                  alt="Golden butterscotch blondie bars on parchment paper"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <span className="absolute top-3 left-3 bg-[#D6A54A] text-[#422414] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Artisanal Gold
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#422414] group-hover:text-[#761C35] transition-colors">
                Blondies & Desserts
              </h3>
              <p className="mt-2 text-sm text-[#422414]/80 leading-relaxed font-sans">
                Golden brown sugar richness, sweet cream butter, and aromatic vanilla baked to chewy caramel-like perfection.
              </p>
              <div className="mt-5 pt-3 border-t border-[#EAD7B5]/60 flex items-center justify-between">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#761C35] hover:text-[#422414] transition-colors"
                >
                  <span>Explore Blondies</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-xs text-[#D6A54A] font-medium font-serif italic">Classic Treat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BESTSELLERS SECTION
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF4E5] border-b border-[#EAD7B5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FRESH FROM THE OVEN"
            title="Beloved Bakery Bestsellers"
            subtitle="Handcrafted favorites made fresh to order. Select any item to initiate a quick WhatsApp inquiry."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {[
              { id: "all", label: "All Bestsellers" },
              { id: "brownies", label: "Brownies" },
              { id: "cakes", label: "Cakes" },
              { id: "blondies", label: "Blondies" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setBestsellerFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  bestsellerFilter === tab.id
                    ? "bg-[#761C35] text-[#FFF4E5] shadow-sm"
                    : "bg-[#EAD7B5]/50 text-[#422414] hover:bg-[#EAD7B5] border border-[#D6A54A]/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBestsellers.map((item, idx) => (
              <ProductCard key={item.id} item={item} index={idx} />
            ))}
          </div>

          {/* Link to Full Menu */}
          <div className="mt-12 text-center">
            <Button to="/menu" variant="secondary" size="lg" icon={ShoppingBag}>
              <span>View Full Menu & All 19 Flavours</span>
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US?
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-[#EAD7B5]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE ARTISANAL DIFFERENCE"
            title="Why Choose The Bees Bake House"
            subtitle="Rooted in genuine care and passion for handcrafted baking."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.benefits.map((benefit, idx) => (
              <div
                key={benefit.id}
                className="bg-[#FFF4E5]/60 rounded-2xl p-8 border border-[#EAD7B5] hover:border-[#D6A54A] transition-colors relative group"
              >
                {/* Washi tape accent on first & last card */}
                {idx !== 1 && <div className="washi-tape washi-tape-sage opacity-40" />}

                <div className="w-12 h-12 rounded-xl bg-[#EAD7B5] text-[#761C35] flex items-center justify-center mb-6 shadow-2xs group-hover:scale-110 transition-transform">
                  {benefit.icon === "Sparkles" && <Sparkles className="w-6 h-6 text-[#761C35]" />}
                  {benefit.icon === "Heart" && <Heart className="w-6 h-6 text-[#761C35]" />}
                  {benefit.icon === "Cake" && <Cake className="w-6 h-6 text-[#761C35]" />}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#422414] mb-3">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-[#422414]/80 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND STORY
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-gingham border-b border-[#EAD7B5]/60 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-[#EAD7B5] shadow-xl relative overflow-hidden">
            {/* Mascot decoration */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-none">
              <BeeDecoration className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <span className="font-script text-3xl sm:text-4xl text-[#761C35] block mb-2">
                Our Little Bakery
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#422414] tracking-tight">
                {siteConfig.storyHeading}
              </h2>

              <FlourishDivider className="my-5" />

              <div className="space-y-4 text-base sm:text-lg text-[#422414]/85 leading-relaxed font-sans text-left sm:text-center">
                {siteConfig.storyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/our-story" variant="primary" size="md">
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button to="/contact" variant="outline" size="md">
                  <span>Get in Touch</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GALLERY PREVIEW
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFFDF9] border-b border-[#EAD7B5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="A GLIMPSE INTO OUR KITCHEN"
            title="Artisanal Moments & Packaging"
            subtitle="A preview of our handcrafted bakery moments, packaging cards, and freshly baked delights."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gallery Item 1 */}
            <div className="polaroid-card -rotate-2 hover:rotate-0">
              <div className="washi-tape washi-tape-blush" />
              <div className="aspect-square rounded overflow-hidden bg-[#FFF4E5]">
                <img
                  src={categoryBrowniesImg}
                  alt="Fudge brownies fresh from the oven"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <p className="mt-3 text-center font-serif text-sm font-semibold text-[#422414]">
                Fresh Fudge Brownies
              </p>
            </div>

            {/* Gallery Item 2 */}
            <div className="polaroid-card rotate-2 hover:rotate-0">
              <div className="washi-tape washi-tape-sage" />
              <div className="aspect-square rounded overflow-hidden bg-[#FFF4E5]">
                <img
                  src={bakerCardImg}
                  alt="Farm-fresh butter, rich cocoa, vanilla pods, and honey dipper on rustic bakery table"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <p className="mt-3 text-center font-serif text-sm font-semibold text-[#422414]">
                Pure Ingredients & Craft
              </p>
            </div>

            {/* Gallery Item 3 */}
            <div className="polaroid-card -rotate-1 hover:rotate-0">
              <div className="washi-tape" />
              <div className="aspect-square rounded overflow-hidden bg-[#FFF4E5]">
                <img
                  src={categoryCakesImg}
                  alt="Celebration layered sponge cake"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <p className="mt-3 text-center font-serif text-sm font-semibold text-[#422414]">
                Celebration Cakes
              </p>
            </div>

            {/* Gallery Item 4 */}
            <div className="polaroid-card rotate-1 hover:rotate-0">
              <div className="washi-tape washi-tape-blush" />
              <div className="aspect-square rounded overflow-hidden bg-[#FFF4E5]">
                <img
                  src={mixerFloralImg}
                  alt="Handcrafted pastry gift box tied with rustic twine and blush ribbon with dried flowers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <p className="mt-3 text-center font-serif text-sm font-semibold text-[#422414]">
                Artisanal Gift Packaging
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button to="/gallery" variant="secondary" size="md">
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ORDERING CALL TO ACTION
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FFF4E5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-[#EAD7B5] mx-auto flex items-center justify-center mb-6 shadow-sm border border-[#D6A54A]/50">
            <BeeDecoration className="w-10 h-10" />
          </div>

          <span className="font-script text-3xl sm:text-4xl text-[#761C35] block mb-2">
            Freshly Made in Coimbatore
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#422414] tracking-tight">
            Something Sweet Is Calling.
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#422414]/85 leading-relaxed max-w-2xl mx-auto font-sans">
            Planning a celebration or craving a brownie? We'd love to bake something special for you.
          </p>

          <FlourishDivider className="my-6" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              href={whatsappCtaUrl}
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              className="w-full sm:w-auto"
            >
              <span>Order on WhatsApp</span>
            </Button>

            <Button
              to="/menu"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>View Our Menu</span>
            </Button>
          </div>

          <p className="mt-6 text-xs text-[#422414]/65">
            Direct orders via WhatsApp · Please provide 24-48 hours notice for custom celebration cakes
          </p>
        </div>
      </section>
    </div>
  );
}
