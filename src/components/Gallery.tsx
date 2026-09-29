"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: "/images/gallery-1.png",
      title: "Signature Celebration Cake",
      category: "Cakes & Pastries",
      span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      src: "/images/gallery-2.png",
      title: "Warm Bakery Display & Ambiance",
      category: "Bakery Interior",
      span: "col-span-1",
    },
    {
      src: "/images/gallery-3.png",
      title: "Fresh Savory Snacks & Pastries",
      category: "Savory & Breads",
      span: "col-span-1",
    },
    {
      src: "/images/gallery-4.png",
      title: "Custom Birthday & Event Cake",
      category: "Custom Creations",
      span: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EBE0] border border-[#D4AF37]/30 text-[#3D2314] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Visual Tour</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#2C180B] tracking-tight mb-4">
            Our Studio Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#4A2E19]/80">
            Take a glance at our freshly baked cakes, signature snacks, and welcoming bakery ambiance in Khatauli.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item.src)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-bakery border border-[#E5BA42]/30 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold text-[#E5BA42] tracking-wider uppercase mb-1">
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-bold">
                    {item.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={selectedImage}
              alt="Enlarged Bakery View"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
