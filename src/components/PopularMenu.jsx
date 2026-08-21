import { menuData } from '../data/menuData';
import MenuCard from './MenuCard';

function PopularMenu() {
  const signatureItems = menuData.filter(item => item.isSignature);

  return (
    <section id="menu" className="py-24 bg-[#121212] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#D4AF37] font-semibold text-xs tracking-widest uppercase">
            Must Try Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Menu Favorit Koobon Space
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Beberapa pilihan menu racikan signature & makanan terfavorit yang paling sering dipesan pelanggan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatureItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularMenu;