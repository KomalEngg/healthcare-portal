"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';


/* ================= DATA ================= */
const hotSellers = [
  { id: 13, name: "MAHARASNADI", img: "https://5.imimg.com/data5/SELLER/Default/2021/4/TA/NH/AU/5069650/resize-16172617571663365137maharasnadi-500x500.png", price: 120, mrp: 199 },
  { id: 14, name: "Baidyanath", img: "https://i.pinimg.com/736x/bc/f6/e9/bcf6e95f443277dcc3207b9ddfb27221.jpg", price: 90, mrp: 120 },
  { id: 15, name: "Ujwala Syrup", img: "https://i.pinimg.com/736x/6f/31/29/6f312924aa07da765bec989c436c0ddc.jpg", price: 150, mrp: 199 },
  { id: 16, name: "Himsagar Tail", img: "https://5.imimg.com/data5/SELLER/Default/2021/12/CY/MH/DU/71897674/new-product-500x500.jpeg", price: 130, mrp: 180 },
  { id: 17, name: "Dhanwantari Nidra", img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389092727/II/PD/FB/89930532/dhanwantari-nidra-karak-tail-500x500.jpg", price: 110, mrp: 180 },
  { id: 18, name: "Dr. Jrk'S Tolenorm Oil", img: "https://5.imimg.com/data5/SELLER/Default/2020/12/LC/TC/IG/39556494/dr-jrk-s-tolenorm-oil-50ml-500x500.jpg", price: 60, mrp: 90 },
];

const services = [
  {
    id: 1,
    title: "Prescription Refills",
    desc: "Apni purani prescription upload karein aur bas ek click mein apni regular medicines refill karwayein.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path d="M19 10h2a2 2 0 0 1 2 2v1h-4v-1a2 2 0 0 1 2-2zM5 10H3a2 2 0 0 0-2 2v1h4v-1a2 2 0 0 0-2-2z" />
        <path d="M10 14h4v7h-4zM7 5l5-3 5 3v6H7V5z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Express Home Delivery",
    desc: "Moradabad mein sabse tez delivery. 24 ghante ke andar aapki medicines surakshit aapke ghar tak.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Pharmacist Consultation",
    desc: "Dawaiyo ke dosage ya side-effects ke baare mein hamare expert pharmacists se muft salah lein.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M22 9l-3 3-2-2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Health Monitoring",
    desc: "Blood Pressure aur Sugar level track karne ke liye digital tools aur regular check-up alerts.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Generic Medicine Hub",
    desc: "Brand ki jagah sasti aur asardaar Generic medicines payein bina quality se samjhauta kiye.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <circle cx="7" cy="7" r="5" />
        <circle cx="17" cy="17" r="5" />
        <path d="M12 17h10" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Lab Test Booking",
    desc: "Ghar baithe blood test aur full body check-up book karein. Sample collection ki suvidha uplabdha.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
    ),
  },
];

/* ================= INTERNAL COMPONENTS ================= */

function ProductCard({ p }) {
  return (
    <div className="bg-white p-5 rounded-sm shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-center group">
      <div className="h-[140px] flex items-center justify-center mb-4 overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          className="max-w-[110px] max-h-[110px] object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <p className="text-sm font-serif text-[#6b5b4b] text-center line-clamp-2 h-[40px]">
        {p.name}
      </p>
      <div className="mt-3 flex items-center gap-2">
        <span className="font-bold text-[#e11d48]">₹{p.price}</span>
        <span className="line-through text-gray-400 text-xs">₹{p.mrp}</span>
      </div>
      <button className="mt-5 w-full bg-[#e11d48] text-white py-2.5 rounded-sm text-[10px] font-bold tracking-[0.2em] hover:bg-[#92104d] transition-colors uppercase">
        Add to Cart
      </button>
    </div>
  );
}

function ServiceCard({ service }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`group p-10 border border-gray-300 transition-all duration-500 rounded-3xl bg-white 
      hover:shadow-[0_20px_50px_rgba(200,155,91,0.15)] hover:-translate-y-4 transform cursor-pointer
      ${isExpanded ? 'bg-[#fdf8f1] border-[#e11d48]/30' : 'hover:bg-[#fcfcf9]'}`}
    >
      <div className="w-20 h-20 rounded-2xl bg-[#f5f5f2] text-[#e11d48] flex items-center justify-center mb-8 
        group-hover:bg-[#e11d48] group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
        {service.icon}
      </div>

      <h3 className="text-2xl font-serif text-[#6b5b4b] mb-4 group-hover:text-black transition-colors">
        {service.title}
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-6 transition-all duration-300">
        {isExpanded ? service.desc : `${service.desc.substring(0, 75)}...`}
      </p>

      <button 
        onClick={(e) => {
          e.stopPropagation(); 
          setIsExpanded(!isExpanded);
        }}
        className="text-[#e11d48] font-bold text-[11px] uppercase tracking-[0.2em] border-b-2 border-[#e11d48]/20 hover:border-[#6b5b4b] transition-all pb-1"
      >
        {isExpanded ? "Read Less ▲" : "Read More ▼"}
      </button>

      <div className="mt-8 w-0 h-1 bg-[#e11d48] group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}

/* ================= MAIN PAGE ================= */

export default function ServicesPage() {
  return (
    <div className="bg-[#f5f5f4] min-h-screen font-sans">
    <Navbar/>
      
      {/* --- UPDATED HERO SECTION WITH HEXAGON THEME --- */}
<section className="w-full bg-[#1a1a1a] py-24 px-6 md:px-16 text-center text-white relative overflow-hidden border-b border-[#e11d48]/20">
  
  {/* Decorative Hexagon Background Pattern */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <svg width="100%" height="100%">
      <defs>
        <pattern id="hexagons" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <g>
            <path d="M25 86.6L0 43.3 25 0l25 43.3z" fill="none" stroke="#e11d48" strokeWidth="1"/>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)"/>
    </svg>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Top Label */}
    <span className="text-[#e11d48] font-bold tracking-[0.4em] uppercase text-xs mb-6 block animate-fade-in">
      Premium Care & Trust
    </span>

    {/* Main Title */}
    <h1 className="text-[40px] md:text-[64px] font-serif leading-tight mb-8">
      Healthcare Services <br /> 
      <span className="italic text-[#e11d48] font-light">&</span> Medical Excellence
    </h1>

    {/* Decorative Divider */}
    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#e11d48] to-transparent mx-auto mb-10"></div>

    {/* Description */}
    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
      Personalized pharmacy services designed to make your health journey 
      <span className="text-white"> simpler, safer, and more effective.</span>
    </p>

    {/* Breadcrumbs or Navigation Links */}
    <div className="flex items-center justify-center gap-3 text-sm tracking-widest uppercase font-medium text-gray-500">
      <Link href="/" className="hover:text-[#e11d48] transition-colors">Home</Link>
      <span className="text-[#e11d48]/40">•</span>
      <span className="text-white">Services</span>
    </div>
  </div>

  {/* Subtle Bottom Glow */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#e11d48]/50 to-transparent"></div>
</section>

      {/* --- SERVICES SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* --- HOT SELLERS --- */}
      <section className="bg-white py-20 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-serif text-[#6b5b4b]">Our Hot Sellers</h2>
              <p className="text-[#e11d48] text-sm font-medium mt-1">Most trusted medicines by our customers</p>
            </div>
            <Link href="/products" className="text-[#6b5b4b] font-bold text-xs uppercase tracking-widest border-b border-[#6b5b4b] pb-1 hover:text-[#e11d48] hover:border-[#e11d48] transition-all">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hotSellers.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* --- PROMOTIONAL BANNER --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#92104d] rounded-sm overflow-hidden flex flex-col lg:flex-row items-center shadow-2xl">
          <div className="flex-1 p-12 md:p-20">
            <span className="text-[white] font-bold tracking-widest text-xs uppercase mb-4 block">Special Offer</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
              Get 20% Off on your first Prescription Refill
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Experience the fastest medicine delivery in Moradabad with our dedicated team.
            </p>
            <button className="bg-[#e11d48] text-white px-10 py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#6b5b4b] transition-all duration-300">
              Claim Discount
            </button>
          </div>
          <div className="flex-1 h-full min-h-[400px] mr-10 mt-10">
            <img 
              src="https://media.istockphoto.com/id/537282044/photo/dont-hesitate-to-stop-by-without-buying-anything.webp?a=1&b=1&s=612x612&w=0&k=20&c=TciASHy5j5QPos2RoXZNXyytYZJP-yMyT2APhhHpyLI=" 
              alt="Pharmacist" 
              className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* --- WHY TRUST US --- */}
      <section className="bg-[#92104d] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif text-white">Why Choose Alhawat Medical?</h2>
          <div className="w-16 h-[1px] bg-[#e11d48] mx-auto mt-4"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
             { t: "Quality Guarantee", d: "100% Genuine Medicines" },
             { t: "Fast Delivery", d: "Within 24 Hours in City" },
             { t: "Expert Support", d: "Pharmacist on Call" },
             { t: "Secure Pay", d: "Encrypted Transactions" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-200 bg-white text-center  transition-colors shadow-sm">
                 <div className="text-[#e11d48] text-xl mb-3 font-bold ">0{i+1}</div>
                 <h4 className="text-[#6b5b4b] font-bold mb-2">{item.t}</h4>
                 <p className="text-gray-500 text-xs">{item.d}</p>
              </div>
            ))}
        </div>
      </section>

<Footer/>
    </div>
  );
}