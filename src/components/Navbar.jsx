"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Router Import kiya
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ Search State
  const { cart } = useCart();
  const router = useRouter(); // ✅ Router initialize kiya

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Search Functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/healthcare?search=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false); // Mobile menu band karne ke liye agar wahan se search ho
    }
  };

  const navItems = [
    { name: "About Us", href: "/about" },
    { name: "HealthCare", href: "/healthcare" },
    { name: "Products", href: "/product" },
    { name: "Services", href: "/services" },
    { name: "Lab Test", href: "/diagnostics" },
  ];

  return (
    <header 
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
        ? "bg-[#f5f5f2]/90 backdrop-blur-md py-2 shadow-lg" 
        : "bg-[#f5f5f2] py-4 border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        
        {/* 1. Logo Section */}
        <div className="flex-shrink-0 group cursor-pointer">
          <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-[#6b5b4b] tracking-tight flex items-center gap-1">
            <span className="group-hover:text-[#c89b5b] transition-colors duration-300">ALHAWAT</span>
            <span className="text-[#c89b5b] group-hover:text-[#6b5b4b] transition-colors duration-300">MEDICAL</span>
          </Link>
          <div className="h-0.5 w-0 group-hover:w-full bg-[#c89b5b] transition-all duration-500"></div>
        </div>

        {/* 2. Interactive Search Bar - NOW WORKING ✅ */}
        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-10">
          <div className="relative w-full group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Medical Treatments..."
              className="w-full bg-white border border-gray-200 text-gray-700 text-sm py-2.5 px-6 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c89b5b]/20 focus:border-[#c89b5b] transition-all shadow-sm group-hover:shadow-md font-medium"
            />
            <button 
              type="submit" 
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#6b5b4b] p-2 rounded-full hover:bg-[#c89b5b] hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.5" y2="16.5" />
              </svg>
            </button>
          </div>
        </form>

        {/* 3. Navigation */}
        <nav className="hidden xl:flex items-center gap-8 text-[12px] font-bold text-gray-500 uppercase tracking-[0.15em]">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="relative py-1 group overflow-hidden"
            >
              <span className="group-hover:text-[#6b5b4b] transition-colors duration-300">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c89b5b] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* 4. Action Section */}
        <div className="flex items-center gap-4 ml-6">
          
          <Link href="/cart" className="relative p-2 group bg-white rounded-full shadow-sm border border-gray-100 hover:border-[#c89b5b] transition-all">
            <svg className="w-6 h-6 text-[#6b5b4b] group-hover:text-[#c89b5b] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#c89b5b] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-[#f5f5f2] animate-bounce">
                {totalItems}
              </span>
            )}
          </Link>

          <Link 
            href="tel:8938935353" 
            className="hidden md:flex items-center gap-3 bg-white border-2 border-[#6b5b4b] text-[#6b5b4b] px-6 py-2 rounded-full font-bold hover:bg-[#6b5b4b] hover:text-white transition-all duration-500 group shadow-md hover:shadow-[#6b5b4b]/20"
          >
            <span className="text-[15px] font-serif tracking-wide">893 893 5353</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden group p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-7 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-[#6b5b4b] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-[#6b5b4b] transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-[#6b5b4b] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden bg-[#f5f5f2] border-t border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col p-8 gap-6 text-[#6b5b4b] font-serif text-xl">
          
          {/* Mobile Search - ✅ Added for better UX */}
          <form onSubmit={handleSearch} className="mb-4">
             <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-white border border-gray-200 py-3 px-6 rounded-full text-sm outline-none focus:border-[#c89b5b]"
            />
          </form>

          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="hover:translate-x-3 transition-transform duration-300 hover:text-[#c89b5b]"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-[#6b5b4b] hover:text-[#c89b5b]">
            <span>My Cart ({totalItems})</span>
          </Link>
          <Link href="tel:8938935353" className="text-[#c89b5b] font-bold flex items-center gap-2 pt-4 border-t">
            <span className="p-2 bg-[#c89b5b]/10 rounded-full">📞</span> 893 893 5353
          </Link>
        </nav>
      </div>
    </header>
  );
}