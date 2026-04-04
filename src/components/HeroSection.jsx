"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Navigation ke liye

const images = [
  "https://cdn.pixabay.com/photo/2020/01/16/12/13/online-4770316_1280.jpg",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Search state
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Search Handle Function
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // User ko healthcare page par bhej dega search query ke saath
      router.push(`/healthcare?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden font-sans">
      
      {/* Background Slider */}
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="Hero Background"
            className="w-full h-full object-cover object-center md:object-right"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
        <div className="max-w-xl">
          
          <h1 className="text-[32px] md:text-[42px] leading-[1.2] md:leading-[1.3] text-[#6b5b4b] font-serif drop-shadow-md">
            At Alhawat Medical Store, we believe that health is something that’s worth caring 
            for with the world.
          </h1>

          {/* ✅ Working Search Form */}
          <form 
            onSubmit={handleSearch}
            className="mt-6 md:mt-8 flex items-center border border-[#c89b5b] w-full max-w-[420px] h-[50px] md:h-[55px] bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="px-3 md:px-4 text-[#c89b5b]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // ✅ Update state
              placeholder="Search medicines..."
              className="w-full h-full outline-none bg-transparent text-sm md:text-base text-gray-600 placeholder-gray-400 font-medium"
            />
            <button 
              type="submit"
              className="px-6 h-full bg-[#c89b5b] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#b0854a] transition-colors"
            >
              Find
            </button>
          </form>
        </div>
      </div>

      {/* Floating Icon */}
      <div className="absolute bottom-10 left-6 md:left-8 z-20 hidden sm:block">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1f5fa9] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition">
          <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 3v10" />
            <path d="M8 9l4 4 4-4" />
            <circle cx="12" cy="17" r="4" />
          </svg>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 md:w-3 h-3 rounded-full cursor-pointer transition ${
              current === i ? "bg-[#c89b5b] scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}