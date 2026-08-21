function Promotions() {
  const promoList = [
    {
      id: 1,
      title: "Paket Senja Hemat",
      items: "Kopsu Koobon + Roti Bakar Original",
      price: "25k",
      normalPrice: "28k",
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Combo Work & Study",
      items: "Americano + French Fries",
      price: "20k",
      normalPrice: "23k",
      badge: "Hemat 3k",
    },
    {
      id: 3,
      title: "Nongkrong Ramai",
      items: "4x Milk Base (Bebas Pilih) + Chicken Wings",
      price: "75k",
      normalPrice: "85k",
      badge: "Special Combo",
    },
  ];

  return (
    <section id="promo" className="py-24 bg-[#181818] border-t border-b border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
            Special Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Promo Spesial Hari Ini
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Nikmati kombinasi menu favorit Koobon Space dengan harga yang lebih hemat.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promoList.map((promo) => (
            <div 
              key={promo.id} 
              className="relative bg-neutral-900 hover:bg-neutral-800/80 rounded-2xl p-6 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition duration-300 shadow-xl flex flex-col justify-between group"
            >
              {/* Badge Promo */}
              <div className="absolute -top-3 right-6 bg-[#D4AF37] text-black font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                {promo.badge}
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition">
                  {promo.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {promo.items}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500 line-through mr-2">
                    {promo.normalPrice}
                  </span>
                  <span className="text-2xl font-extrabold text-[#D4AF37]">
                    {promo.price}
                  </span>
                </div>

                <button className="px-4 py-2 bg-[#D4AF37] text-black text-xs font-bold rounded-xl hover:bg-[#B8962E] transition cursor-pointer">
                  Klaim Promo
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Promotions;