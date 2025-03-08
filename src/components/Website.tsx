'use client';

import { useState } from "react";
import TemplateCard from "./shared/TemplateCard";
import AnimatedSection from "./shared/AnimatedSection";

export default function Website() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const templates = [
    {
      id: "relay",
      name: "Relay", 
      image: "/templates/relay.jpg",
      fallbackColor: "bg-[#FFB5A7]" // Pastel pink
    },
    {
      id: "meta",
      name: "Meta",
      image: "/templates/meta.jpg", 
      fallbackColor: "bg-[#B5EAD7]" // Pastel mint
    },
    {
      id: "dome",
      name: "Dome",
      image: "/templates/dome.jpg",
      fallbackColor: "bg-[#C7CEEA]" // Pastel blue
    },
    {
      id: "aplomb", 
      name: "Aplomb",
      image: "/templates/aplomb.jpg",
      fallbackColor: "bg-[#FFDAC1]", // Pastel peach
      isNew: true
    },
    {
      id: "shade",
      name: "Shade", 
      image: "/templates/shade.jpg",
      fallbackColor: "bg-[#E2F0CB]" // Pastel green
    },
    {
      id: "matter",
      name: "Matter",
      image: "/templates/matter.jpg",
      fallbackColor: "bg-[#DEC2CB]" // Pastel mauve
    },
    {
      id: "rainbow",
      name: "Rainbow",
      image: "/templates/rainbow.jpg",
      fallbackColor: "bg-[#F0EFEB]" // Pastel gray
    },
    {
      id: "meta-alt",
      name: "Meta",
      image: "/templates/meta-alt.jpg",
      fallbackColor: "bg-[#E8DFF5]" // Pastel purple
    },
    {
      id: "heyday",
      name: "Heyday",
      image: "/templates/heyday.jpg",
      fallbackColor: "bg-[#FEC5BB]" // Pastel coral
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4" delay={0.1}>
          <h2 className="text-xl sm:text-2xl text-white font-medium">
            Restaurant & Food Website Templates
          </h2>
          
          {/* Mobile Dropdown */}
          <div className="relative sm:hidden w-full">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full px-4 py-2 bg-gray-800 rounded-full text-white/80 flex justify-between items-center"
            >
              Categories
              <span className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-lg py-2 z-10">
                <a href="/all" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-gray-700">
                  All Templates
                </a>
                <a href="/restaurants" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-gray-700">
                  Restaurants
                </a>
                <a href="/fashion" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-gray-700">
                  Fashion & Art
                </a>
                <a href="/products" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-gray-700">
                  Sell Products
                </a>
                <a href="/services" className="block px-4 py-2 text-white/80 hover:text-white hover:bg-gray-700">
                  Business Services
                </a>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-6 text-white/80">
            <a href="/all" className="hover:text-white transition-colors">
              All Templates
            </a>
            <a href="/restaurants" className="hover:text-white transition-colors">
              Restaurants
            </a>
            <a href="/fashion" className="hover:text-white transition-colors">
              Fashion & Art
            </a>
            <a href="/products" className="hover:text-white transition-colors">
              Sell Products
            </a>
            <a href="/services" className="hover:text-white transition-colors">
              Business Services
            </a>
          </div>
        </AnimatedSection>

        <hr className="border-gray-800 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {templates.map((template, index) => (
            <AnimatedSection key={template.id} delay={0.1 + (index * 0.1)}>
              <TemplateCard
                name={template.name}
                image={template.image}
                isNew={template.isNew}
                fallbackColor={template.fallbackColor}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}