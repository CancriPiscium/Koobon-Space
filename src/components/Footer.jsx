import { FaInstagram, FaTiktok } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-gray-400 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold tracking-wider text-[#D4AF37]">
              KOOBON SPACE
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Ruang kumpul yang hangat untuk menikmati racikan kopi pilihan, ragam makanan lezat, dan cerita berkesan dengan harga yang ramah di kantong.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-[#D4AF37] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#D4AF37] transition">About Us</a></li>
              <li><a href="#menu" className="hover:text-[#D4AF37] transition">Menu Favorit</a></li>
              <li><a href="#promo" className="hover:text-[#D4AF37] transition">Promo Spesial</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition">Kontak & Lokasi</a></li>
            </ul>
          </div>

          {/* Social & Info */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Ikuti Kami
            </h3>
            <p className="text-xs text-gray-500">
              Dapatkan update menu dan promo terbaru via media sosial.
            </p>

            {/* Social Media Buttons dengan Ikon React Icons */}
            <div className="flex gap-3 pt-2 justify-between md:justify-start">
              <a
                href="https://www.instagram.com/koobon.space/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Koobon Space"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#1E1E1E] border border-white/10 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition cursor-pointer text-xs font-semibold"
              >
                <FaInstagram className="w-6 h-6" />
              </a>

              <a
                href="https://www.tiktok.com/@koobon.space"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok Koobon Space"
                className="flex items-center gap-2 px-3.5 py-2 bg-[#1E1E1E] border border-white/10 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition cursor-pointer text-xs font-semibold"
              >
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex justify-center items-center text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Koobon Space. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;