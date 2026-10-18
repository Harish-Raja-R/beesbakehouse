/**
 * Central Site Configuration for The Bees Bake House
 * Update phone, whatsapp, email, social links, and metadata here.
 */
export const siteConfig = {
  name: "The Bees Bake House",
  tagline: "Homemade with Love in Coimbatore",
  headline: "A Little Sweetness in Every Moment.",
  subheadline:
    "From rich, fudgy brownies to beautifully crafted cakes, every bake is made with care to make your special moments sweeter.",
  storyHeading: "Baked with Love, Shared with Joy.",
  storyParagraphs: [
    "The Bees Bake House is a homemade artisanal bakery nestled in the heart of Coimbatore, Tamil Nadu. Born out of a deep passion for handcrafted baking, we believe that life's most meaningful moments are celebrated with something genuinely sweet.",
    "Every batch of our brownies, blondies, and celebration cakes is baked fresh in small batches using premium ingredients, honest care, and wholesome warmth. Whether you're planning an intimate family birthday, sending a dessert gift box to a loved one, or simply craving an afternoon cocoa treat, we're here to bake it special for you.",
  ],
  location: "Coimbatore, Tamil Nadu, India",
  instagramUrl: "https://www.instagram.com/thebeesbakehouse/",
  instagramHandle: "@thebeesbakehouse",
  
  // Contact details & WhatsApp ordering configuration
  // Replace these with confirmed numbers when provided by the bakery owner
  phoneDisplay: "+91 8248841237 (Orders & Inquiries)",
  phoneNumber: "+918248841237", // Formatted for direct dial / tel:
  whatsappNumber: "918248841237", // Digits with country code, no + or spaces
  whatsappPlaceholderNote: "Configured business contact number for Coimbatore orders",
  email: "thebeesbakehousecafe@gmail.com",
  
  // WhatsApp helper generator with customizable preset messages
  getWhatsAppUrl: (message = "Hello The Bees Bake House! I would like to place an order.") => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/918248841237?text=${encoded}`;
  },

  // Benefits / Value Proposition (Strictly based on provided guidelines)
  benefits: [
    {
      id: "small-batch",
      title: "Freshly Baked in Small Batches",
      description:
        "Every treat is freshly prepared on order, ensuring unparalleled texture, rich flavour, and homemade freshness in every bite.",
      icon: "Sparkles",
    },
    {
      id: "special-moments",
      title: "Made with Care for Special Moments",
      description:
        "Whether it is an intimate birthday, anniversary, or a quiet craving, our handcrafted bakes add warmth to every occasion.",
      icon: "Heart",
    },
    {
      id: "custom-cakes",
      title: "Custom Cakes for Celebrations",
      description:
        "Thoughtfully designed and personalized cakes made to reflect your celebration themes and sweet preferences.",
      icon: "Cake",
    },
  ],

  // Featured Categories
  categories: [
    {
      id: "brownies",
      title: "Signature Brownies",
      subtitle: "Dense, Fudgy & Irresistible",
      description: "Our claim to fame. Ultra-fudgy, crackly-topped gourmet chocolate brownies baked to molten perfection.",
      badge: "Customer Favourite",
      route: "/menu#brownies",
      color: "#422414",
    },
    {
      id: "cakes",
      title: "Homemade Cakes",
      subtitle: "Soft Sponges & Heavenly Flavours",
      description: "From classic chocolate truffle to festive rasamalai and fresh blueberry, celebration cakes made with love.",
      badge: "Celebration Special",
      route: "/menu#cakes",
      color: "#761C35",
    },
    {
      id: "blondies",
      title: "Blondies & Desserts",
      subtitle: "Golden, Buttery & Chewy",
      description: "Golden brown sugar richness with a velvety vanilla profile and delicate sweetness for every dessert craving.",
      badge: "Artisanal Delights",
      route: "/menu#blondies",
      color: "#D6A54A",
    },
  ],

  // Navigation Links
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Our Story", path: "/our-story" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],

  // Brand Palette Constants
  colors: {
    cream: "#FFF4E5",
    parchment: "#EAD7B5",
    chocolate: "#422414",
    burgundy: "#761C35",
    honeyGold: "#D6A54A",
    blush: "#F5D6D8",
    mutedSage: "#A9B79A",
  },
};
