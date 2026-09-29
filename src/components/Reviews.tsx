import { Star, Sparkles, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      text: "Service is too good and behavior is also good",
      author: "Local Guide",
      role: "Verified Google Reviewer",
      rating: 5,
    },
    {
      text: "Very hygienic place, super tasty cakes, and the patties are amazing",
      author: "Khatauli Resident",
      role: "Verified Google Reviewer",
      rating: 5,
    },
    {
      text: "Staff service fast, atmosphere good, yummy food and dessert",
      author: "Happy Customer",
      role: "Verified Google Reviewer",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBE0] border border-[#D4AF37]/30 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Customer Praise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight mb-4">
            Loved by Khatauli Patrons
          </h2>

          {/* Google Overall Rating Banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-2xl bg-[#FFFDF9] border border-[#E5BA42]/40 shadow-bakery">
            <div className="flex items-center gap-1.5 text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4
                      ? "fill-[#D4AF37] text-[#D4AF37]"
                      : "fill-[#D4AF37]/40 text-[#D4AF37]"
                  }`}
                />
              ))}
            </div>
            <span className="font-serif text-xl font-bold text-[#2C180B]">
              4.3 / 5.0 Rating
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="text-sm font-semibold text-[#4A2E19]/80">
              Based on 60+ Google Reviews
            </span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] p-8 rounded-2xl border border-[#E5BA42]/30 shadow-bakery hover:shadow-bakery-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6 group-hover:text-[#D4AF37]/40 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-[#2C180B] font-medium leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="border-t border-[#4A2E19]/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C59B27] flex items-center justify-center font-bold text-white text-sm shadow-sm">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <div className="font-serif font-bold text-sm text-[#2C180B]">
                    {rev.author}
                  </div>
                  <div className="text-xs text-[#4A2E19]/70">{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
