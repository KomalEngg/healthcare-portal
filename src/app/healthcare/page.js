"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const banners = [
  "https://cms-contents.pharmeasy.in/banner/1fc68cc09d2-BilumaCB.jpg?dim=700x0&dpr=1&q=100",
  "https://cms-contents.pharmeasy.in/banner/15a19c664fa-CelevidaCB.jpg?dim=1440x1440&q=75",
  "https://cms-contents.pharmeasy.in/banner/e95b3733f77-ShelcalTotalCB.jpg?dim=1440x1440&q=75",
  "https://cms-contents.pharmeasy.in/banner/661136d5b70-WellmanCB.jpg?dim=1440x1440&q=75",
  "https://cms-contents.pharmeasy.in/banner/51bca330014-PlanetAyurvedaNative.jpg?dim=1440x1440&q=75"
];

const sideCategories = [
  { id: "personal-care", name: "Personal Care", icon: "✨", href: "/healthcare/category/personal-care" },
  { id: "health-food", name: "Health Food & Drinks", icon: "🥤", href: "/healthcare/category/health-food" },
  { id: "summer-store", name: "Must Have", icon: "💄", href: "/healthcare/category/summer-store" },
  { id: "skin-care", name: "Skin Care", icon: "🧴", href: "/healthcare/category/skin-care" },
  { id: "heart-care", name: "Heart Care", icon: "🏠", href: "/healthcare/category/heart-care" },
  { id: "ayurvedic-care", name: "Ayurvedic Care", icon: "🌿", href: "/healthcare/category/ayurvedic-care" },
  { id: "vitamin-store", name: "Vitamin Store", icon: "🏋️", href: "/healthcare/category/vitamin-store" }
];

// ✅ IMAGE KE HISAB SE SARE 15 CARDS ADD KAR DIYE HAIN
const gridCategories = [
  { id: "must-haves", name: "Must Haves", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/f10917087a483040b557e4b18204312c.png", discount: "" },
  { id: "summer-store", name: "Summer Store", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/77950343369630418f1e3cb6695fb3bb.png", discount: "" },
  { id: "vitamin-store", name: "Vitamin Store", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/71ab5b001d2c3ef699d6661a1c583998.jpg", discount: "Upto 80% OFF" },
 
  { id: "health-food", name: "Health Food and Drinks", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/1be98859503e37c8ad6d993318454de6.png", discount: "Upto 57% OFF" },
  { id: "heart-care", name: "Heart Care", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/5eac2ae736e0377ebf3bf46a55f10477.jpg", discount: "" },
  { id: "diabetes", name: "Diabetes Essentials", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/a06a357fd54e3e298a40214387082957.png", discount: "Upto 65% OFF" },
  { id: "personal-care", name: "Personal Care", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/0885b842a7133c4c96fdd8d041d9bec8.png", discount: "Upto 80% OFF" },
  { id: "ayurvedic-care", name: "Ayurvedic Care", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/7309dfaea9ce3e8a8f9433acfc3fbbae.jpg", discount: "Upto 70% OFF" },
  { id: "mother-and-baby", name: "Mother and Baby Care", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/b3b7e50dd83a31e8b86dbbf1b5c3aab2.jpg?f=jpg?dim=64x64&q=75", discount: "Upto 50% OFF" },
  { id: "mobility-elderly-care", name: "Mobility & Elderly Care", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/787d01d309cb30aa8a378f0e687539a3.png?f=png?dim=64x64&q=75", discount: "Upto 45% OFF" },
  { id: "sports-nutrition", name: "Sports Nutrition", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/548c4c28209231e4a234af1c2355f210.png?f=png?dim=64x64&q=75", discount: "" },
  { id: "healthcare-devices", name: "Healthcare Devices", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/9cc9a28ea4513009966cae794114eefd.png?f=png?dim=64x64&q=75", discount: "Upto 65% OFF" },
  { id: "health-concerns", name: "Health Concerns", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/6cbaa600864b3bd491d96834bfb0547e.png?f=png?dim=64x64&q=75", discount: "Upto 65% OFF" },
  { id: "skin-care", name: "Skin Care", img: "https://cdn01.pharmeasy.in/dam/discovery/categoryImages/e8559b381b2132fcaee9599ac61c8533.png?f=png?dim=64x64&q=75", discount: "Upto 50% OFF" },
];

export default function HealthcarePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-sans text-gray-800">
      <Navbar />

      {/* 1. HERO HEADER */}
      <div className="w-full bg-[#1a1a1a] py-12 px-6 text-center text-white relative">
        <h1 className="text-3xl md:text-5xl font-serif uppercase tracking-tight">
          Healthcare <span className="text-[#c89b5b]">Essentials</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm uppercase tracking-[0.2em]">Quality Products • Trusted Delivery</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          
         {/* 2. SIDEBAR */}
<aside className="hidden lg:block w-72 flex-shrink-0">
  <div className="bg-white rounded-[32px] shadow-sm p-8 sticky top-28 border border-gray-100">
    <h3 className="font-serif text-2xl text-black mb-8 border-b pb-4 uppercase tracking-tighter">Browse</h3>
    <ul className="space-y-5">
      {sideCategories.map((cat, i) => (
        <li key={i} className="group">
          {/* Link href ko cat.href se connect kiya */}
          <Link href={cat.href} className="flex items-center justify-between text-gray-600 hover:text-[#c89b5b] transition-all duration-300">
            <span className="text-sm font-medium flex items-center gap-3">
              <span className="bg-gray-50 group-hover:bg-[#fdf2e9] w-8 h-8 flex items-center justify-center rounded-full transition-colors">
                {cat.icon}
              </span>
              {cat.name}
            </span>
            <span className="transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">→</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</aside>

          {/* 3. MAIN CONTENT */}
          <main className="flex-1 space-y-12">
            
            {/* CAROUSEL SLIDER */}
            <div className="relative w-full h-[220px] md:h-[380px] rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white group">
              {banners.map((src, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0"}`}>
                  <img src={src} className="w-full h-full object-cover" alt="Banner" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
              ))}
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {banners.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide ? "bg-[#c89b5b] w-10" : "bg-white/40 w-3"}`} />
                ))}
              </div>
            </div>

            {/* CATEGORY GRID - ALL 15 CARDS */}
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-serif uppercase tracking-tight text-black">Shop by <span className="text-[#c89b5b]">Category</span></h2>
              </div>

              {/* Grid set to 3 columns on desktop to match image style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {gridCategories.map((cat) => (
                  <Link key={cat.id} href={`/healthcare/category/${cat.id}`} 
                    className="flex items-center justify-between p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#c89b5b] hover:shadow-lg transition-all duration-400 group relative">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                        <img src={cat.img} alt={cat.name} className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-[#c89b5b] transition-colors">{cat.name}</h3>
                        {cat.discount ? (
                          <p className="text-[10px] font-bold text-teal-600 mt-1 uppercase tracking-wider">
                            {cat.discount}
                          </p>
                        ) : (
                           // Placeholder for layout consistency if no discount
                           <div className="h-4"></div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* INFO BAR */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {[
                { t: "100% Genuine", d: "Direct from verified pharmacies", i: "🛡️" },
                { t: "Fast Delivery", d: "At your doorstep within 24h", i: "⚡" },
                { t: "Secure Pay", d: "Encrypted gateway protection", i: "🔒" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1a1a1a] p-6 rounded-[24px] text-white flex items-center gap-4">
                  <span className="text-3xl">{item.i}</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#c89b5b] uppercase">{item.t}</h4>
                    <p className="text-[11px] text-gray-400">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}