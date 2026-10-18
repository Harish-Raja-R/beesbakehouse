import React from "react";
import { FlourishDivider } from "./BeeDecoration";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = "",
  showFlourish = true,
  titleClassName = "",
}) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? "text-center mx-auto max-w-2xl" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAD7B5]/50 border border-[#D6A54A]/30 text-xs font-semibold tracking-widest text-[#761C35] uppercase mb-3">
          <span className="text-[#D6A54A]">✦</span>
          <span>{eyebrow}</span>
          <span className="text-[#D6A54A]">✦</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#422414] leading-tight tracking-tight ${titleClassName}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-[#422414]/80 leading-relaxed font-sans">
          {subtitle}
        </p>
      )}

      {showFlourish && <FlourishDivider className="mt-4" />}
    </div>
  );
}
