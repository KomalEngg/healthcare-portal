"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useState, useMemo, useRef } from 'react';
import { useCart } from "@/context/CartContext"; // ✅ Cart Context Import kiya

// 1. PRODUCT DATA (Moved here to ensure it's defined for the component)
const allProducts = [
  { id: 1, name: "Digital Blood Pressure Monitor", price: 2499, oldPrice: 3200, category: "Monitoring Equipment", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=400", tag: "Best Seller", date: "2024-01-01" },
  { id: 2, name: "Infrared Forehead Thermometer", price: 1200, oldPrice: 1800, category: "Diagnostic Equipment", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400", tag: "Trending", date: "2024-02-01" },
  { id: 3, name: "N95 Protective Face Mask", price: 450, oldPrice: 600, category: "Personal Protective", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400", tag: "In Stock", date: "2023-12-01" },
  { id: 4, name: "Advanced Stethoscope Professional", price: 5600, oldPrice: 7500, category: "Diagnostic Equipment", image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=400", tag: "Premium", date: "2024-03-01" },
  { id: 5, name: "Portable Oxygen Concentrator", price: 45000, oldPrice: 52000, category: "Assistive Equipment", image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=400", tag: "Offer", date: "2024-01-15" },
  { id: 6, name: "Surgical Stainless Steel Kit", price: 8900, oldPrice: 11000, category: "Surgical Equipment", image: "https://m.media-amazon.com/images/I/51jQCSgZ6zL.jpg", tag: "Medical Grade", date: "2023-11-20" },
  { id: 7, name: "Wheelchair Ultra Lightweight", price: 12500, oldPrice: 15000, category: "Assistive Equipment", image: "https://easycareglobal.com/cdn/shop/files/eccare_910x910.png?v=1774090840", tag: "Available", date: "2024-02-10" },
  { id: 8, name: "Laboratory Microscope HD", price: 18000, oldPrice: 22000, category: "Laboratory Equipment", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400", tag: "Scientific", date: "2024-03-15" },
  { id: 9, name: "Pulse Oximeter OLED", price: 999, oldPrice: 1500, category: "Monitoring Equipment", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=400", tag: "New", date: "2024-04-01" },
  { id: 10, name: "Dental Examination Chair", price: 85000, oldPrice: 95000, category: "Dental Products", image: "https://ik.imagekit.io/z6mqjyyzz/media/public/gnatus-s-300-h-overhanging-dental-chair-11_02_2025-c74fbd06.png?tr=w-1920,q-100,f-avif", tag: "Heavy Duty", date: "2023-10-01" },
  { id: 11, name: "Disposable Syringe Pack (100pcs)", price: 850, oldPrice: 1200, category: "Single Use Devices", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400", tag: "Wholesale", date: "2024-02-25" },
  { id: 12, name: "ECG Machine 3 Channel", price: 32000, oldPrice: 38000, category: "Monitoring Equipment", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=400", tag: "Professional", date: "2024-03-20" },
  { id: 13, name: "Medical Nitrile Gloves (Blue)", price: 650, oldPrice: 900, category: "Personal Protective", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400", tag: "Bulk Pack", date: "2024-01-10" },
  { id: 14, name: "Scalpel Blades Stainless Steel", price: 450, oldPrice: 550, category: "Surgical Equipment", image: "https://d11eqtcd4tfmzx.cloudfront.net/media/catalog/product/cache/1/image/1000x1000/e9c3970ab036de70892d86c6d221abfe/l/i/lister_surgical_blades_pack_of_100_.jpg", tag: "Sharp", date: "2024-01-12" },
  { id: 15, name: "First Aid Rescue Kit", price: 1500, oldPrice: 2000, category: "Emergency", image: "https://m.media-amazon.com/images/I/41VdmMa4FbL._SX300_SY300_QL70_FMwebp_.jpg", tag: "Life Saver", date: "2024-02-05" },
];

const categories = [
  "All Products", "Single Use Devices", "Diagnostic Equipment", "Surgical Equipment", "Laboratory Equipment", "Dental Products", "Personal Protective", "Assistive Equipment", "Monitoring Equipment"
];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState(100000);
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile Sidebar State
  
  const { addToCart } = useCart(); // ✅ addToCart function nikala context se
  const productsPerPage = 9;
  const scrollRef = useRef(null);

  // --- SLIDER LOGIC ---
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  // --- FILTERING LOGIC ---
  const filteredProducts = useMemo(() => {
    let temp = [...allProducts];
    if (selectedCategory !== "All Products") {
      temp = temp.filter(p => p.category === selectedCategory);
    }
    temp = temp.filter(p => p.price <= priceRange);
    
    if (sortBy === "Price: Low to High") temp.sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low") temp.sort((a, b) => b.price - a.price);
    if (sortBy === "Newest") temp.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    return temp;
  }, [selectedCategory, priceRange, sortBy]);

  const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // ✅ Function jo product format ko match kare context se
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      mrp: product.oldPrice, 
      img: product.image,
      brand: product.category,
      quantity: 1
    });
  };

  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="bg-[#1a1a1a] py-12 md:py-16 px-6 text-center border-b border-[#e11d48]/20">
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-tight">Alhawat Medical Catalog</h1>
        <p className="text-[#e11d48] tracking-[0.3em] uppercase text-[10px] font-bold">High Precision Instruments & Healthcare Supplies</p>
      </section>

      {/* --- MOBILE FILTER TOGGLE --- */}
      <div className="lg:hidden sticky top-0 z-40 bg-[#fcfcf9]/90 backdrop-blur-md px-6 py-4 border-b border-gray-100">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="w-full flex items-center justify-center gap-3 bg-[#e11d48] text-white py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
          </svg>
          Refine Catalog
        </button>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          
          {/* --- SIDEBAR --- */}
          <aside className={`
            fixed inset-0 z-50 transition-all duration-500 lg:relative lg:inset-auto lg:z-0 lg:w-1/5
            ${isSidebarOpen ? "visible opacity-100" : "invisible opacity-0 lg:visible lg:opacity-100"}
          `}>
            <div className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm lg:hidden" onClick={() => setIsSidebarOpen(false)}></div>
            <div className={`
              relative bg-white h-full w-4/5 max-w-[280px] lg:w-full lg:h-auto p-6 overflow-y-auto lg:rounded-3xl shadow-2xl lg:shadow-xl border border-gray-100 transition-transform duration-500
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}>
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h3 className="text-lg font-serif text-[#6b5b4b]">Refine</h3>
                <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 text-gray-400 hover:text-red-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              
              <div className="mb-8">
                <label className="text-[9px] font-black uppercase tracking-widest text-[#e11d48] mb-4 block">Categories</label>
                <div className="flex flex-col gap-0.5">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setCurrentPage(1); if(window.innerWidth < 1024) setIsSidebarOpen(false); }}
                      className={`text-left px-3 py-2 rounded-lg text-xs transition-all ${selectedCategory === cat ? "bg-[#e11d48] text-white font-bold" : "text-gray-500 hover:bg-[#fdf8f1] hover:text-[#92102d]"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-[9px] font-black uppercase tracking-widest text-[#e11d48]">Budget</label>
                  <span className="text-sm font-serif text-[#e11d48]">₹{priceRange.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="500" max="100000" step="500"
                  value={priceRange}
                  onChange={(e) => { setPriceRange(Number(e.target.value)); setCurrentPage(1); }}
                  className="w-full h-1 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#e11d48]" 
                />
              </div>

              <button 
                onClick={() => { setSelectedCategory("All Products"); setPriceRange(100000); setIsSidebarOpen(false); }}
                className="w-full py-4 text-[9px] font-black uppercase tracking-[0.2em] text-red-400 hover:text-red-600 transition-colors border-t mt-4"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* --- MAIN GRID --- */}
          <div className="lg:w-4/5">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
              <div>
                <h2 className="text-xl font-serif text-[#e11d48]">{selectedCategory}</h2>
                <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">{filteredProducts.length} items</p>
              </div>
              <select 
                className="mt-3 md:mt-0 bg-[#fcfcf9] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#e11d48] outline-none ring-1 ring-gray-100 cursor-pointer"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6">
                {currentProducts.map((product) => (
                  <div key={product.id} className="group bg-white rounded-2xl border border-gray-50 hover:border-[#e11d48]/20 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* --- IMAGE CONTAINER (Line 148 ke aas-paas) --- */}
<div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f9f9f7]">
  <img 
    src={product.image} 
    alt={product.name} 
    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
  />
  <div className="absolute top-2 right-2 z-10">
    <span className="bg-white/90 backdrop-blur-md text-[#6b5b4b] text-[7px] px-2 py-0.5 rounded-full uppercase font-black tracking-widest shadow-sm">
      {product.tag}
    </span>
  </div>
</div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-[8px] text-[#e11d48] font-bold uppercase tracking-widest mb-1">{product.category}</span>
                      <h3 className="text-xs font-serif text-gray-800 mb-3 leading-snug h-8 overflow-hidden line-clamp-2">{product.name}</h3>
                      
                      <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-[#e11d48]">₹{product.price.toLocaleString()}</p>
                          <p className="text-[8px] text-gray-400 line-through">₹{product.oldPrice.toLocaleString()}</p>
                        </div>
                        <button 
                          onClick={() => handleAddToCart(product)}
                          className="w-8 h-8 bg-[#e11d48] text-white rounded-lg flex items-center justify-center hover:bg-[#92102d] transition-all active:scale-90 shadow-md"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-100">
                <p className="text-gray-400 font-serif text-lg">No products found.</p>
                <button onClick={() => {setPriceRange(100000); setSelectedCategory("All Products")}} className="mt-4 px-6 py-2 bg-[#92102d] text-white rounded-full text-[10px] font-bold uppercase tracking-widest">Reset</button>
              </div>
            )}

            {/* --- PAGINATION --- */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                    className={`w-9 h-9 rounded-xl text-xs transition-all ${currentPage === i + 1 ? "bg-[#e11d48] text-white shadow-md" : "bg-white text-gray-400 border border-gray-100"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}