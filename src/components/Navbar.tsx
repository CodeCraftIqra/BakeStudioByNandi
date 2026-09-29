"use client";

import { useState, useEffect } from "react";
import { Phone, ShoppingBag, Menu as MenuIcon, X, Cake } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Us", href: "#why-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Order Online", href: "#order-online" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-md border-b border-[#E5BA42]/20"
          : "bg-gradient-to-b from-[#2C180B]/80 via-[#2C180B]/40 to-transparent py-4 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C59B27] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Cake className="w-5 h-5 text-[#2C180B]" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg sm:text-xl font-bold tracking-tight leading-tight transition-colors ${
                  isScrolled ? "text-[#2C180B]" : "text-white"
                }`}
              >
                Bake Studio <span className="text-[#D4AF37]">By Nandi's</span>
              </span>
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isScrolled ? "text-[#4A2E19]/80" : "text-amber-100/90"
                }`}
              >
                बेक स्टूडियो बाय नंदी'स
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#D4AF37] ${
                  isScrolled ? "text-[#3D2314]" : "text-amber-50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:06399303303"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                isScrolled
                  ? "border-[#3D2314]/20 text-[#3D2314] hover:bg-[#3D2314] hover:text-white"
                  : "border-white/30 text-white hover:bg-white/20"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Call Now</span>
            </a>
            <a
              href="#order-online"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#2C180B] bg-gradient-to-r from-[#E5BA42] via-[#D4AF37] to-[#C59B27] hover:brightness-105 transition-all shadow-sm hover:shadow"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="tel:06399303303"
              className="p-2 rounded-full bg-[#D4AF37] text-[#2C180B] shadow"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-[#2C180B] hover:bg-[#F5EBE0]"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-[#E5BA42]/30 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-[#2C180B] hover:text-[#D4AF37] border-b border-[#4A2E19]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#order-online"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-[#2C180B] bg-gradient-to-r from-[#E5BA42] via-[#D4AF37] to-[#C59B27] shadow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Online Now</span>
              </a>
              <a
                href="tel:06399303303"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold border border-[#3D2314]/30 text-[#3D2314] hover:bg-[#3D2314] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call 063993 03303</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
