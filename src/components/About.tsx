import { MapPin, Clock, IndianRupee, Award, Heart, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: MapPin,
      title: "Prime Location",
      detail: "174, GT Rd, near ICICI Bank, Shivpuri, Khatauli, UP 251201",
    },
    {
      icon: Clock,
      title: "Fresh Daily Hours",
      detail: "Open Everyday until 10:00 PM",
    },
    {
      icon: IndianRupee,
      title: "Pocket-Friendly",
      detail: "₹200 – ₹400 per person",
    },
    {
      icon: Award,
      title: "Trusted Quality",
      detail: "4.3★ Rating with 60+ Happy Customer Reviews",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative Warm Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A2E19]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBE0] border border-[#D4AF37]/30 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>About Bake Studio</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight leading-tight mb-6">
              Khatauli&apos;s Most Trusted &amp; Beloved Bakery
            </h2>

            <p className="text-base sm:text-lg text-[#4A2E19]/90 leading-relaxed mb-6">
              At <strong className="font-semibold text-[#2C180B]">Bake Studio By Nandi&apos;s</strong>, baking is not just a profession — it is our passion. Located conveniently near ICICI Bank on GT Road, Shivpuri, Khatauli, we have earned the love and trust of local families by serving freshly prepared cakes, rich pastries, and mouth-watering savory snacks.
            </p>

            <p className="text-base sm:text-lg text-[#4A2E19]/90 leading-relaxed mb-8">
              Whether you are looking for custom birthday &amp; anniversary cakes, quick evening snacks like our signature Vada Pav and Dhokla Sandwich, or freshly baked patties, we guarantee premium ingredients, authentic flavor, and 100% hygienic preparation every single day.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F5EBE0] flex items-center justify-center text-[#D4AF37]">
                  <Heart className="w-6 h-6 fill-[#D4AF37]" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-extrabold text-[#2C180B]">100%</div>
                  <div className="text-xs text-[#4A2E19]/80 font-medium">Fresh Ingredients Daily</div>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-[#4A2E19]/15 pl-6">
                <div className="flex flex-col">
                  <div className="text-2xl font-serif font-extrabold text-[#2C180B]">4.3 ★</div>
                  <div className="text-xs text-[#4A2E19]/80 font-medium">60+ Verified Google Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFDF9] p-6 rounded-2xl border border-[#E5BA42]/25 shadow-bakery hover:shadow-bakery-lg transition-all transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF6F0] to-[#F5EBE0] flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37] group-hover:text-[#2C180B] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#2C180B] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A2E19]/80 leading-snug">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
