function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#181818] border-t border-b border-white/5 scroll-mt-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
                        Find Us
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Lokasi & Kontak
                    </h2>
                    <p className="text-gray-400 mt-3 text-sm md:text-base">
                        Mampir dan nikmati suasana hangat di Koobon Space secara langsung.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Kolom Kiri: Detail Informasi */}
                    <div className="space-y-8">

                        {/* Alamat */}
                        <div className="flex items-start gap-4 p-5 bg-[#222222] rounded-2xl border border-white/5">
                            <div className="text-2xl p-3 bg-[#2B1E16] text-[#D4AF37] rounded-xl">
                                📍
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Alamat Kami</h3>
                                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                    Jl. Raya Utama Koobon Space, Bali, Indonesia
                                </p>
                            </div>
                        </div>

                        {/* Jam Operasional */}
                        <div className="flex items-start gap-4 p-5 bg-[#222222] rounded-2xl border border-white/5">
                            <div className="text-2xl p-3 bg-[#2B1E16] text-[#D4AF37] rounded-xl">
                                ⏰
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Jam Operasional</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    Senin - Jumat: <span className="text-[#D4AF37] font-semibold">17.30 - 23.00 PM</span>
                                </p>
                                <p className="text-gray-400 text-sm mt-1">
                                    Sabtu - Minggu: <span className="text-[#D4AF37] font-semibold">17.30 - 23.30 PM</span>
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp / Kontak */}
                        <div className="flex items-start gap-4 p-5 bg-[#222222] rounded-2xl border border-white/5">
                            <div className="text-2xl p-3 bg-[#2B1E16] text-[#D4AF37] rounded-xl">
                                📞
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg">Hubungi Kami</h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    WhatsApp: <span className="text-[#D4AF37] font-semibold">+62 896-3609-7277</span>
                                </p>
                                <a
                                    href="https://wa.me/6289636097277"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block mt-3 text-xs font-bold text-black bg-[#D4AF37] px-4 py-2 rounded-lg hover:bg-[#B8962E] transition"
                                >
                                    Chat WhatsApp
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Kolom Kanan: Embed Map */}
                    <div className="h-400px w-full bg-[#222222] rounded-2xl overflow-hidden border border-white/10 shadow-xl relative">
                        <iframe
                            title="Koobon Space Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.272505314598!2d115.2207275!3d-8.5697751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f005a26eed9%3A0xeb0c7ba097fab854!2sKoobon%20Space!5e0!3m2!1sid!2sid!4v1787156433813!5m2!1sid!2sid"
                            width="100%"
                            height="350px"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition duration-500"
                        ></iframe>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;