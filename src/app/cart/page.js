"use client";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const totalMRP = cart.reduce((acc, item) => acc + item.mrp * (item.quantity || 1), 0);
  const discount = totalMRP - subtotal;

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 font-serif">Your Cart</h1>
            <p className="text-gray-500 text-sm mt-1">{cart.length} items in your basket</p>
          </div>
          {cart.length > 0 && (
            <button 
              onClick={clearCart}
              className="text-red-500 text-sm font-bold hover:underline"
            >
              Clear All
            </button>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="text-7xl mb-6">🛒</div>
            <h2 className="text-2xl font-bold text-gray-800">Your cart feels lonely.</h2>
            <p className="text-gray-500 mt-2 mb-8">Add something to make it happy!</p>
            <Link href="/healthcare" className="bg-[#6b5b4b] text-white px-10 py-4 rounded-full font-bold hover:bg-[#c89b5b] transition-all shadow-lg">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left: Item List */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6 transition-hover hover:shadow-md">
                  <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl p-2">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-gray-800 leading-tight">{item.name}</h3>
                    <p className="text-gray-400 text-[11px] uppercase tracking-wider mt-1">{item.brand}</p>
                    
                    <div className="mt-3 flex items-center justify-center sm:justify-start gap-3">
                      <span className="text-xl font-black text-gray-900">₹{item.price}</span>
                      {item.mrp > item.price && (
                        <span className="text-sm text-gray-400 line-through">₹{item.mrp}</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Remove Controls */}
                  <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="flex items-center border-2 border-gray-100 rounded-full p-1 bg-gray-50">
                      <button 
                        onClick={() => updateQuantity(item.id, "dec")}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors font-bold text-gray-600"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-bold text-gray-800">{item.quantity || 1}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, "inc")}
                        className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors font-bold text-gray-600"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs font-bold text-red-400 hover:text-red-600 flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      REMOVE
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-28">
                <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-500">
                    <span>Total MRP</span>
                    <span>₹{totalMRP}</span>
                  </div>
                  <div className="flex justify-between text-green-500">
                    <span>Discount</span>
                    <span>- ₹{discount}</span>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <span>Delivery</span>
                    <span className="font-bold">FREE</span>
                  </div>
                  <div className="pt-4 border-t flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">Total Amount</span>
                    <span className="text-2xl font-black text-[#6b5b4b]">₹{subtotal}</span>
                  </div>
                </div>

                <button className="w-full bg-[#6b5b4b] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#c89b5b] transition-all shadow-lg shadow-[#6b5b4b]/20 active:scale-95 uppercase tracking-widest">
                  Checkout Now
                </button>
                
                <p className="text-[10px] text-gray-400 text-center mt-4">
                  Secure SSL Encrypted Payment
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}