"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


// Mock Data for Lab Tests
const labTests = [
  {
    id: 1,
    name: "Erythrocyte Sedimentation Rate (ESR) Test",
    reportsIn: "12 Hrs",
    price: 199,
    originalPrice: 349,
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/4ff607383fad35e4af5639c3e7709734.png?dim=256x256&q=75",
  },
  {
    id: 2,
    name: "Vitamin B Complex Profile",
    reportsIn: "22 Hrs",
    price: 1099,
    originalPrice: 2199,
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/01abb07c5b233f90b2cd0b64a7ebccee.png?dim=256x256&q=75",
  },
  {
    id: 3,
    name: "Liver Function Test (LFT)",
    reportsIn: "11 Hrs",
    price: 449,
    originalPrice: 1099,
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/37ebeeb109543b779c568444f7ce84be.png?dim=256x256&q=75",
  },
  {
    id: 4,
    name: "CBC Test",
    reportsIn: "10 Hrs",
    price: 299,
    originalPrice: 799,
    img: "https://s3.ap-south-1.amazonaws.com/pe-neon-public/diagnostics/production/recommendationWidget/bc45ae15fcf13e7e8d2662e4aebce93c.png?dim=256x256&q=75",
  },
];

const testimonials = [
  { id: 1, name: "Suryabhan Saxena", date: "01 Jul '24", text: "The phlebotomist and other staff involved are really accurate and helpful. Professionalism shown was amazing." },
  { id: 2, name: "Shivram B Iyer", date: "23 Jul '24", text: "Aqib Khan was on time. He was very polite and patient. The blood sample collection was painless. Thank you." },
  { id: 3, name: "Mangala Shivram", date: "12 Jul '24", text: "One of the best technicians I have seen so far. Highly recommended for home visits." },
  { id: 4, name: "Ranvijay Bhatnagar", date: "15 Aug '24", text: "Very smooth process. The report was delivered exactly on time. Great experience!" },
  { id: 5, name: "Anjali Verma", date: "02 Sep '24", text: "Safe and hygienic collection. The staff followed all protocols. Very satisfied." },
  { id: 6, name: "Vikram Singh", date: "20 Aug '24", text: "The booking process was seamless. The technician was professional and the results were accurate." },
];

export default function DiagnosticsPage() {
  const [activeBookingId, setActiveBookingId] = useState(null);
  const [selectedPatients, setSelectedPatients] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic for reviews - fixed blank space by resetting index correctly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= testimonials.length ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const selectPatientCount = (testId, count) => {
    setSelectedPatients((prev) => ({ ...prev, [testId]: count }));
    setActiveBookingId(null);
  };

  return (
    <div className="bg-[#fcfcf9] min-h-screen font-sans text-gray-800 overflow-x-hidden">
    <Navbar/>

      {/* --- SIDEBAR OVERLAY (ANIMATED) --- */}
      <AnimatePresence>
        {activeBookingId && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" 
              onClick={() => setActiveBookingId(null)}
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 w-80 bg-white h-full z-[101] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-serif font-bold text-[#6b5b4b]">Select Patients</h2>
                <button onClick={() => setActiveBookingId(null)} className="text-2xl text-gray-400 hover:text-red-500 transition">✕</button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => selectPatientCount(activeBookingId, num)}
                    className="w-full text-left p-5 rounded-2xl border border-gray-100 hover:bg-[#fdf8f1] hover:border-[#c89b5b] transition-all group flex justify-between items-center"
                  >
                    <span className="font-bold text-gray-700 group-hover:text-[#6b5b4b]">{num} {num === 1 ? "Patient" : "Patients"}</span>
                    <span className="text-[#c89b5b] font-bold opacity-0 group-hover:opacity-100">Add +</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      
        {/* --- HERO SECTION WITH HEXAGON THEME (LAB TEST) --- */}
      <section className="w-full bg-[#1a1a1a] py-24 px-6 md:px-16 text-center text-white relative overflow-hidden border-b border-[#c89b5b]/20">
        
        {/* Hexagon Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="hexagons" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <g>
                  <path d="M25 86.6L0 43.3 25 0l25 43.3z" fill="none" stroke="#c89b5b" strokeWidth="1"/>
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[#c89b5b] font-bold tracking-[0.4em] uppercase text-xs mb-6 block animate-fade-in">
            Accurate Results • Trusted Reports
          </span>
          
          <h1 className="text-[40px] md:text-[64px] font-serif leading-tight mb-8">
           <span className="text-[#c89b5b]">Alhawat</span>Pathology & Lab Tests
          </h1>
          
          {/* Decorative Gradient Line */}
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c89b5b] to-transparent mx-auto mb-10"></div>
          
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-3 text-sm tracking-widest uppercase font-medium text-gray-500">
            <Link href="/" className="hover:text-[#c89b5b] transition-colors">Home</Link>
            <span className="text-[#c89b5b]/40">•</span>
            <span className="text-white">Lab Tests</span>
          </div>
        </div>

        {/* Bottom Accent Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#c89b5b]/50 to-transparent"></div>
      </section>
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* --- POPULAR SECTION (GRID 1,1,1) --- */}
        <h2 className="text-2xl font-serif text-[#6b5b4b] mb-8">Popular Health Checkups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {labTests.map((test) => (
            <div key={test.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col justify-between">
              <div className="text-center sm:text-left">
                <div className="w-20 h-20 bg-[#f9f9f7] rounded-2xl p-2 mb-4 border border-gray-50 mx-auto sm:mx-0 overflow-hidden">
                  <img src={test.img} alt="test" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-md font-serif text-[#6b5b4b] leading-tight mb-2 min-h-[40px]">{test.name}</h3>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
                  <span className="text-[9px] font-bold text-[#c89b5b] bg-[#fdf8f1] px-2 py-1 rounded uppercase">🕒 {test.reportsIn} Report</span>
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-4 justify-center sm:justify-start">
                  <span className="text-xl font-bold text-[#6b5b4b]">₹{test.price}</span>
                  <span className="text-xs text-gray-400 line-through">₹{test.originalPrice}</span>
                </div>
                <button 
                  onClick={() => setActiveBookingId(test.id)}
                  className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${selectedPatients[test.id] ? "bg-[#6b5b4b] text-white" : "bg-[#c89b5b] text-white shadow-lg hover:shadow-[#c89b5b]/30 hover:bg-[#6b5b4b]"}`}
                >
                  {selectedPatients[test.id] ? `${selectedPatients[test.id]} Patient(s) ⌄` : 'Book Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- AUTO-SLIDING TESTIMONIALS (FIXED BLANK SPACE) --- */}
        <section className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm mb-20 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h2 className="text-3xl font-serif text-[#6b5b4b]">Patient Experiences</h2>
            <div className="flex items-center gap-4 bg-[#f9f9f7] px-6 py-3 rounded-2xl">
              <span className="text-2xl font-bold text-[#c89b5b]">4.8</span>
              <div className="text-[#c89b5b] text-sm">★★★★★</div>
              <span className="text-xs font-bold text-gray-400 border-l pl-4 uppercase tracking-widest">Verified</span>
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex flex-nowrap gap-6"
              animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 24}px)` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {testimonials.map((rev) => (
                <div key={rev.id} className="w-full flex-shrink-0 md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] bg-[#fcfcfc] p-10 rounded-[2.5rem] border border-gray-50 flex flex-col justify-between">
                  <p className="text-gray-600 text-lg italic leading-relaxed mb-8">"{rev.text}"</p>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                    <div>
                      <p className="font-bold text-[#6b5b4b]">{rev.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{rev.date}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#c89b5b]/10 flex items-center justify-center text-[#c89b5b]">✓</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Trust Section */}
        <section className="bg-[#6b5b4b] rounded-[3rem] p-10 md:p-16 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-[#c89b5b]">Why Trust Alhawat Medical?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "NABL Certified Labs", val: "100%" },
              { label: "Cities Covered", val: "50+" },
              { label: "Total Tests Done", val: "70M+" },
              { label: "Expert Staff", val: "7000+" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-bold text-[#c89b5b] mb-2">{stat.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
  );
}