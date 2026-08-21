function AboutSection() {
  const features = [
    {
      title: "Comfortable Space",
      desc: "Suasana tenang & nyaman, cocok untuk tempat kerja, tugas, atau sekadar bersantai.",
      icon: "☕",
    },
    {
      title: "Affordable Price",
      desc: "Sajian nikmat dengan harga terjangkau, mulai dari 3 ribuan saja.",
      icon: "🏷️",
    },
    {
      title: "Good Food & Drinks",
      desc: "Pilihan snack, makanan berat, racikan kopi hingga mocktail segar yang bervariasi.",
      icon: "🍽️",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#181818] border-t border-b border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop"
              alt="Koobon Space Ambiance"
              className="w-full h-[280px sm:h-380px md:h-420px object-cover rounded-2xl shadow-xl border border-white/10"
            />
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-2 md:bottom-6 md:-right-6 bg-[#2B1E16] border border-[#D4AF37]/30 text-white p-4 sm:p-6 rounded-2xl shadow-2xl">
              <p className="text-xl sm:text-3xl font-extrabold text-[#D4AF37]">Est. 2020</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">Your Favorite Hangout Spot</p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-6 md:mt-0">
            <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
              About Koobon Space
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
              Tempat Sederhana untuk Cerita & Momen Berarti
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              <strong className="text-white">Koobon Space</strong> hadir sebagai ruang kumpul yang hangat bagi siapa saja. Baik kamu ingin fokus menyelesaikan pekerjaan, berdiskusi kelompok, atau sekadar menikmati waktu luang bersama teman, kami menyediakan suasana yang pas dengan ragam sajian lezat yang ramah di kantong.
            </p>

            <div className="space-y-3 sm:space-y-4 pt-2">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-3 rounded-xl bg-[#222222] border border-white/5 hover:border-[#D4AF37]/40 transition">
                  <div className="text-xl sm:text-2xl p-2 bg-[#2B1E16] rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;