import { useState } from 'react'
// import koobon from '../assets/koobon.png'

function Navbar() {
    // State untuk mengontrol buka/tutup menu mobile
    const [isOpen, setIsOpen] = useState(false)

    // Fungsi untuk menutup menu saat link diklik
    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* BRAND / LOGO GAMBAR */}
                <a href="#home" className="flex items-center gap-3">
                    {/* <img
                        src={koobon}
                        alt="Koobon Space Logo"
                        className="h-10 w-auto object-contain" // Diubah ke h-10 (40px) agar proporsional
                    /> */}
                    <span className="text-xl font-bold tracking-wider text-[#D4AF37]">
                        KOOBON
                    </span>
                </a>

                {/* Navigation Links - Desktop View */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="text-gray-300 hover:text-[#D4AF37] transition font-medium">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition font-medium">About</a>
                    <a href="#menu" className="text-gray-300 hover:text-[#D4AF37] transition font-medium">Menu</a>
                    <a href="#promo" className="text-gray-300 hover:text-[#D4AF37] transition font-medium">Promo</a>
                    <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition font-medium">Contact</a>
                </div>

                {/* Action Button - Desktop View */}
                <div className="hidden md:block">
                    <button className="bg-[#D4AF37] text-black font-semibold px-6 py-2 rounded-full hover:bg-[#B8962E] transition duration-300 cursor-pointer shadow-md shadow-[#D4AF37]/10">
                        Reservation
                    </button>
                </div>

                {/* Hamburger Button - Mobile View Only */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-300 hover:text-[#D4AF37] focus:outline-none cursor-pointer p-1"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        /* Icon Close (X) */
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        /* Icon Hamburger (☰) */
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {/* Mobile Menu Dropdown Overlay */}
            {isOpen && (
                <div className="md:hidden bg-[#181818] border-b border-white/10 px-6 pt-4 pb-6 space-y-4">
                    <a
                        href="#home"
                        onClick={handleLinkClick}
                        className="block text-gray-300 hover:text-[#D4AF37] transition font-medium py-1"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={handleLinkClick}
                        className="block text-gray-300 hover:text-[#D4AF37] transition font-medium py-1"
                    >
                        About
                    </a>
                    <a
                        href="#menu"
                        onClick={handleLinkClick}
                        className="block text-gray-300 hover:text-[#D4AF37] transition font-medium py-1"
                    >
                        Menu
                    </a>
                    <a
                        href="#promo"
                        onClick={handleLinkClick}
                        className="block text-gray-300 hover:text-[#D4AF37] transition font-medium py-1"
                    >
                        Promo
                    </a>
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="block text-gray-300 hover:text-[#D4AF37] transition font-medium py-1"
                    >
                        Contact
                    </a>

                    <div className="pt-2">
                        <button
                            onClick={handleLinkClick}
                            className="w-full bg-[#D4AF37] text-black font-semibold py-2.5 rounded-full hover:bg-[#B8962E] transition duration-300 cursor-pointer shadow-md"
                        >
                            Reservation
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar