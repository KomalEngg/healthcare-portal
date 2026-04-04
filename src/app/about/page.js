"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

import { aboutData } from "@/data/aboutData"; 

export default function LongFormMedicalPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full bg-white font-sans text-gray-800">
      <Navbar />
      
      {/* ==========================================================
          SECTION 1: HERO HEADER (Professional Dark Theme)
          ========================================================== */}
      <section className="w-full bg-[#1a1a1a] py-24 px-6 md:px-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%"><defs><pattern id="hexagons" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(2)"><g><path d="M25 86.6L0 43.3 25 0l25 43.3z" fill="none" stroke="currentColor" strokeWidth="1"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#hexagons)"/></svg>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-5">
          <p className="text-sm tracking-[0.3em] uppercase font-bold text-[#c89b5b]">
            Your Trusted Healthcare Partner
          </p>
          <h1 className="text-[44px] md:text-[60px] font-serif leading-tight uppercase">
            About Alhawat <span className="text-[#c89b5b]">Medical</span>
          </h1>
          <div className="pt-4 flex items-center justify-center gap-3 text-sm font-medium">
            <Link href="/" className="text-gray-400 hover:text-[#c89b5b] transition">Home</Link>
            <span className="w-1.5 h-1.5 bg-[#c89b5b] rounded-full"></span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 2: ABOUT DETAIL & STATS (Using aboutData.stats)
          ========================================================== */}
      <section className="w-full bg-[#fdf2e9] py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6">
              <p className="text-xs tracking-widest uppercase font-bold text-[#c89b5b]">About Us</p>
              <h2 className="text-[36px] md:text-[48px] font-serif text-black leading-tight uppercase">
                Committed to Making <br/> Healthcare Accessible
              </h2>
              <div className="text-gray-700 text-[17px] leading-8 text-justify space-y-5 font-light">
                <p>
                  We know it’s not easy to stay healthy in a world like ours. Our hope is to make this path to wellness easier with a little help from our genuine Healthcare products.
                </p>
                <p>
                  Every medicine undergoes extensive quality checks to ensure your recovery is fast and safe. This commitment to your health is what keeps us going every day.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-[45%] aspect-video bg-white rounded-[40px] shadow-2xl flex items-center justify-center border-[10px] border-white group cursor-pointer relative overflow-hidden"
                 onClick={() => setIsVideoOpen(true)}>
              <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000" alt="Pharmacy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 w-20 h-20 bg-black/60 rounded-full flex items-center justify-center border-2 border-white text-white text-2xl group-hover:bg-[#c89b5b] group-hover:border-[#c89b5b] transition-all duration-500 shadow-xl">▶</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center pt-10">
            {aboutData.stats.map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[30px] shadow-sm border border-gray-100 group hover:border-[#c89b5b]/30 transition-all duration-500">
                <h3 className="text-[50px] md:text-[64px] font-serif text-[#c89b5b] leading-none group-hover:scale-110 transition-transform">{item.stat}</h3>
                <p className="mt-4 text-gray-500 tracking-[0.2em] text-[10px] uppercase font-bold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 3: HOW IT WORKS (Connected with aboutData.process)
          ========================================================== */}
      <section className="w-full bg-[#111] py-24 px-6 md:px-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
           <svg width="100%" height="100%"><defs><pattern id="hexagons2" width="50" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)"><g><path d="M25 86.6L0 43.3 25 0l25 43.3z" fill="none" stroke="currentColor" strokeWidth="1"/></g></pattern></defs><rect width="100%" height="100%" fill="url(#hexagons2)"/></svg>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 rounded-[40px] overflow-hidden shadow-2xl border-[10px] border-[#222] relative group">
            <img src="https://html.designingmedia.com/pharmez/assets/images/work-img.jpg" alt="Delivery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-12 relative z-10">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-xs tracking-[0.4em] uppercase font-bold text-[#c89b5b]">Our Process</p>
              <h2 className="text-[36px] md:text-[54px] font-serif leading-tight uppercase">How It <span className="text-[#c89b5b]">Works</span></h2>
            </div>
            
            <div className="space-y-10">
              {aboutData.process.map((step, idx) => (
                <div key={idx} className="flex gap-8 items-start group">
                  <div className="text-[40px] font-serif text-[#c89b5b] opacity-20 group-hover:opacity-100 transition-opacity leading-none pt-1">
                    {step.n}
                  </div>
                  <div className="flex-1 space-y-2 border-b border-white/10 pb-6">
                    <h4 className="text-2xl font-serif text-white group-hover:text-[#c89b5b] transition-colors uppercase tracking-tight">{step.t}</h4>
                    <p className="text-gray-400 text-[16px] leading-relaxed font-light">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: TEAM SECTION (Connected with aboutData.team)
          ========================================================== */}
      <section className="w-full bg-white py-24 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
             <span className="inline-block bg-[#1a1a1a] text-[#c89b5b] text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.3em]">Our Professionals</span>
             <h2 className="text-[36px] md:text-[50px] font-serif text-black leading-tight uppercase">Experts Behind The <span className="text-[#c89b5b]">Care</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.team.map((member, idx) => (
              <div key={idx} className="bg-[#fdf2e9] p-8 rounded-[40px] border border-gray-50 text-center group hover:shadow-2xl transition-all duration-500">
                <div className="relative w-32 h-32 mx-auto mb-6">
                    <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500"/>
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#c89b5b] animate-spin-slow opacity-0 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-serif text-gray-900 mb-1">{member.name}</h4>
                <p className="text-[11px] text-[#c89b5b] font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: BLOG SECTION (Connected with aboutData.blogs)
          ========================================================== */}
      <section className="w-full bg-[#fdf2e9] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-block bg-[#1a1a1a] text-[#c89b5b] text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.3em]">News & Articles</span>
            <h2 className="text-[36px] md:text-[50px] font-serif text-black leading-tight uppercase">Latest <span className="text-[#c89b5b]">Blog Posts</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {aboutData.blogs.map((post, idx) => (
              <div key={idx} className="bg-white rounded-[40px] overflow-hidden shadow-sm group border border-gray-100 flex flex-col hover:shadow-2xl transition duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                  <div className="absolute top-6 left-6 bg-[#1a1a1a] text-[#c89b5b] text-[10px] font-bold px-4 py-2 rounded-full uppercase">Pharmacy</div>
                </div>
                <div className="p-10 space-y-5 flex-1 flex flex-col justify-between">
                  <h4 className="text-2xl font-serif text-gray-900 group-hover:text-[#c89b5b] transition-colors leading-snug uppercase tracking-tight">{post.title}</h4>
                  <Link href={`/blog/${post.id}`} className="text-[11px] font-bold text-[#c89b5b] uppercase tracking-[0.3em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Extras remain same */}
      <Footer />
    </div>
  );
}