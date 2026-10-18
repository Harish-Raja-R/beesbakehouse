import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "../config/site";
import { menuItems } from "../data/menu";
import { Button } from "../components/Button";
import { FlourishDivider, BeeDecoration, InstagramIcon } from "../components/BeeDecoration";

export function Contact() {
  const [selectedItem, setSelectedItem] = useState("Classic Fudge Brownie");
  const [orderQuantity, setOrderQuantity] = useState("Box of 6");
  const [customNote, setCustomNote] = useState("");
  const [eventDate, setEventDate] = useState("");

  const generateWhatsAppMessage = () => {
    let msg = `Hello The Bees Bake House! I would like to place an order from Coimbatore.\n\n`;
    msg += `🧁 Treat: ${selectedItem}\n`;
    msg += `📦 Quantity / Size: ${orderQuantity}\n`;
    if (eventDate) msg += `📅 Needed Date: ${eventDate}\n`;
    if (customNote) msg += `✍️ Notes: ${customNote}\n`;
    msg += `\nPlease let me know your availability and payment details. Thank you!`;
    return msg;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const url = siteConfig.getWhatsAppUrl(generateWhatsAppMessage());
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#FFF4E5] py-12 md:py-20 text-[#422414]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAD7B5]/60 border border-[#D6A54A]/30 text-xs font-semibold tracking-wider text-[#761C35] uppercase mb-4">
            <span className="text-[#D6A54A]">✦</span>
            <span>GET IN TOUCH</span>
            <span className="text-[#D6A54A]">✦</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#422414] tracking-tight">
            Order or Connect With Us
          </h1>

          <FlourishDivider className="my-5" />

          <p className="mt-3 text-base sm:text-lg text-[#422414]/80 leading-relaxed font-sans">
            We'd love to bake something special for your celebration or everyday sweet tooth. Reach out directly via WhatsApp, Instagram, or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Information Box */}
            <div className="bg-[#FFFDF9] rounded-3xl p-8 border border-[#EAD7B5] shadow-sm relative">
              <div className="washi-tape washi-tape-sage" />
              <h2 className="font-serif text-2xl font-bold text-[#422414] mb-6 flex items-center gap-2">
                <span>Bakery Details</span>
                <BeeDecoration className="w-6 h-6" />
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAD7B5]/60 text-[#761C35] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#761C35] uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm sm:text-base font-medium text-[#422414] block mt-0.5">
                      {siteConfig.location}
                    </span>
                    <span className="text-xs text-[#422414]/70 block">
                      Handcrafted home bakery delivery across Coimbatore
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAD7B5]/60 text-[#761C35] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#761C35] uppercase tracking-wider block">
                      WhatsApp Orders
                    </span>
                    <a
                      href={siteConfig.getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#1E7E34] hover:underline block mt-0.5"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <span className="text-xs text-[#422414]/70 block">
                      Fastest response for menus & custom queries
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAD7B5]/60 text-[#761C35] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#761C35] uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneNumber}`}
                      className="text-sm sm:text-base font-medium text-[#422414] hover:text-[#761C35] transition-colors block mt-0.5"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAD7B5]/60 text-[#761C35] flex items-center justify-center shrink-0 mt-0.5">
                    <InstagramIcon className="w-5 h-5 text-pink-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#761C35] uppercase tracking-wider block">
                      Instagram Direct
                    </span>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium text-[#761C35] hover:underline block mt-0.5"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                    <span className="text-xs text-[#422414]/70 block">
                      DM us or tag your celebration photos!
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EAD7B5]/60 text-[#761C35] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#761C35] uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm sm:text-base font-medium text-[#422414] hover:text-[#761C35] transition-colors block mt-0.5"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Guidelines */}
            <div className="bg-[#FFF4E5] rounded-2xl p-6 border border-[#EAD7B5]">
              <h3 className="font-serif text-lg font-bold text-[#422414] mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D6A54A]" />
                <span>How to Order</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#422414]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#D6A54A] font-bold">1.</span>
                  <span>Select your favourite bake or customized flavor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6A54A] font-bold">2.</span>
                  <span>Send us a message on WhatsApp with your date and quantity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D6A54A] font-bold">3.</span>
                  <span>We confirm slot availability and bake fresh for your collection or delivery.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Order Builder Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-10 border border-[#EAD7B5] shadow-md relative">
              <div className="washi-tape washi-tape-blush" />

              <div className="mb-6">
                <span className="font-script text-2xl text-[#761C35] block">
                  Quick Inquiry
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#422414]">
                  Send Your WhatsApp Order Request
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#422414]/75 font-sans">
                  Choose your treat and details below. Clicking “Send via WhatsApp” will open a prefilled chat with our bakery.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-5">
                <div>
                  <label
                    htmlFor="menu-item-select"
                    className="block text-xs font-bold text-[#761C35] uppercase tracking-wider mb-1.5"
                  >
                    Select Bake / Item
                  </label>
                  <select
                    id="menu-item-select"
                    value={selectedItem}
                    onChange={(e) => setSelectedItem(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF4E5]/50 border border-[#EAD7B5] focus:border-[#761C35] focus:outline-none text-sm text-[#422414] font-medium"
                  >
                    {menuItems.map((item) => (
                      <option key={item.id} value={item.name}>
                        {item.name} ({item.category === "brownies" ? "Brownie" : item.category === "cakes" ? "Cake" : "Blondie"})
                      </option>
                    ))}
                    <option value="Custom Celebration Cake">Custom Celebration Cake (Discuss Theme)</option>
                    <option value="Assorted Brownie Gift Box">Assorted Brownie Gift Box</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quantity-select"
                      className="block text-xs font-bold text-[#761C35] uppercase tracking-wider mb-1.5"
                    >
                      Portion / Quantity
                    </label>
                    <select
                      id="quantity-select"
                      value={orderQuantity}
                      onChange={(e) => setOrderQuantity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF4E5]/50 border border-[#EAD7B5] focus:border-[#761C35] focus:outline-none text-sm text-[#422414] font-medium"
                    >
                      <option value="Box of 4">Box of 4</option>
                      <option value="Box of 6">Box of 6</option>
                      <option value="Box of 9">Box of 9</option>
                      <option value="Box of 12">Box of 12</option>
                      <option value="0.5 kg Cake">0.5 kg Cake</option>
                      <option value="1 kg Cake">1 kg Cake</option>
                      <option value="Custom Multi-tier Cake">Custom Multi-tier Cake</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="event-date"
                      className="block text-xs font-bold text-[#761C35] uppercase tracking-wider mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <input
                      id="event-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF4E5]/50 border border-[#EAD7B5] focus:border-[#761C35] focus:outline-none text-sm text-[#422414] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="custom-notes"
                    className="block text-xs font-bold text-[#761C35] uppercase tracking-wider mb-1.5"
                  >
                    Special Requests (Eggless, Celebration Message, etc.)
                  </label>
                  <textarea
                    id="custom-notes"
                    rows="3"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g., Eggless preference, Happy Birthday topper message, delivery area in Coimbatore..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF4E5]/50 border border-[#EAD7B5] focus:border-[#761C35] focus:outline-none text-sm text-[#422414] font-medium"
                  />
                </div>

                {/* Live Message Preview */}
                <div className="p-4 rounded-xl bg-[#FFF4E5]/60 border border-[#EAD7B5] text-xs text-[#422414]/80">
                  <span className="font-semibold text-[#761C35] block mb-1">
                    WhatsApp Message Preview:
                  </span>
                  <p className="whitespace-pre-line font-mono text-[11px] bg-white/70 p-2.5 rounded border border-[#EAD7B5]/40 text-[#422414]">
                    {generateWhatsAppMessage()}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#1E7E34] hover:bg-[#166329] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
