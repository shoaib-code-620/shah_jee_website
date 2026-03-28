import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Utensils, Flame, Soup, WrapText, Pizza, Coffee, Cake, Heart, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  { 
    name: 'Pakistani Mains', 
    icon: Utensils, 
    color: 'bg-primary',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-2 md:row-span-2'
  },
  { 
    name: 'BBQ Corner', 
    icon: Flame, 
    color: 'bg-action',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    name: 'Chinese Corner', 
    icon: Soup, 
    color: 'bg-accent',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    name: 'Rolls & Wraps', 
    icon: WrapText, 
    color: 'bg-primary',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-2'
  },
  { 
    name: 'Parathas', 
    icon: Pizza, 
    color: 'bg-action',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    name: 'Desserts', 
    icon: Cake, 
    color: 'bg-accent',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    name: 'Beverages', 
    icon: Coffee, 
    color: 'bg-primary',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmV2ZXJhZ2VzfGVufDB8fDB8fHww'
  },
];

export default function MenuCategories() {
  return (
    <section className="py-24 bg-white overflow-hidden">
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
              Taste the Tradition
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight">
              Explore Our <span className="italic-serif text-action">Categories</span>
            </h2>
          </motion.div>
          
          <Link
            to="/menu"
            className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:text-accent transition-colors group"
          >
            See Full Menu
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[220px]">
          {CATEGORIES.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cat.span}
            >
              <Link
                to={`/menu?category=${encodeURIComponent(cat.name)}`}
                className="group relative h-full w-full block rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                  <div className={`w-10 h-10 rounded-xl ${cat.color} text-white flex items-center justify-center mb-3 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}>
                    <cat.icon size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-white leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] font-bold text-white/70 mt-1 uppercase tracking-widest translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                    Explore Now
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
