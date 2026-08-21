function MenuCard({ item }) {
  return (
    <div className="bg-[#1E1E1E] rounded-2xl p-5 border border-white/10 hover:border-[#D4AF37]/50 shadow-lg hover:shadow-[#D4AF37]/5 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start gap-2 mb-3">
          <span className="text-[11px] font-semibold px-3 py-1 bg-[#2B1E16] text-[#D4AF37] rounded-full uppercase tracking-wider border border-[#D4AF37]/20">
            {item.category}
          </span>
          <span className="text-lg font-bold text-[#D4AF37]">
            {item.price}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-white text-lg group-hover:text-[#D4AF37] transition">
            {item.name}
          </h3>
          {item.isSignature && (
            <span className="text-[9px] bg-[#D4AF37] text-black font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Signature
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {item.desc}
        </p>
      </div>

      <button className="w-full py-2.5 px-4 bg-[#282828] text-white font-medium rounded-xl hover:bg-[#D4AF37] hover:text-black transition duration-200 text-sm cursor-pointer border border-white/5">
        Pesan Sekarang
      </button>
    </div>
  );
}

export default MenuCard;