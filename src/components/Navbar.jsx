"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const { cart } = useCart();
  const router = useRouter(); 

  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  useEffect(() => {
    const handleScroll = () => {
      // Jab 20px se zyada scroll ho tabhi 'scrolled' true hoga
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/healthcare?search=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false); 
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
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
        ? "bg-white/95 backdrop-blur-md py-1 shadow-md border-b border-red-50" // Scroll par padding kam (py-1)
        : "bg-white py-2 border-b border-gray-100" // Normal state mein padding zyada (py-3)
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        
        {/* Logo Section */}
        <div className="flex-shrink-0 group cursor-pointer">
          <Link href="/" className="flex items-center">
            {/* Logo height transitions: Normal (h-14) -> Scrolled (h-10) */}
            <div className={`relative transition-all duration-300 flex items-center ${
              scrolled ? "h-10" : "h-11"
            }`}>
              <img 
                src="/logo.png" 
                alt="Alhawat Medical" 
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-6">
          <div className="relative w-full group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medicines..."
              className="w-full bg-gray-50 border border-gray-200 text-gray-700 text-sm py-2 px-6 pr-12 rounded-full focus:outline-none focus:border-[#e11d48] transition-all"
            />
            <button 
              type="submit" 
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#e11d48] p-2 rounded-full hover:bg-red-700 transition-all shadow-sm"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.5" y2="16.5" />
              </svg>
            </button>
          </div>
        </form>

        {/* Navigation */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="relative py-1 group"
            >
              <span className="group-hover:text-[#e11d48] transition-colors duration-300">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e11d48] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Action Section */}
        <div className="flex items-center gap-3 ml-4">
          <Link href="/cart" className="relative p-2 group bg-white rounded-full border border-gray-100 hover:border-[#e11d48] transition-all">
            <svg className="w-6 h-6 text-gray-700 group-hover:text-[#e11d48] transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#e11d48] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>

          <Link 
            href="tel:8938935353" 
            className={`hidden sm:flex items-center bg-[#e11d48] text-white rounded-full font-bold hover:bg-red-700 transition-all shadow-md ${
                scrolled ? "px-4 py-1.5 text-[12px]" : "px-5 py-2 text-[13px]"
            }`}
          >
            <span className="tracking-wide whitespace-nowrap">893 893 5353</span>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="xl:hidden p-2 text-gray-700 hover:text-[#e11d48]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-current ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden bg-white border-t border-gray-100 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col p-6 gap-5 text-gray-700 font-bold">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-[#e11d48] border-b border-gray-50 pb-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}