import React from "react";
import { Link } from "react-router-dom";
import { Home, ShoppingBag } from "lucide-react";
import { BeeDecoration, FlourishDivider } from "../components/BeeDecoration";
import { Button } from "../components/Button";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FFF4E5] px-4 py-16 text-[#422414] text-center">
      <div className="max-w-md mx-auto bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border-2 border-[#EAD7B5] shadow-lg relative">
        <div className="washi-tape washi-tape-blush" />

        <div className="w-16 h-16 rounded-full bg-[#EAD7B5]/60 mx-auto flex items-center justify-center mb-4">
          <BeeDecoration className="w-10 h-10" />
        </div>

        <span className="font-serif text-5xl sm:text-6xl font-extrabold text-[#761C35] block">
          404
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#422414] mt-2">
          Oh Crumbs! Page Not Found
        </h1>

        <FlourishDivider className="my-4" />

        <p className="text-sm sm:text-base text-[#422414]/80 font-sans leading-relaxed">
          It looks like this page wandered off looking for clover flowers or fresh honey. Let's get you back to the delicious goodies!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={Home}>
            <span>Back to Home</span>
          </Button>
          <Button to="/menu" variant="secondary" size="md" icon={ShoppingBag}>
            <span>Explore Menu</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
