import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { OurStory } from "./pages/OurStory";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { siteConfig } from "./config/site";
import { BeeDecoration } from "./components/BeeDecoration";

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const floatingWhatsAppUrl = siteConfig.getWhatsAppUrl(
    "Hello The Bees Bake House! I would like to place a bakery order."
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FFF4E5] font-sans antialiased text-[#422414] selection:bg-[#EAD7B5] selection:text-[#422414]">
        {/* Sticky Header */}
        <Navbar />

        {/* Route Pages */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group">
          <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#FFFDF9] text-[#422414] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-[#EAD7B5] pointer-events-none">
            <span>Order on WhatsApp</span>
          </div>

          <a
            href={floatingWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1E7E34] hover:bg-[#166329] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A54A] cursor-pointer"
            aria-label="Chat on WhatsApp with The Bees Bake House"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
