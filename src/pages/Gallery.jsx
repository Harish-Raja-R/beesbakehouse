import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "../config/site";
import { Button } from "../components/Button";
import { FlourishDivider, BeeDecoration, InstagramIcon } from "../components/BeeDecoration";

// Image imports
import categoryBrowniesImg from "../assets/images/category-brownies.jpg";
import categoryCakesImg from "../assets/images/category-cakes.jpg";
import categoryBlondiesImg from "../assets/images/category-blondies.jpg";
import heroSpreadImg from "../assets/images/hero-bakery-spread.jpg";
import bakerCardImg from "../assets/images/baker-card-ingredients.jpg";
import mixerFloralImg from "../assets/images/mixer-floral-packaging.jpg";
import stationeryImg from "../assets/images/brand-stationery-cards.jpg";
import socialCardImg from "../assets/images/social-connection-card.jpg";
import logoImg from "../assets/logo/logo.png";

export function Gallery() {
  const galleryItems = [
    {
      id: 1,
      image: heroSpreadImg,
      title: "The Bakery Morning Spread",
      subtitle: "Fresh chocolate cake & crinkly fudge brownies",
      rotation: "-rotate-1",
      tapeColor: "washi-tape-blush",
      aspect: "aspect-4/3",
    },
    {
      id: 2,
      image: categoryBrowniesImg,
      title: "Signature Molten Fudge Brownies",
      subtitle: "Flaky crinkle crust, molten cocoa core",
      rotation: "rotate-2",
      tapeColor: "washi-tape-sage",
      aspect: "aspect-square",
    },
    {
      id: 3,
      image: bakerCardImg,
      title: "Handcrafted Artisan Ingredients",
      subtitle: "Pure butter, cocoa, and honest care",
      rotation: "-rotate-2",
      tapeColor: "washi-tape",
      aspect: "aspect-square",
    },
    {
      id: 4,
      image: categoryCakesImg,
      title: "Celebration Layered Sponge",
      subtitle: "Hand-piped buttercream and delicate floral garnish",
      rotation: "rotate-1",
      tapeColor: "washi-tape-blush",
      aspect: "aspect-4/3",
    },
    {
      id: 5,
      image: mixerFloralImg,
      title: "Floral Bakery Card & Packaging",
      subtitle: "Handcrafted packaging designed for gifting",
      rotation: "-rotate-1",
      tapeColor: "washi-tape-sage",
      aspect: "aspect-square",
    },
    {
      id: 6,
      image: categoryBlondiesImg,
      title: "Golden Butterscotch Blondie Bars",
      subtitle: "Caramelized brown sugar and flaky sea salt",
      rotation: "rotate-2",
      tapeColor: "washi-tape",
      aspect: "aspect-4/3",
    },
    {
      id: 7,
      image: stationeryImg,
      title: "Bakery Branding & Orders",
      subtitle: "Charming blush and parchment stationery",
      rotation: "-rotate-2",
      tapeColor: "washi-tape-blush",
      aspect: "aspect-square",
    },
    {
      id: 8,
      image: socialCardImg,
      title: "Connected on Instagram",
      subtitle: "@thebeesbakehouse community moments",
      rotation: "rotate-1",
      tapeColor: "washi-tape-sage",
      aspect: "aspect-square",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E5] py-12 md:py-20 text-[#422414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD7B5]/60 border border-[#D6A54A]/30 text-xs font-semibold tracking-wider text-[#761C35] uppercase mb-4">
            <span className="text-[#D6A54A]">✦</span>
            <span>SWEET MEMORIES</span>
            <span className="text-[#D6A54A]">✦</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#422414] tracking-tight">
            Our Bakery Scrapbook
          </h1>

          <FlourishDivider className="my-5" />

          <p className="mt-3 text-base sm:text-lg text-[#422414]/80 leading-relaxed font-sans">
            A visual journal of our freshly baked goodies, celebration cakes, and handcrafted packaging in Coimbatore.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`polaroid-card ${item.rotation} hover:rotate-0 transition-transform duration-300 group`}
            >
              {/* CSS Washi Tape */}
              <div className={`washi-tape ${item.tapeColor}`} />

              <div className={`relative ${item.aspect} overflow-hidden rounded bg-[#FFF4E5]`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>

              <div className="mt-4 px-1">
                <h3 className="font-serif text-lg font-bold text-[#422414] group-hover:text-[#761C35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#422414]/75 mt-1 font-sans">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-16 text-center bg-[#FFFDF9] rounded-3xl p-8 border border-[#EAD7B5] max-w-2xl mx-auto shadow-xs">
          <InstagramIcon className="w-8 h-8 text-[#761C35] mx-auto mb-3" />
          <h2 className="font-serif text-2xl font-bold text-[#422414]">
            Follow Our Baking Journey on Instagram
          </h2>
          <p className="text-sm text-[#422414]/80 mt-2 font-sans">
            See fresh daily oven batches, festive boxes, and behind-the-scenes glimpses.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <Button
              href={siteConfig.instagramUrl}
              variant="primary"
              size="md"
              icon={InstagramIcon}
            >
              <span>Follow @thebeesbakehouse</span>
            </Button>
            <Button to="/menu" variant="secondary" size="md">
              <span>View Full Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
