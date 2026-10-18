import React from "react";

/**
 * Handcrafted SVG Flourishes & Bakery Decorations
 * Includes the cute bee, honey-gold stars, floral flourishes, and vintage dividers.
 */

export function BeeDecoration({ className = "w-8 h-8", animated = true }) {
  return (
    <div className={`inline-block select-none ${animated ? "animate-bee-float" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        {/* Wings */}
        <path
          d="M17 12 C12 6, 20 3, 24 9 C25 11, 24 14, 21 15 Z"
          fill="#FFFFFF"
          fillOpacity="0.88"
          stroke="#422414"
          strokeWidth="1.2"
          className="animate-wing-flutter"
        />
        <path
          d="M22 10 C25 5, 33 6, 32 12 C31 15, 28 16, 25 16 Z"
          fill="#FFFFFF"
          fillOpacity="0.88"
          stroke="#422414"
          strokeWidth="1.2"
          className="animate-wing-flutter"
        />

        {/* Body */}
        <ellipse cx="20" cy="22" rx="10" ry="8" transform="rotate(-15 20 22)" fill="#D6A54A" stroke="#422414" strokeWidth="1.4" />
        
        {/* Stripes */}
        <path d="M17 15 C18 19, 17 24, 15 28" stroke="#422414" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M21 15 C22 20, 21 25, 19 29" stroke="#422414" strokeWidth="2.2" strokeLinecap="round" />

        {/* Face */}
        <circle cx="26" cy="18" r="5.5" fill="#EAD7B5" stroke="#422414" strokeWidth="1.4" />
        <circle cx="28" cy="17" r="1.2" fill="#422414" />
        <circle cx="29.5" cy="19" r="1.2" fill="#F5D6D8" />
        <path d="M27 20 Q28.5 21.5 30 20" stroke="#422414" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Antennae */}
        <path d="M28 13 Q30 9 32 10" stroke="#422414" strokeWidth="1" strokeLinecap="round" fill="none" />
        <path d="M25 12 Q25 8 23 9" stroke="#422414" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Honey Pot */}
        <g transform="translate(18, 25) rotate(-10)">
          <path d="M3 2 L9 2 L10 7 Q10 10 6 10 Q2 10 2 7 Z" fill="#761C35" stroke="#422414" strokeWidth="0.9" />
          <ellipse cx="6" cy="2" rx="3" ry="0.9" fill="#D6A54A" />
        </g>
      </svg>
    </div>
  );
}

export function FlourishDivider({ className = "my-6" }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-[#D6A54A] ${className}`} aria-hidden="true">
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-80">
        <path d="M0 6 Q15 0 25 6 Q35 12 40 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="text-sm font-serif italic text-[#761C35]">✦</span>
      <svg width="40" height="12" viewBox="0 0 40 12" fill="none" className="opacity-80 transform scale-x-[-1]">
        <path d="M0 6 Q15 0 25 6 Q35 12 40 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function HeartIcon({ className = "w-4 h-4 text-[#761C35]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`inline-block ${className}`} aria-hidden="true">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

