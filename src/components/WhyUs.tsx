import { Sparkles, Cake, Clock, Truck, ShieldCheck } from "lucide-react";

export default function WhyUs() {
  const features = [
    {
      icon: Cake,
      title: "Custom Cake Orders",
      description: "Bespoke designer theme cakes tailored for birthdays, romantic weddings, and grand anniversaries.",
    },
    {
      icon: Clock,
      title: "Pre-Order Popular Items",
      description: "Never miss out on your favorite fresh pastries, cakes, or snacks — reserve them in advance.",
    },
    {
      icon: Truck,
      title: "Bulk Order Delivery",
      description: "Hassle-free bulk catering & doorstep delivery for corporate events, family functions, and parties.",
    },
    {
      icon: ShieldCheck,
      title: "100% Hygienic Preparation",
      description: "Baked with utmost cleanliness, pristine ingredients, and strict safety protocols daily.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F5EBE0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/30 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Nandi&apos;s Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight mb-4">
            Why Choose Bake Studio?
          </h2>
          <p className="text-base sm:text-lg text-[#4A2E19]/80">
            We go the extra mile to make every celebration special with premium quality, taste, and reliability.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF9] p-8 rounded-2xl border border-[#E5BA42]/30 shadow-bakery hover:shadow-bakery-lg transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FAF6F0] via-[#F5EBE0] to-[#E5BA42]/20 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#2C180B] group-hover:text-[#D4AF37] transition-colors shadow-sm">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2C180B] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A2E19]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
