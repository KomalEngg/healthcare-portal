"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { categoryData } from "@/data/healthcareData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/context/CartContext"; // ✅ Cart Context Import

export default function CategoryDetailPage() {
  const params = useParams();
  const id = params.id;
  const data = categoryData[id];

  // States
  const [displayProducts, setDisplayProducts] = useState([]);
  const [sortBy, setSortBy] = useState("Popularity");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  
  const { addToCart } = useCart(); // ✅ Cart function initialize

  // 1. Initial Load
  useEffect(() => {
    if (data) {
      setDisplayProducts(data.items);
    }
  }, [data]);

  // 2. Combined Filter & Sort Logic
  useEffect(() => {
    if (!data) return;

    let updatedList = [...data.items];

    // Price Filtering
    if (selectedPriceRanges.length > 0) {
      updatedList = updatedList.filter((item) => {
        return selectedPriceRanges.some((range) => {
          if (range === "Below 499") return item.price < 499;
          if (range === "500 - 999") return item.price >= 500 && item.price <= 999;
          if (range === "1000 - 1999") return item.price >= 1000 && item.price <= 1999;
          if (range === "Above 2000") return item.price >= 2000;
          return false;
        });
      });
    }

    // Sorting
    if (sortBy === "Price: Low to High") {
      updatedList.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      updatedList.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Discount") {
      updatedList.sort((a, b) => {
        const discA = (a.mrp - a.price) / a.mrp;
        const discB = (b.mrp - b.price) / b.mrp;
        return discB - discA;
      });
    } else {
      updatedList.sort((a, b) => a.id - b.id);
    }

    setDisplayProducts(updatedList);
  }, [selectedPriceRanges, sortBy, data]);

  const handlePriceChange = (range) => {
    if (selectedPriceRanges.includes(range)) {
      setSelectedPriceRanges(selectedPriceRanges.filter((r) => r !== range));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f7f4]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Category Not Found</h1>
          <Link href="/healthcare" className="text-[#e11d48] underline mt-4 block">Back to Healthcare</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f4f7f4] min-h-screen font-sans">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        {/* Breadcrumbs */}
        <nav className="text-[11px] text-gray-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-[#e11d48] transition">Home</Link>
          <span>/</span>
          <Link href="/healthcare" className="hover:text-[#e11d48]transition">Healthcare</Link>
          <span>/</span>
          <span className="text-gray-800 font-semibold">{data.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-[280px] flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-100 p-5 sticky top-24 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Filter By</h2>
              
              <div className="mb-8">
                <p className="text-[13px] font-bold text-gray-700 mb-4 uppercase tracking-wider">Categories</p>
                <ul className="space-y-3 text-[13px] text-gray-600">
                  <li className="text-[#e11d48] font-bold cursor-pointer">All {data.title}</li>
                  <li className="hover:text-[#e11d48] cursor-pointer transition">New Arrivals</li>
                </ul>
              </div>

              <div className="mb-4 border-t pt-6">
                <p className="text-[13px] font-bold text-gray-700 mb-4 uppercase tracking-wider">Price Range</p>
                <div className="space-y-3">
                  {["Below 499", "500 - 999", "1000 - 1999", "Above 2000"].map((range) => (
                    <label key={range} className="flex items-center gap-3 text-[13px] text-gray-600 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={selectedPriceRanges.includes(range)}
                        onChange={() => handlePriceChange(range)}
                        className="w-4 h-4 accent-[#e11d48] cursor-pointer" 
                      />
                      <span className={`${selectedPriceRanges.includes(range) ? "text-[#e11d48] font-bold" : ""} group-hover:text-[#e11d48] transition`}>
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
                {selectedPriceRanges.length > 0 && (
                  <button onClick={() => setSelectedPriceRanges([])} className="text-[11px] text-red-500 mt-4 underline">
                    Clear Filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{data.title}</h1>
                <p className="text-[12px] text-gray-400 mt-1">{displayProducts.length} Products Found</p>
              </div>
              
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm shadow-sm">
                <span className="text-gray-400">Sort By:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-bold text-gray-700 outline-none bg-transparent cursor-pointer"
                >
                  <option value="Popularity">Popularity</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Discount">Discount</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {displayProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="relative h-44 flex items-center justify-center mb-4 overflow-hidden">
                    <img src={product.img} alt={product.name} className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    {product.mrp > product.price && (
                      <div className="absolute top-0 left-0 bg-[#f47779] text-white text-[10px] font-bold px-2 py-1 rounded-br-lg shadow-sm">
                        {Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[13px] font-semibold text-gray-800 line-clamp-2 leading-tight mb-1 group-hover:text-[#e11d48] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 mb-3 uppercase font-medium">{product.brand}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-extrabold text-gray-900">₹{product.price}</span>
                      <span className="text-xs text-gray-400 line-through font-medium">MRP ₹{product.mrp}</span>
                    </div>
                  </div>

                  {/* ✅ Working Add to Cart Button */}
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full py-2.5 bg-white border-2 border-[#e11d48] text-[#e11d48] rounded-lg text-xs font-bold hover:bg-[#e11d48] hover:text-white transition-all duration-300 uppercase tracking-wider"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Footer SEO Section */}
            <div className="mt-12 bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">Buy {data.title} Online</h2>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                {data.description} Genuine products with fast delivery guaranteed.
              </p>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}