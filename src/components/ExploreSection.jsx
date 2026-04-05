"use client";

import Link from "next/link";

export default function InteractiveExplore() {
  return (
    <section className="w-full bg-[#f7f5f2] py-16 md:py-24 px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="w-full lg:w-3/5 space-y-8">
          <div className="space-y-4">
            {/* Minimal Icon */}
            <div className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center mb-6">
              <span className="text-[10px] text-gray-500 font-serif font-bold">AM</span>
            </div>
            
            <p className="text-[10px] md:text-xs tracking-[0.4em] text-gray-400 uppercase font-bold">
              Your Trusted Healthcare Partner
            </p>

            <h2 className="text-[36px] md:text-[52px] font-serif uppercase tracking-tight text-black leading-[1.1]">
              Explore the World of <br/> 
              <span className="text-[#e11d48]">Alhawat Medical</span>
            </h2>
          </div>

          {/* ✅ Clean Text - Justified & No Italics */}
          <div className="space-y-6 text-gray-700 text-[15px] md:text-[17px] leading-[1.8] font-light max-w-2xl text-justify">
            <p>
              We know it’s not easy to stay healthy in a world like ours. It means
              eating the right things, taking time off, and putting in the hours. It
              means living in harmony with your mind, body, and soul. Our approach is to 
              blend modern pharmaceutical excellence with traditional care values to 
              provide a seamless recovery experience for every patient.
            </p>
            
            <p className="text-[#6b5b4b] border-l-2 border-[#e11d48] pl-4 py-1">
              Our hope is to make this path to wellness easier with a little help from our{" "}
              <Link href="/healthcare" className="text-[#1f5fa9] cursor-pointer font-bold hover:underline transition">
                Healthcare products
              </Link>.
            </p>

            <p>
              There’s a lot that goes into choosing the right medicine. It begins with 
              extensive quality checks and ensuring we only stock the most trusted brands. 
              We gather the best pharmaceutical supplies to ensure your recovery is fast 
              and safe, maintaining the highest standards of medical integrity across all 
              our services.
            </p>
            
            <p className="text-[12px] tracking-wide text-gray-400 border-t border-gray-200 pt-6 uppercase font-medium">
              This commitment to your health is what keeps us going every day at Alhawat Medical.
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: IMAGE --- */}
        <div className="w-full lg:w-2/5">
          <div className="relative rounded-[40px] md:rounded-[80px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5] lg:aspect-auto lg:h-[600px] border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1639772823849-6efbd173043c?q=80&w=687&auto=format&fit=crop" 
              alt="Healthcare Illustration" 
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-[2000ms] ease-out"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
        </div>

      </div>

      {/* --- STATS SECTION --- */}
      <div className="mt-24 max-w-7xl mx-auto border-t border-gray-200 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { stat: "500+", text: "TRUSTED MEDICINES" },
            { stat: "15+", text: "YEARS OF TRUST" },
            { stat: "10k+", text: "HAPPY CUSTOMERS" },
            { stat: "24/7", text: "AVAILABILITY" }
          ].map((item, idx) => (
            <div key={idx} className="space-y-3 group cursor-default">
              <h3 className="text-[38px] md:text-[48px] font-serif text-[#e11d48] group-hover:text-[#92104d] group-hover:-translate-y-1 transition-all duration-500">
                {item.stat}
              </h3>
              <div className="h-[1px] w-8 bg-[#e11d48] mx-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-[9px] tracking-[0.25em] text-gray-400 uppercase font-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}