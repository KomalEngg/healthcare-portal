"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f7f5f2] border-t border-gray-200 pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif font-bold text-[#6b5b4b]">
            ALHAWAT <span className="text-[#c89b5b]">MEDICAL</span>
          </h3>
          <p className="text-gray-500 text-sm leading-6">
            Providing trusted healthcare solutions and quality medicines for over 15 years. 
            Your health, our priority.
          </p>
          <div className="flex gap-4 pt-2">
            {/* Social Icons Placeholder */}
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#c89b5b] hover:bg-[#c89b5b] hover:text-white transition cursor-pointer">f</div>
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#c89b5b] hover:bg-[#c89b5b] hover:text-white transition cursor-pointer">t</div>
            <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#c89b5b] hover:bg-[#c89b5b] hover:text-white transition cursor-pointer">ig</div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-serif font-bold text-[#6b5b4b] mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li><Link href="/about" className="hover:text-[#c89b5b] transition">About Us</Link></li>
            <li><Link href="/healthcare" className="hover:text-[#c89b5b] transition">Healthcare</Link></li>
            <li><Link href="/product" className="hover:text-[#c89b5b] transition">Products</Link></li>
            <li><Link href="/services" className="hover:text-[#c89b5b] transition">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[#c89b5b] transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h4 className="text-lg font-serif font-bold text-[#6b5b4b] mb-6 uppercase tracking-wider">
            Categories
          </h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li><Link href="#" className="hover:text-[#c89b5b] transition">Ayurvedic Medicines</Link></li>
            <li><Link href="#" className="hover:text-[#c89b5b] transition">Daily Healthcare</Link></li>
            <li><Link href="#" className="hover:text-[#c89b5b] transition">Personal Care</Link></li>
            <li><Link href="#" className="hover:text-[#c89b5b] transition">Baby Care</Link></li>
            <li><Link href="#" className="hover:text-[#c89b5b] transition">Medical Equipment</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Newsletter */}
        <div>
          <h4 className="text-lg font-serif font-bold text-[#6b5b4b] mb-6 uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-gray-500 text-sm mb-4">Subscribe for latest health tips and offers.</p>
          <div className="flex border-b border-[#c89b5b] py-2">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
            />
            <button className="text-[#c89b5b] font-bold text-xs uppercase tracking-widest ml-2">Join</button>
          </div>
          <div className="mt-6 text-gray-500 text-sm italic">
            Email: info@alhawathshop.com
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-xs">
          © 2026 Alhawat Medical Store. All Rights Reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-400">
          <Link href="#" className="hover:text-gray-600">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-600">Terms of Service</Link>
          <Link href="#" className="hover:text-gray-600">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}