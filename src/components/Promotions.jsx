import { useState } from 'react'

function Promotions() {
  // State untuk menyimpan paket promo yang dipilih untuk modal
  const [selectedPromo, setSelectedPromo] = useState(null)

  const promoList = [
    {
      id: 1,
      title: "Paket Senja Hemat",
      badge: "BEST SELLER",
      items: "Kopsu Koobon + Roti Bakar Original",
      originalPrice: "28k",
      promoPrice: "25k",
      saveAmount: "Hemat 3k",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop",
      desc: "Kombinasi sempurna kopi susu khas Koobon dengan roti bakar gurih mentega untuk menemani sore santaimu.",
      terms: "Berlaku setiap hari pukul 15.00 - 19.00 WITA untuk dine-in & take away."
    },
    {
      id: 2,
      title: "Combo Work & Study",
      badge: "HEMAT 3K",
      items: "Americano + French Fries",
      originalPrice: "23k",
      promoPrice: "20k",
      saveAmount: "Hemat 3k",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
      desc: "Suplai kafein dari Double Shot Americano dipadu kentang goreng renyah untuk menjaga fokus tugas atau kerjamu.",
      terms: "Berlaku setiap hari tanpa batasan jam."
    },
    {
      id: 3,
      title: "Nongkrong Ramai",
      badge: "SPECIAL COMBO",
      items: "4x Milk Base (Bebas Pilih) + Chicken Wings",
      originalPrice: "85k",
      promoPrice: "75k",
      saveAmount: "Hemat 10k",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
      desc: "Paket kombo hemat khusus nongkrong bareng teman-teman. Pilih 4 varian minuman favoritmu + porsi camilan chicken wings.",
      terms: "Khusus pemesanan langsung di tempat (Dine-in)."
    }
  ]

  return (
    <section id="promo" className="py-16 sm:py-24 bg-[#0D0D0D] scroll-mt-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
            Special Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-2">
            Promo Spesial Hari Ini
          </h2>
          <p className="text-gray-400 mt-3 text-xs sm:text-base">
            Nikmati kombinasi menu favorit Koobon Space dengan harga yang lebih hemat.
          </p>
        </div>

        {/* Grid Kartu Promo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promoList.map((promo) => (
            <div 
              key={promo.id}
              onClick={() => setSelectedPromo(promo)} // KLIK KARTU UNTUK BUKA MODAL
              className="bg-[#151515] border border-white/10 rounded-2xl p-6 relative hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
            >
              {/* Badge Top Right */}
              <div className="absolute -top-3 right-6 bg-[#D4AF37] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                {promo.badge}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-[#D4AF37] transition">
                  {promo.title}
                </h3>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  {promo.items}
                </p>
              </div>

              {/* Price & CTA Button */}
              <div className="pt-8 border-t border-white/10 mt-6 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 line-through mr-2">
                    {promo.originalPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-[#D4AF37]">
                    {promo.promoPrice}
                  </span>
                </div>

                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPromo(promo)
                  }}
                  className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer shadow"
                >
                  Klaim Promo
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* MODAL DETAIL PROMO */}
      {selectedPromo && (
        <div 
          onClick={() => setSelectedPromo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-[#181818] border border-white/10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Banner Gambar Modal */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <img 
                src={selectedPromo.image} 
                alt={selectedPromo.title} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs font-extrabold px-3 py-1 rounded-full uppercase shadow">
                {selectedPromo.saveAmount}
              </span>
              <button 
                onClick={() => setSelectedPromo(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
                aria-label="Tutup Promo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Rincian Detail Promo */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
                    {selectedPromo.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedPromo.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 line-through block">
                    {selectedPromo.originalPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-[#D4AF37]">
                    {selectedPromo.promoPrice}
                  </span>
                </div>
              </div>

              <div className="bg-[#222] p-3 rounded-xl border border-white/5">
                <p className="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">
                  Isi Paket Promo:
                </p>
                <p className="text-sm font-bold text-white">
                  {selectedPromo.items}
                </p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedPromo.desc}
              </p>

              {/* Syarat & Ketentuan */}
              <div className="pt-2 border-t border-white/10">
                <p className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Syarat & Ketentuan:
                </p>
                <p className="text-xs text-gray-400 italic">
                  {selectedPromo.terms}
                </p>
              </div>

              {/* Tombol Klaim via WhatsApp */}
              <div className="pt-3">
                <a 
                  href={`https://wa.me/6289636097277?text=Halo%20Koobon%20Space,%20saya%20ingin%20mengklaim%20${encodeURIComponent(selectedPromo.title)}%20seharga%20${selectedPromo.promoPrice}`}
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full text-center bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-sm py-3 rounded-xl transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
                >
                  Klaim Sekarang via WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default Promotions