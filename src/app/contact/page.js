"use client";

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactMedicolStyle() {
  return (
    <>
      <Navbar />
      
      {/* --- HERO SECTION WITH HEXAGON THEME --- */}
      <section className="w-full bg-[#1a1a1a] py-16 md:py-24 px-6 md:px-16 text-center text-white relative overflow-hidden border-b border-[#e11d48]/20">
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
          <span className="text-[#e11d48] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 block">
            Premium Care & Trust
          </span>
          <h1 className="text-[36px] md:text-[64px] font-serif leading-tight mb-8">
            Contact Us
          </h1>
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#e11d48] to-transparent mx-auto mb-10"></div>
          <div className="flex items-center justify-center gap-3 text-[10px] md:text-sm tracking-widest uppercase font-medium text-gray-500">
            <Link href="/" className="hover:text-[#e11d48] transition-colors">Home</Link>
            <span className="text-[#e11d48]/40">•</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="bg-[#fcfcf9] py-12 md:py-20 px-4 md:px-6">
        <main className="max-w-7xl mx-auto">
          
          {/* --- TOP INFO CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            
            {/* Address Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-b-4 border-[#e11d48] hover:shadow-xl transition-all duration-500 text-center group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f5f5f2] text-[#e11d48] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6b5b4b] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                </svg>
              </div>
              <h4 className="text-[#6b5b4b] font-serif text-lg md:text-xl mb-3">Our Store</h4>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                Civil Lines, Near Main Market,<br/>Moradabad, UP - 244001
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-b-4 border-[#6b5b4b] hover:shadow-xl transition-all duration-500 text-center group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f5f5f2] text-[#e11d48] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e11d48] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.162-5.138-3.476-6.302-6.302l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <h4 className="text-[#6b5b4b] font-serif text-lg md:text-xl mb-3">Call Us</h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium tracking-wide">+91 98765 43210</p>
              <p className="text-gray-400 text-[10px] md:text-xs mt-1">+91 0591 234567</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-b-4 border-[#e11d48] hover:shadow-xl transition-all duration-500 text-center group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f5f5f2] text-[#e11d48] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6b5b4b] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
              </div>
              <h4 className="text-[#6b5b4b] font-serif text-lg md:text-xl mb-3">Email Us</h4>
              <p className="text-gray-500 text-xs md:text-sm underline underline-offset-4 decoration-[#e11d48]/30">support@alhawatmedical.com</p>
            </div>
          </div>

          {/* --- CONTACT FORM & MAP SECTION --- */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Contact Form */}
            <div className="w-full lg:w-3/5 bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif text-[#6b5b4b] mb-2">Send Us a Message</h3>
                <p className="text-gray-400 text-xs md:text-sm">Humein apni query bhein, hum 24 ghante mein jawab denge.</p>
              </div>
              
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  formData.append("access_key", "a1c89e70-ad52-4bfa-adf4-74958039f51c");

                  const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                  });

                  const data = await response.json();
                  if (data.success) {
                    alert("✅ Message Sent Successfully!");
                    e.currentTarget.reset();
                  } else {
                    alert("❌ Error sending message");
                  }
                }}
              >
                <input required name="name" type="text" placeholder="Your Name" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#e11d48] transition-all text-sm placeholder:text-gray-400" />
                <input required name="email" type="email" placeholder="Email Address" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#e11d48] transition-all text-sm placeholder:text-gray-400" />
                <input name="phone" type="text" placeholder="Phone Number" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#e11d48] transition-all text-sm md:col-span-2 placeholder:text-gray-400" />
                <textarea required name="message" rows="4" placeholder="How can we help you?" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#e11d48] transition-all text-sm md:col-span-2 resize-none placeholder:text-gray-400"></textarea>
                
                <button type="submit" className="bg-[#6b5b4b] text-white px-8 md:px-10 py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#e11d48] transition-all duration-300 w-full md:w-max shadow-md shadow-[#6b5b4b]/20">
                  Submit Message
                </button>
              </form>
            </div>

            {/* Map Section - Responsive Height Fixed */}
            {/* --- Map Section Fix --- */}
<div className="w-full lg:w-2/5 h-[350px] md:h-[450px] lg:h-auto rounded-3xl overflow-hidden shadow-lg border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56054.49301292102!2d78.7183617942718!3d28.84161021481191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbbca3b6e82f%3A0x62957f8976a9f46e!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin" 
    width="100%" 
    height="100%" // <--- Yeh 100% hona bahut zaruri hai
    className="w-full h-full min-h-full" // <--- Yeh classes add ki hain
    style={{ border: 0, display: 'block' }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
}