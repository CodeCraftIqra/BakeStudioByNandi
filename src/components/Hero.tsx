import Image from "next/image";
import { Star, Phone, ShoppingBag, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Warm Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Bake Studio By Nandi's Fresh Bakery Display"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse-subtle"
        />
        {/* Multi-layered Warm Backdrop Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C0E07]/90 via-[#2C180B]/80 to-[#1C0E07]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left pt-8">
        <div className="max-w-3xl">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/40 text-white mb-6 shadow-lg">
            <div className="flex items-center gap-1 text-[#E5BA42]">
              <Star className="w-4 h-4 fill-[#E5BA42] text-[#E5BA42]" />
              <span className="font-bold text-sm">4.3</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span className="text-xs font-medium text-amber-100">
              Based on 60+ Google Reviews
            </span>
          </div>

          {/* Business Titles */}
          <div className="mb-4">
            <span className="block text-sm sm:text-base font-semibold tracking-wider uppercase text-[#E5BA42] mb-1">
              Khatauli&apos;s Favorite Artisanal Bakery
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">
              Bake Studio <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4CE58] via-[#D4AF37] to-[#C59B27]">
                By Nandi&apos;s
              </span>
            </h1>
            <p className="mt-2 text-lg sm:text-2xl font-medium text-amber-100/90 tracking-wide font-serif">
              बेक स्टूडियो बाय नंदी&apos;स
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl font-light text-amber-50/90 max-w-2xl mb-8 leading-relaxed">
            &ldquo;Freshly Baked Happiness, Every Day&rdquo;
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <a
              href="#order-online"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-[#2C180B] bg-gradient-to-r from-[#E5BA42] via-[#D4AF37] to-[#C59B27] hover:from-[#F4CE58] hover:to-[#D4AF37] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Order Now</span>
            </a>
            <a
              href="tel:06399303303"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-base text-white border-2 border-[#D4AF37] bg-black/30 backdrop-blur-md hover:bg-[#D4AF37] hover:text-[#2C180B] shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-[#E5BA42] group-hover:text-[#2C180B]" />
              <span>Call 063993 03303</span>
            </a>
          </div>

          {/* Quick Highlight Pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 pt-4 border-t border-white/15 text-amber-100/80 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E5BA42]" />
              <span>GT Rd, Khatauli</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#E5BA42]" />
              <span>Open till 10 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E5BA42]" />
              <span>100% Hygienic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
