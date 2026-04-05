"use client";

import Image from "next/image";

/* ================= DATA (Same as before) ================= */
// Products ka data wahi rakha hai jo aapne diya tha
const products1 = [
  { id: 1, name: "Baidyanath Shadbindu Tel", img: "https://5.imimg.com/data5/SELLER/Default/2026/1/576866851/JR/MC/EC/144690300/baidyanath-shadbindu-tel-25ml-500x500.png", price: 101.4, mrp: 177.5 },
  { id: 2, name: "Prasarini Tail", img: "https://5.imimg.com/data5/SELLER/Default/2021/12/JW/LH/KN/71897674/new-product-500x500.jpeg", price: 99.2, mrp: 160 },
  { id: 3, name: "Vaidyaratnam Bruhath", img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420281352/NE/DT/NG/221798190/vaidyaratnam-bruhath-danthapala-thailam-brown-small-100-ml-500x500.jpg", price: 100, mrp: 200 },
  { id: 4, name: "Citrus Wet Wipes", img: "https://images.apollo247.in/pub/media/catalog/product/a/p/apr0111_1-qwerf.jpg", price: 99.2, mrp: 160 },
  { id: 5, name: "Aloe Vera Gel", img: "https://images.apollo247.in/pub/media/catalog/product/a/p/apa0089_1-sep2023.jpg", price: 99.2, mrp: 160 },
  { id: 6, name: "Sandal Soap", img: "https://images.apollo247.in/pub/media/catalog/product/a/p/ape0161-1-.jpg", price: 99.4, mrp: 177.5 },
];

const products2 = [
  { id: 7, name: "Dhanwantari Nidra", img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389092727/II/PD/FB/89930532/dhanwantari-nidra-karak-tail-500x500.jpg", price: 199.5, mrp: 399 },
  { id: 8, name: "Ayurvedic Pain", img: "https://5.imimg.com/data5/GLADMIN/Default/2022/6/PG/TM/DR/43668/ayurvedic-pain-relief-oil-250x250.jpg", price: 149.5, mrp: 299 },
  { id: 9, name: "Muscle Pain Oil", img: "https://3.imimg.com/data3/WH/LN/GLADMIN-5308/muscle-pain-oil-250x250.jpg", price: 199.5, mrp: 399 },
  { id: 10, name: "Lavanbhaskar Churan", img: "https://3.imimg.com/data3/UM/GN/MY-5069650/lavanbhaskar-churan-500x500.jpg", price: 141.6, mrp: 283 },
  { id: 11, name: "Trifala", img: "https://3.imimg.com/data3/IV/GD/MY-5069650/trifala-500x500.jpg", price: 319.5, mrp: 639 },
  { id: 12, name: "SARIVADIVATI", img: "https://5.imimg.com/data5/SELLER/Default/2021/4/EN/TB/MI/5069650/resize-1617262041135237517sarivadivati-500x500.png", price: 341.1, mrp: 379 },
];

const hotSeller = [
  { id: 13, name: "MAHARASNADI", img: "https://5.imimg.com/data5/SELLER/Default/2021/4/TA/NH/AU/5069650/resize-16172617571663365137maharasnadi-500x500.png", price: 120, mrp: 199 },
  { id: 14, name: "Baidyanath", img: "https://i.pinimg.com/736x/bc/f6/e9/bcf6e95f443277dcc3207b9ddfb27221.jpg", price: 90, mrp: 120 },
  { id: 15, name: "Ujwala Syrup", img: "https://i.pinimg.com/736x/6f/31/29/6f312924aa07da765bec989c436c0ddc.jpg", price: 150, mrp: 199 },
  { id: 16, name: "Himsagar Tail", img: "https://5.imimg.com/data5/SELLER/Default/2021/12/CY/MH/DU/71897674/new-product-500x500.jpeg", price: 130, mrp: 180 },
  { id: 17, name: "Dhanwantari Nidra", img: "https://5.imimg.com/data5/SELLER/Default/2024/2/389092727/II/PD/FB/89930532/dhanwantari-nidra-karak-tail-500x500.jpg", price: 110, mrp: 180 },
  { id: 18, name: "Dr. Jrk'S Tolenorm Oil", img: "https://5.imimg.com/data5/SELLER/Default/2020/12/LC/TC/IG/39556494/dr-jrk-s-tolenorm-oil-50ml-500x500.jpg", price: 60, mrp: 90 },
];

/* ================= COMPONENTS ================= */

function ProductCard({ p }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col items-center">
      
      <div className="h-[120px] flex items-center justify-center mb-3">
        <img
          src={p.img}
          alt={p.name}
          className="max-w-[100px] max-h-[100px] object-contain"
        />
      </div>

      <p className="text-sm font-medium text-gray-800 text-center line-clamp-2 h-[40px]">
        {p.name}
      </p>

      <div className="mt-2 flex items-center gap-2 text-sm">
        <span className="font-bold text-[black]">₹{p.price}</span>
        <span className="line-through text-gray-400 text-xs">₹{p.mrp}</span>
      </div>

      {/* Button color changed to match theme */}
      <button className="mt-4 w-full bg-[#e11d48] text-white py-2 rounded text-xs font-bold tracking-widest hover:bg-[#92104d] transition uppercase">
        Add to Cart
      </button>
    </div>
  );
}

function Section({ title, products }) {
  return (
    <div className="mb-16">
      
      {/* ✅ Font-Serif used for Headings */}
      <h2 className="text-2xl md:text-3xl font-serif text-[black] text-center mb-8 relative">
        <span className="relative z-10 bg-[#f7f5f2] px-4">{title}</span>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-0"></div>
      </h2>

      {/* 6 PRODUCTS PER ROW ON LARGE SCREENS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}

/* ================= MAIN ================= */

export default function ProductSection() {
  return (
    <div className="bg-[#f7f5f2] px-4 md:px-10 py-16 min-h-screen">
      
      <Section title="Medicines from Top Suppliers" products={products1} />

      <Section title="Shop by Categories" products={products2} />

      <Section title="Our Hot Sellers" products={hotSeller} />

    </div>
  );
}