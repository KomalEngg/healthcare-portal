"use client";
import { useParams } from "next/navigation";
// FIX: Curly braces zaroori hain agar aboutData.js mein 'export const aboutData' use hua hai
import { aboutData } from "@/data/aboutData"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SingleBlogPage() {
  const params = useParams();
  
  // Safety Check: Agar aboutData ya blogs load nahi huye toh error na aaye
  const blogs = aboutData?.blogs || [];
  
  // Data file se match karo
  const post = blogs.find((item) => item.id === params.id);

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-[#fdf2e9]">
        <Navbar />
        <div className="py-20 text-center font-serif text-2xl text-gray-800 space-y-4">
          <p>Post Not Found!</p>
          <Link href="/about" className="text-[#c89b5b] text-sm underline">Back to About</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fdf2e9] font-sans text-gray-800">
      <Navbar />

      {/* 1. HERO HEADER */}
      <section className="w-full bg-[#1a1a1a] py-20 text-center text-white relative">
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <h1 className="text-[40px] md:text-[56px] font-serif uppercase tracking-tight">
            Single <span className="text-[#c89b5b]">Blog</span>
          </h1>
          <div className="flex justify-center items-center gap-3 text-gray-400 text-sm font-medium">
            <Link href="/" className="hover:text-[#c89b5b]">Home</Link>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="text-white">Blog Detail</span>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & SIDEBAR */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6 md:px-16 flex flex-col lg:flex-row gap-12">
        
        <div className="w-full lg:w-[68%] space-y-8">
          <div className="rounded-[40px] overflow-hidden shadow-2xl border-[10px] border-white">
            <img src={post.img} alt={post.title} className="w-full h-auto object-cover" />
          </div>

          <div className="flex items-center gap-6 text-xs font-bold text-[#c89b5b] uppercase tracking-widest">
            <span>👤 By Admin</span>
            <span>📅 {post.date || "March 2026"}</span>
          </div>

          <h2 className="text-[32px] md:text-[45px] font-serif text-black leading-tight uppercase">
            {post.title}
          </h2>
          
          <div className="text-gray-700 text-lg leading-relaxed text-justify space-y-6 font-light">
            <p>{post.content || "Quality healthcare products delivered to your doorstep."}</p>
            
            <blockquote className="bg-[#1a1a1a] p-10 rounded-3xl border-l-8 border-[#c89b5b] text-white italic text-xl relative overflow-hidden">
                <span className="absolute top-4 left-4 text-6xl opacity-10 font-serif">“</span>
                "Quality is not an act, it is a habit. At Alhawat Pharmacy, we ensure every medicine meets the highest standards."
            </blockquote>

            <p>Our commitment to your health is what keeps us going every day at Alhawat Medical.</p>
          </div>

          {/* Author Box */}
          <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6 mt-12">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-24 h-24 rounded-full object-cover border-4 border-[#fdf2e9]" alt="Author" />
            <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-black">Dr. Alok Alhawat</h4>
                <p className="text-[#c89b5b] text-sm font-bold uppercase mb-2">Senior Pharmacist</p>
                <p className="text-gray-500 text-sm">Dedicated to providing authentic healthcare advice.</p>
            </div>
          </div>
        </div>

        {/* --- SIDEBAR --- */}
        <aside className="w-full lg:w-[32%] space-y-10">
          <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 space-y-5">
            <h4 className="text-xl font-serif border-b-2 border-[#c89b5b] pb-2 inline-block">Search News</h4>
            <div className="relative">
                <input type="text" placeholder="Search Here..." className="w-full bg-[#fdf2e9] rounded-xl px-5 py-4 outline-none text-sm" />
                <button className="absolute right-3 top-3 bg-[#1a1a1a] text-white p-2 rounded-lg text-xs">🔍</button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 space-y-6">
            <h4 className="text-xl font-serif border-b-2 border-[#c89b5b] pb-2 inline-block">Recent Feeds</h4>
            {blogs.slice(0, 3).map((item) => (
                <Link href={`/blog/${item.id}`} key={item.id} className="flex gap-4 items-center group cursor-pointer">
                    <img src={item.img} className="w-20 h-20 rounded-2xl object-cover" alt="thumb" />
                    <div>
                        <p className="text-[10px] text-[#c89b5b] font-bold uppercase">{item.date || "March 2026"}</p>
                        <h5 className="text-sm font-bold leading-snug group-hover:text-[#c89b5b] transition">{item.title}</h5>
                    </div>
                </Link>
            ))}
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}