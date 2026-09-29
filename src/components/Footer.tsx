import { Cake, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C180B] text-white pt-16 pb-8 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C59B27] flex items-center justify-center text-[#2C180B]">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  Bake Studio <span className="text-[#D4AF37]">By Nandi&apos;s</span>
                </span>
                <span className="text-xs text-amber-200/80 font-medium">
                  बेक स्टूडियो बाय नंदी&apos;स
                </span>
              </div>
            </div>
            <p className="text-sm text-amber-100/70 leading-relaxed mb-6 max-w-sm">
              Khatauli&apos;s favorite bakery for fresh custom cakes, delicious pastries, savory patties, vada pav, and breads. Freshly baked happiness every day!
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-200 hover:bg-[#D4AF37] hover:text-[#2C180B] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-amber-200 hover:bg-[#D4AF37] hover:text-[#2C180B] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg font-bold text-[#E5BA42] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-amber-100/80">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#D4AF37] transition-colors">
                  Menu Highlights
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#order-online" className="hover:text-[#D4AF37] transition-colors">
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg font-bold text-[#E5BA42] mb-4">
              Contact &amp; Address
            </h4>
            <div className="space-y-3 text-sm text-amber-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <span>174, GT Rd, near ICICI Bank, Shivpuri, Khatauli, UP 251201</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:06399303303" className="hover:text-[#D4AF37] font-semibold">
                  063993 03303
                </a>
              </div>
              <div className="text-xs text-amber-200/70 pt-2 border-t border-white/10">
                Open Daily until 10:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-200/60 gap-4">
          <p>© 2026 Bake Studio By Nandi&apos;s. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
            <span>for Khatauli</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
