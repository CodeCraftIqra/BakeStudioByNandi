import { Sparkles, MessageCircle, ExternalLink, Bike, ShieldCheck } from "lucide-react";

export default function OrderOnline() {
  return (
    <section id="order-online" className="py-20 bg-[#F5EBE0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/30 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Fast Home Delivery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight mb-4">
            Order Online — Delivered to Your Doorstep
          </h2>
          <p className="text-base sm:text-lg text-[#4A2E19]/80">
            Crave freshly baked cakes, pastries, or patties? Order directly via Zomato, Swiggy, or instant WhatsApp delivery.
          </p>
        </div>

        {/* Order Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Zomato Card */}
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#E23744] text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Order on Zomato</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Fast doorstep delivery with live order tracking &amp; exclusive partner offers.
              </p>
            </div>
            <div className="flex items-center justify-between font-bold text-sm bg-white/15 px-5 py-3 rounded-2xl group-hover:bg-white group-hover:text-[#E23744] transition-colors">
              <span>Go to Zomato</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Swiggy Card */}
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#FC8019] text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Bike className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Order on Swiggy</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Superfast delivery of fresh cakes &amp; savory items directly to your home.
              </p>
            </div>
            <div className="flex items-center justify-between font-bold text-sm bg-white/15 px-5 py-3 rounded-2xl group-hover:bg-white group-hover:text-[#FC8019] transition-colors">
              <span>Go to Swiggy</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* WhatsApp Direct Order Card */}
          <a
            href="https://wa.me/916399303303?text=Hi%20Bake%20Studio,%20I%20would%20like%20to%20place%20an%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#25D366] text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-2">Order via WhatsApp</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-8">
                Direct custom cake orders, pre-orders &amp; quick inquiries via WhatsApp chat.
              </p>
            </div>
            <div className="flex items-center justify-between font-bold text-sm bg-white/15 px-5 py-3 rounded-2xl group-hover:bg-white group-hover:text-[#25D366] transition-colors">
              <span>Chat on WhatsApp</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>

        {/* Delivery Guarantee Pill */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#4A2E19]/80">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Carefully packed with hygienic food-grade safety packaging</span>
        </div>
      </div>
    </section>
  );
}
