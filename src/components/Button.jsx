import React from "react";
import { Link } from "react-router-dom";

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon: Icon,
  className = "",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A54A] focus-visible:ring-offset-2 cursor-pointer shadow-sm";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs md:text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm md:text-base gap-2",
    lg: "px-8 py-3.5 text-base md:text-lg gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary:
      "bg-[#761C35] hover:bg-[#5b1528] text-[#FFF4E5] shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#761C35]/30",
    secondary:
      "bg-[#EAD7B5] hover:bg-[#dec296] text-[#422414] hover:shadow-md hover:-translate-y-0.5 border border-[#D6A54A]/40",
    whatsapp:
      "bg-[#1E7E34] hover:bg-[#166329] text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-emerald-600/30",
    outline:
      "bg-transparent hover:bg-[#EAD7B5]/40 text-[#422414] border-2 border-[#422414]/20 hover:border-[#761C35] hover:text-[#761C35]",
    honey:
      "bg-[#D6A54A] hover:bg-[#c49237] text-[#422414] font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-[#D6A54A]/40",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("https") || href.startsWith("mailto:") || href.startsWith("tel:");
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} onClick={onClick} {...props}>
      {Icon && <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
