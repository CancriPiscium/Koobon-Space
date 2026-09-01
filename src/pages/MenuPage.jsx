import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [selectedMenu, setSelectedMenu] = useState(null)

  const fullMenu = [
    // COFFEE
    { 
      id: 1, 
      name: "Kopsu Koobon", 
      category: "COFFEE", 
      price: "15k", 
      isSignature: true, 
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop", 
      desc: "Kopi susu khas Koobon Space dengan perpaduan espresso Arabica pilihan dan susu segar yang rasanya creamy dan pas.",
      ingredients: "Espresso Arabica, Susu Segar, Creamer Spesial, Gula Aren Native"
    },
    { 
      id: 2, 
      name: "Kopsu Gula Aren", 
      category: "COFFEE", 
      price: "15k", 
      isSignature: true, 
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop", 
      desc: "Kopi susu klasik dipadukan dengan manisnya gula aren cair murni tanpa bahan pengawet.",
      ingredients: "Espresso, Fresh Milk, Sirup Gula Aren Murni"
    },
    { 
      id: 3, 
      name: "Es Susu Pandan", 
      category: "COFFEE", 
      price: "15k", 
      isSignature: true, 
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop", 
      desc: "Perpaduan unik espresso berkualitas, susu segar, dan aroma wangi pandan alami yang menyegarkan.",
      ingredients: "Espresso, Susu Segar, Extract Pandan Alami"
    },
    { 
      id: 4, 
      name: "Americano", 
      category: "COFFEE", 
      price: "12k", 
      isSignature: false, 
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop", 
      desc: "Espresso murni double shot dengan campuran air mineral berkualitas, cocok untuk pecinta kopi mantap.",
      ingredients: "Double Shot Espresso Arabica, Mineral Water"
    },
    
    // SNACK & FOOD
    { 
      id: 5, 
      name: "Koobon Roll Pizza", 
      category: "SNACK", 
      price: "13k", 
      isSignature: true, 
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop", 
      desc: "Roll pizza renyah khas racikan Dapur Koobon dengan isian keju lumer dan saus bolognese gurih.",
      ingredients: "Adonan Pizza, Keju Mozzarella, Sosis, Saus Bolognese"
    },
    { 
      id: 6, 
      name: "Mie Koobon", 
      category: "FOOD", 
      price: "10k", 
      isSignature: true, 
      image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?q=80&w=600&auto=format&fit=crop", 
      desc: "Mie spesial Koobon dengan bumbu rempah khas yang gurih, disajikan hangat (tersedia varian Kuah / Goreng).",
      ingredients: "Mie Telur, Bumbu Rempah Spesial, Kerupuk, Telur & Taburan Bawang"
    },
    { 
      id: 7, 
      name: "French Fries", 
      category: "SNACK", 
      price: "10k", 
      isSignature: false, 
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop", 
      desc: "Kentang goreng renyah di luar lembut di dalam, disajikan hangat dengan saus keju & saus sambal.",
      ingredients: "Shoestring Potato, Taburan Garam Gurih, Dip Sauce"
    },
    { 
      id: 8, 
      name: "Roti Bakar Cokelat", 
      category: "SNACK", 
      price: "12k", 
      isSignature: false, 
      image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?q=80&w=600&auto=format&fit=crop", 
      desc: "Roti panggang mentega yang lembut dengan isian cokelat lumer yang melimpah.",
      ingredients: "Roti Tawar Tebal, Mentega Premium, Isian Cokelat Lumer"
    }
  ]

  const filteredMenu = activeCategory === 'ALL' 
    ? fullMenu 
    : fullMenu.filter(item => item.category === activeCategory)

  return (
    <div className="bg-[#121212] text-white min-h-screen flex flex-col justify-between">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Title */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
              Full Menu Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
              Daftar Menu Koobon Space
            </h1>
            <p className="text-gray-400 mt-3 text-sm sm:text-base">
              Klik pada salah satu menu di bawah untuk melihat rincian bahan dan informasi rasa.
            </p>
          </div>

          {/* Filter Tab */}
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-12">
            {['ALL', 'COFFEE', 'SNACK', 'FOOD'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20'
                    : 'bg-[#1E1E1E] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Kartu Menu Dengan Foto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedMenu(item)}
                className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    {item.isSignature && (
                      <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                        Signature
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-white/10 text-[#D4AF37] text-xs font-extrabold px-3 py-1 rounded-full">
                      {item.price}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] text-[#D4AF37] font-semibold tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#D4AF37] transition">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <span className="block w-full text-center bg-[#222] group-hover:bg-[#D4AF37] group-hover:text-black text-gray-300 font-semibold text-xs py-2.5 rounded-xl border border-white/10 transition">
                    Lihat Detail
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODAL DETAIL MENU */}
      {selectedMenu && (
        <div 
          onClick={() => setSelectedMenu(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-[#181818] border border-white/10 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Image Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img 
                src={selectedMenu.image} 
                alt={selectedMenu.name} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
                aria-label="Tutup Detail"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-widest uppercase">
                    {selectedMenu.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedMenu.name}
                  </h3>
                </div>
                <span className="text-xl font-extrabold text-[#D4AF37] bg-[#2B1E16] border border-[#D4AF37]/30 px-4 py-1.5 rounded-full">
                  {selectedMenu.price}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedMenu.desc}
              </p>

              {/* Racikan/Komposisi */}
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Komposisi / Bahan:
                </p>
                <p className="text-xs text-gray-300 italic">
                  {selectedMenu.ingredients}
                </p>
              </div>

              {/* Info Catatan Pemesanan (Tanpa Tombol WhatsApp) */}
              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gray-400 italic">
                  *Pemesanan makanan & minuman dilakukan langsung di tempat (kasir / meja).
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default MenuPage