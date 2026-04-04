"use client";

import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fcfcf9]">
      
      {/* --- MAIN CONTACT SECTION --- */}
      <section className="py-12 md:py-20 px-4 md:px-6"> {/* Mobile padding fixed */}
        <div className="max-w-7xl mx-auto">
          
          {/* --- TOP INFO CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            
            {/* Address Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-b-4 border-[#c89b5b] hover:shadow-xl transition-all duration-500 text-center group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f5f5f2] text-[#c89b5b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6b5b4b] group-hover:text-white transition-all">
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
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f5f5f2] text-[#c89b5b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c89b5b] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.162-5.138-3.476-6.302-6.302l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
              </div>
              <h4 className="text-[#6b5b4b] font-serif text-lg md:text-xl mb-3">Call Us</h4>
              <p className="text-gray-500 text-xs md:text-sm font-medium">+91 98765 43210</p>
              <p className="text-gray-400 text-[10px] mt-1">+91 0591 234567</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-b-4 border-[#c89b5b] hover:shadow-xl transition-all duration-500 text-center group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f5f5f2] text-[#c89b5b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6b5b4b] group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
              </div>
              <h4 className="text-[#6b5b4b] font-serif text-lg md:text-xl mb-3">Email Support</h4>
              <p className="text-gray-500 text-xs md:text-sm underline underline-offset-4 decoration-[#c89b5b]/30">support@alhawatmedical.com</p>
            </div>
          </div>

          {/* --- CONTACT FORM & MAP SECTION --- */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Contact Form */}
            <div className="w-full lg:w-3/5 bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-serif text-[#6b5b4b] mb-2 text-center md:text-left">Send Us a Message</h3>
                <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">Send us your query, we will reply within 24 hours.</p>
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
                {/* name attributes added for Web3Forms + placeholder color fixed */}
                <input required name="name" type="text" placeholder="Your Name" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c89b5b] transition-all text-sm placeholder:text-gray-400" />
                <input required name="email" type="email" placeholder="Email Address" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c89b5b] transition-all text-sm placeholder:text-gray-400" />
                <input name="phone" type="text" placeholder="Phone Number" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c89b5b] transition-all text-sm md:col-span-2 placeholder:text-gray-400" />
                <textarea required name="message" rows="4" placeholder="How can we help you?" className="w-full bg-[#fcfcf9] border border-gray-200 p-4 rounded-xl outline-none focus:border-[#c89b5b] transition-all text-sm md:col-span-2 resize-none placeholder:text-gray-400"></textarea>
                
                <button type="submit" className="bg-[#6b5b4b] text-white px-8 md:px-10 py-4 rounded-xl font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#c89b5b] transition-all duration-300 w-full md:w-max shadow-md shadow-[#6b5b4b]/20">
                  Submit Message
                </button>
              </form>
            </div>

            {/* Map Section - STRETCH FIX */}
            <div className="w-full lg:w-2/5 min-h-[350px] md:min-h-[450px] lg:min-h-full rounded-3xl overflow-hidden shadow-lg border-4 border-white grayscale hover:grayscale-0 transition-all duration-700 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.26194723055!2d78.7719603150823!3d28.83129898234038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbb1978280f7%3A0x673059f330103a87!2sCivil%20Lines%2C%20Moradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1648000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;