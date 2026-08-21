import './App.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import PopularMenu from './components/PopularMenu'
import Promotions from './components/Promotions'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#121212] text-[#F5F5F5] min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* HERO SECTION */}
      <main id="home" className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 bg-[#121212] flex items-center scroll-mt-24 relative overflow-hidden">
        
        {/* Glow Effect Background dengan Animasi Pulse */}
        <div className="absolute top-1/4 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-[#D4AF37]/10 rounded-full blur-3xl -z-10 animate-glow"></div>
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 w-full animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Kolom Kiri: Teks */}
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">
              <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-[#2B1E16] text-[#D4AF37] text-[10px] sm:text-xs font-semibold rounded-full tracking-widest uppercase border border-[#D4AF37]/30">
                COFFEE & COZY SPACE
              </span>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Nikmati Kopi, <br className="hidden sm:inline" />
                <span className="text-[#D4AF37]">Temukan Ketenangan.</span>
              </h1>
              
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                Tempat sederhana untuk menikmati racikan biji kopi pilihan, 
                berbagi cerita hangat, dan menciptakan momen berkesan setiap sore.
              </p>

              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2">
                <a href="#menu" className="w-full sm:w-auto text-center bg-[#D4AF37] text-black px-7 py-3 rounded-full font-semibold hover:bg-[#B8962E] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 cursor-pointer text-sm sm:text-base">
                  Lihat Menu
                </a>
                <a href="#about" className="w-full sm:w-auto text-center border border-[#D4AF37]/50 text-[#D4AF37] px-7 py-3 rounded-full font-medium hover:bg-[#D4AF37]/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer text-sm sm:text-base">
                  Tentang Kami
                </a>
              </div>

              {/* Stat Brief */}
              <div className="pt-6 flex items-center justify-center md:justify-start gap-6 sm:gap-8 border-t border-white/10">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#D4AF37]">100%</p>
                  <p className="text-xs sm:text-sm text-gray-400">Arabica Pilihan</p>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-[#D4AF37]">20+</p>
                  <p className="text-xs sm:text-sm text-gray-400">Varian Menu</p>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Gambar */}
            <div className="relative flex justify-center mt-4 md:mt-0 group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-[#D4AF37]/20 rounded-full filter blur-2xl -z-10 group-hover:bg-[#D4AF37]/30 transition duration-500"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop" 
                alt="Coffee Cup" 
                className="w-full max-w-xs sm:max-w-sm md:max-w-md h-300px sm:h-400px md:h-480px object-cover rounded-2xl shadow-2xl border border-white/10 transform md:rotate-2 group-hover:rotate-0 group-hover:scale-102 transition duration-500"
              />
            </div>

          </div>
        </section>
      </main>

      <AboutSection />
      <PopularMenu />
      <Promotions />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App