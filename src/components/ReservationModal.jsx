import { useState } from 'react'

function ReservationModal({ isOpen, onClose }) {
  // Tipe Reservasi: 'table' (Per Meja) atau 'full' (Satu Cafe / Event)
  const [bookingType, setBookingType] = useState('table')

  // Pilihan Area & Harga Minimum Spending (Reservasi Meja)
  const areaOptions = [
    {
      id: 'indoor-ac',
      name: 'Indoor AC',
      minSpend: 'Min. Order 50k / meja',
      desc: 'Area tenang, adem, dan cocok untuk kerja/nugas.',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'outdoor-garden',
      name: 'Outdoor Santai',
      minSpend: 'Tanpa Min. Order',
      desc: 'Suasana terbuka, angin sepoi-sepoi, cocok untuk ngobrol sore.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'vip-corner',
      name: 'VIP Working Corner',
      desc: 'Area privat dengan fasilitas colokan melimpah.',
      minSpend: 'Min. Order 100k / meja',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop'
    }
  ]

  // Pilihan Paket Harga Sewa Satu Cafe (Full Venue)
  const fullVenuePackages = [
    {
      id: 'paket-3jam',
      name: 'Paket Half-Day (3 Jam)',
      price: 'Rp 750.000',
      detail: 'Termasuk voucher makan/minum Rp 500.000 + Sound System + Full AC'
    },
    {
      id: 'paket-5jam',
      name: 'Paket Full-Event (5 Jam)',
      price: 'Rp 1.200.000',
      detail: 'Termasuk voucher makan/minum Rp 900.000 + Sound System + Crew Service'
    }
  ]

  const [selectedAreaId, setSelectedAreaId] = useState(areaOptions[0].id)
  const [selectedPackage, setSelectedPackage] = useState(fullVenuePackages[0])

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '2 Orang',
    area: areaOptions[0].name,
    eventType: 'Ulang Tahun',
    notes: ''
  })

  if (!isOpen) return null

  const handleAreaSelect = (area) => {
    setSelectedAreaId(area.id)
    setFormData({ ...formData, area: area.name })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let message = ''

    if (bookingType === 'table') {
      const currentArea = areaOptions.find(a => a.id === selectedAreaId)
      message = `Halo *Koobon Space*! 👋\n\nSaya ingin melakukan *Reservasi Meja*:\n- *Nama:* ${formData.name}\n- *Tanggal:* ${formData.date}\n- *Jam:* ${formData.time} WITA\n- *Jumlah Orang:* ${formData.guests}\n- *Area Pilihan:* ${formData.area} (${currentArea?.minSpend})\n- *Catatan:* ${formData.notes || '-'}\n\nMohon konfirmasi ketersediaan mejanya. Terima kasih!`
    } else {
      message = `Halo *Koobon Space*! 👋\n\nSaya ingin mengajukan *Booking Satu Cafe (Private Event)* 🎉:\n- *Nama Penanggung Jawab:* ${formData.name}\n- *Paket Dipilih:* ${selectedPackage.name} (${selectedPackage.price})\n- *Jenis Acara:* ${formData.eventType}\n- *Tanggal Acara:* ${formData.date}\n- *Jam Mulai:* ${formData.time} WITA\n- *Estimasi Jumlah Tamu:* ${formData.guests}\n- *Catatan / Request Khusus:* ${formData.notes || '-'}\n\nMohon info prosedur pembayaran dan ketersediaan tanggalnya. Terima kasih!`
    }

    const waUrl = `https://wa.me/6289636097277?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
    onClose()
  }

  const currentArea = areaOptions.find(a => a.id === selectedAreaId) || areaOptions[0]

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#181818] border border-white/10 w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
      >
        {/* Tombol Tutup (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-white/10 bg-[#121212]">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
            Reservation System
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
            Form Reservasi & Pricelist
          </h3>

          {/* Tab Switcher */}
          <div className="flex bg-[#222] p-1 rounded-xl border border-white/10 mt-4">
            <button
              type="button"
              onClick={() => setBookingType('table')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                bookingType === 'table' 
                  ? 'bg-[#D4AF37] text-black shadow' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Reservasi Meja
            </button>
            <button
              type="button"
              onClick={() => setBookingType('full')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                bookingType === 'full' 
                  ? 'bg-[#D4AF37] text-black shadow' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              🎉 Sewa Satu Cafe (Private Event)
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* OPSI 1: RESERVASI MEJA */}
          {bookingType === 'table' && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-gray-300">
                  Pilih Area Tempat Duduk:
                </label>
                <span className="text-xs text-[#D4AF37] font-bold">
                  {currentArea.minSpend}
                </span>
              </div>
              
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden mb-3 border border-white/10">
                <img 
                  src={currentArea.image} 
                  alt={currentArea.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider">
                    {currentArea.minSpend}
                  </span>
                  <h4 className="text-lg font-bold text-white">{currentArea.name}</h4>
                  <p className="text-xs text-gray-300 mt-0.5">{currentArea.desc}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {areaOptions.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => handleAreaSelect(area)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold transition cursor-pointer text-center ${
                      selectedAreaId === area.id
                        ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow font-bold'
                        : 'bg-[#222] text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* OPSI 2: SEWA SATU CAFE (PRICELIST SEWA CAFE) */}
          {bookingType === 'full' && (
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-gray-300">
                Pilih Paket Private Event:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fullVenuePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg)}
                    className={`p-4 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                      selectedPackage.id === pkg.id
                        ? 'bg-[#2B1E16] border-[#D4AF37] text-white shadow-lg'
                        : 'bg-[#222] border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#D4AF37] uppercase block">
                        {pkg.name}
                      </span>
                      <span className="text-xl font-extrabold text-white block mt-1">
                        {pkg.price}
                      </span>
                      <p className="text-[11px] text-gray-300 mt-2 leading-relaxed">
                        {pkg.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORM ISIAN DATA */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-white/10">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {bookingType === 'full' ? 'Nama Penanggung Jawab Acara' : 'Nama Lengkap'}
              </label>
              <input 
                type="text" 
                required
                placeholder="Masukkan nama kamu"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#222] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {bookingType === 'full' && (
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Jenis Acara</label>
                <select 
                  value={formData.eventType}
                  onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                  className="w-full bg-[#222] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="Ulang Tahun">Ulang Tahun</option>
                  <option value="Gathering Komunitas">Gathering / Mini Event</option>
                  <option value="Reuni">Reuni</option>
                  <option value="Workshop / Live Music">Workshop / Live Music</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Tanggal</label>
                <input 
                  type="date" 
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-[#222] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Jam Mulai</label>
                <input 
                  type="time" 
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full bg-[#222] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {bookingType === 'full' ? 'Estimasi Total Tamu Undangan' : 'Jumlah Orang'}
              </label>
              <select 
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="w-full bg-[#222] border border-white/10 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              >
                {bookingType === 'table' ? (
                  <>
                    <option value="1-2 Orang">1 - 2 Orang</option>
                    <option value="3-4 Orang">3 - 4 Orang</option>
                    <option value="5-8 Orang">5 - 8 Orang</option>
                    <option value="> 8 Orang">&gt; 8 Orang</option>
                  </>
                ) : (
                  <>
                    <option value="20 - 35 Orang">20 - 35 Orang</option>
                    <option value="35 - 50 Orang">35 - 50 Orang</option>
                    <option value="> 50 Orang">&gt; 50 Orang</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">Catatan / Request Khusus (Opsional)</label>
              <textarea 
                rows="2"
                placeholder={bookingType === 'full' ? "Contoh: Butuh sound system, meja dekorasi ulang tahun, dll." : "Contoh: Dekat colokan listrik"}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full bg-[#222] border border-white/10 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold text-sm py-3 rounded-xl transition shadow-lg shadow-[#D4AF37]/20 cursor-pointer mt-2"
            >
              {bookingType === 'full' 
                ? `Klaim Paket ${selectedPackage.name} (${selectedPackage.price}) via WA` 
                : `Kirim Reservasi (${formData.area}) via WA`}
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ReservationModal