import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import PopularMenu from './components/PopularMenu'
import Promotions from './components/Promotions'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ReservationModal from './components/ReservationModal'

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Foto-foto carousel untuk background
  const images = [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1920&auto=format&fit=crop"
  ]

  // Berganti foto otomatis tiap 5 detik tanpa animasi zoom
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="bg-[#121212] text-[#F5F5F5] min-h-screen overflow-x-hidden">
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />
      
      {/* HERO SECTION FULLSCREEN STABIL */}
      <main id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Slider (Foto Statis, Hanya Fade Transisi) */}
        {images.map((imgUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={imgUrl} 
              alt="Koobon Space Ambience" 
              className="w-full h-full object-cover"
            />
            {/* Layer Gelap agar teks selalu terbaca jelas */}
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
        ))}

        {/* Hero Content (Teks Statis di Tengah Layar) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 pt-16">
          <span className="inline-block px-4 py-1.5 bg-[#2B1E16]/80 text-[#D4AF37] text-xs font-semibold rounded-full tracking-widest uppercase border border-[#D4AF37]/30 backdrop-blur-md">
            COFFEE & COZY SPACE
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
            Nikmati Kopi, <br />
            <span className="text-[#D4AF37]">Temukan Ketenangan.</span>
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow">
            Tempat sederhana untuk menikmati racikan biji kopi pilihan, 
            berbagi cerita hangat, dan menciptakan momen berkesan setiap sore.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#menu" 
              className="w-full sm:w-auto bg-[#D4AF37] text-black px-8 py-3.5 rounded-full font-bold hover:bg-[#B8962E] hover:scale-105 active:scale-95 transition duration-300 shadow-lg shadow-[#D4AF37]/20 cursor-pointer text-sm sm:text-base"
            >
              Lihat Menu
            </a>
            <button 
              onClick={() => setIsReservationOpen(true)}
              className="w-full sm:w-auto border border-white/30 bg-black/40 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-black hover:scale-105 active:scale-95 transition duration-300 cursor-pointer text-sm sm:text-base"
            >
              Reservasi Meja
            </button>
          </div>
        </div>

      </main>

      <AboutSection />
      <PopularMenu />
      <Promotions />
      <Testimonial />
      
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={() => setIsReservationOpen(false)} 
      />
      
      <Contact />
      <Footer />
    </div>
  )
}

export default App