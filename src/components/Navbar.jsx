import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ onOpenReservation }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Fungsi navigasi yang aman dari rute manapun
  const getNavPath = (targetHash) => {
    return location.pathname === '/' ? targetHash : `/${targetHash}`
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider text-[#D4AF37]">
          KOOBON
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link to="/" className="hover:text-[#D4AF37] transition">Home</Link>
          <a href={getNavPath('#about')} className="hover:text-[#D4AF37] transition">About</a>
          <Link to="/menu" className="hover:text-[#D4AF37] transition">Menu</Link>
          <a href={getNavPath('#promo')} className="hover:text-[#D4AF37] transition">Promo</a>
          <a href={getNavPath('#contact')} className="hover:text-[#D4AF37] transition">Contact</a>
        </div>

        {/* Reservation Button (Desktop) */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenReservation}
            className="bg-[#D4AF37] text-black font-bold px-6 py-2.5 rounded-full hover:bg-[#B8962E] transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer text-sm"
          >
            Reservation
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#121212] border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-[#D4AF37]">Home</Link>
          <a href={getNavPath('#about')} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-[#D4AF37]">About</a>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-[#D4AF37]">Menu</Link>
          <a href={getNavPath('#promo')} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-[#D4AF37]">Promo</a>
          <a href={getNavPath('#contact')} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-[#D4AF37]">Contact</a>
          <button 
            onClick={() => {
              setIsOpen(false)
              if (onOpenReservation) onOpenReservation()
            }}
            className="w-full bg-[#D4AF37] text-black font-bold py-2.5 rounded-full text-center block text-sm"
          >
            Reservation
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar