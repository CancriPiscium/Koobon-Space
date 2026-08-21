function Testimonial() {
    const reviews = [
        {
            id: 1,
            name: "Budi Santoso",
            role: "Mahasiswa & Freelancer",
            comment: "Kopsu Gula Aren dan Roti Bakar-nya juara! Tempatnya tenang banget buat nugas malam, harganya juga sangat ramah di kantong mahasiswa.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Siti Rahma",
            role: "Regular Customer",
            comment: "Suasananya sangat nyaman dan estetik. Varian Matcha Latte dan Chicken Wings-nya wajib dicoba kalau lagi nongkrong bareng teman.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Dede Pratama",
            role: "Content Creator",
            comment: "Pelayanannya ramah, wifinya kencang, dan racikan kopi ala Koobon Space beneran pas di lidah. Fix jadi tempat favorit baru!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop"
        }
    ];

    return (
        <section id="testimonial" className="py-24 bg-[#121212] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
                        Customer Reviews
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Apa Kata Mereka?
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                        Pengalaman jujur dari pengunjung yang menikmati momen bersantai di Koobon Space.
                    </p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1E1E1E] rounded-2xl p-6 border border-white/10 hover:border-[#D4AF37]/40 transition duration-300 shadow-xl flex flex-col justify-between"
                        >
                            <div>
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 text-[#D4AF37] text-sm mb-4">
                                    {"★".repeat(item.rating)}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                                    "{item.comment}"
                                </p>
                            </div>

                            {/* Profile / Avatar */}
                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/50"
                                />
                                <div>
                                    <h3 className="text-white font-bold text-sm">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500 text-xs">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Testimonial;