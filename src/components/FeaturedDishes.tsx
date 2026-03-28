import { MENU_ITEMS, WHATSAPP_NUMBER } from '../constants';
import { MessageSquare, Star, ChevronRight, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function FeaturedDishes() {
  const bestsellers = MENU_ITEMS.filter(item => item.isBestseller).slice(0, 6);

  return (
    <section className="py-24 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              Customer Favorites
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight">
              Our <span className="italic-serif text-action">Signature</span> Creations
            </h2>
          </motion.div>
          
          <Link
            to="/menu"
            className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:text-accent transition-colors group"
          >
            Explore Full Menu
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {bestsellers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium h-full flex flex-col overflow-hidden bg-white border-none shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Bestseller Badge */}
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-lg">
                    <Flame size={12} />
                    Bestseller
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-xl border border-white/20">
                    <p className="text-lg font-black text-primary">Rs. {item.price}</p>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-1 text-accent mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    <span className="text-xs font-bold text-gray-400 ml-2">(4.9)</span>
                  </div>
                  <h3 className="text-2xl font-serif font-black text-primary mb-3 group-hover:text-action transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 group/btn"
                  >
                    Order on WhatsApp
                    <MessageSquare size={18} className="group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
