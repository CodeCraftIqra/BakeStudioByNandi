"use client";

import { useState } from "react";
import Image from "next/image";
import { Cake, Sparkles, Check, ArrowRight } from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "cakes" | "pastries" | "snacks" | "breads" | "custom";
  description: string;
  price: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Items" },
    { id: "cakes", label: "Cakes" },
    { id: "pastries", label: "Pastries" },
    { id: "snacks", label: "Snacks" },
    { id: "breads", label: "Breads" },
    { id: "custom", label: "Custom Cakes" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: "1",
      name: "Fresh Celebration Cakes",
      category: "cakes",
      description: "Delightful Chocolate Truffle, Black Forest, Butterscotch & Fruit Cakes tailored for every milestone.",
      price: "From ₹350",
      image: "/images/menu-1.png",
      badge: "Best Seller",
      popular: true,
    },
    {
      id: "2",
      name: "Handcrafted Cream Pastries",
      category: "pastries",
      description: "Rich, melt-in-the-mouth slices in Chocolate, Red Velvet, Pineapple, and Butterscotch flavors.",
      price: "From ₹60 / pc",
      image: "/images/menu-2.png",
      badge: "Fresh Baked",
      popular: true,
    },
    {
      id: "3",
      name: "Signature Savory Snacks",
      category: "snacks",
      description: "Mumbai style Vada Pav, Dhokla Sandwich, crispy Paneer & Aloo Patties served piping hot.",
      price: "From ₹30",
      image: "/images/menu-3.png",
      badge: "Khatauli Special",
      popular: true,
    },
    {
      id: "4",
      name: "Mumbai Vada Pav & Dhokla Sandwich",
      category: "snacks",
      description: "Spicy batata vada in soft pav with garlic chutney & steamed spiced dhokla sandwich.",
      price: "From ₹40",
      image: "/images/menu-3.png",
      badge: "Must Try",
    },
    {
      id: "5",
      name: "Artisanal Breads & Rolls",
      category: "breads",
      description: "Soft milk bread, garlic loaves, brown bread & freshly baked dinner rolls produced daily.",
      price: "From ₹45",
      image: "/images/menu-2.png",
    },
    {
      id: "6",
      name: "Designer Custom & 3D Cakes",
      category: "custom",
      description: "Customized theme cakes for weddings, kids' birthdays, anniversaries & corporate celebrations.",
      price: "Custom Quote",
      image: "/images/menu-1.png",
      badge: "Pre-Order",
    },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-[#F5EBE0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] border border-[#D4AF37]/40 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Delightful Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-base sm:text-lg text-[#4A2E19]/80">
            Discover our freshly baked cakes, melt-in-mouth pastries, and popular Khatauli snacks like Vada Pav &amp; Dhokla Sandwich.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#2C180B] text-[#D4AF37] shadow-md scale-105"
                  : "bg-[#FFFDF9] text-[#4A2E19] hover:bg-[#FAF6F0] border border-[#4A2E19]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#E5BA42]/30 shadow-bakery hover:shadow-bakery-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-[#FAF6F0]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#D4AF37] text-[#2C180B] text-xs font-bold shadow-md">
                    {item.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <span className="font-serif font-bold text-lg text-amber-200">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold uppercase mb-1">
                    <Cake className="w-3.5 h-3.5" />
                    <span>{item.category.toUpperCase()}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#2C180B] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[#4A2E19]/80 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/916399303303?text=Hi%20Bake%20Studio,%20I%20would%20like%20to%20order/inquire%20about%20${encodeURIComponent(
                    item.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#2C180B] bg-[#FAF6F0] border border-[#D4AF37]/40 hover:bg-[#D4AF37] hover:text-[#2C180B] transition-colors group/btn"
                >
                  <span>Order / Inquire via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
