import { Link } from 'react-router-dom';
import { MessageSquare, ChevronRight, CheckCircle2, Star, Flame, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { WHATSAPP_NUMBER } from '../constants';

export default function Hero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+from+Shah+Jee+Restaurant`;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-paper pt-20">
      {/* Background Decorative Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-action/10 text-action text-xs font-black uppercase tracking-widest mb-8 border border-action/20"
            >
              <Star size={14} className="fill-action" />
              Karachi's Favorite Premium BBQ & Mains
            </motion.div>

            <h1 className="display-large mb-8 text-primary">
              Taste the <br />
              <span className="italic-serif text-action">Authentic</span> <br />
              Karachi <span className="relative inline-block">
                Heritage
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent/30 -z-10" 
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-ink/70 mb-12 max-w-lg leading-relaxed font-light">
              Skip the apps. Skip the commission. Get the freshest <span className="font-bold text-primary">Malai Boti</span> and <span className="font-bold text-primary">Karahi</span> delivered straight from our kitchen to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-3 text-xl group"
              >
                <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
                Order on WhatsApp
              </a>
              <Link
                to="/menu"
                className="btn-accent flex items-center justify-center gap-3 text-xl group"
              >
                Explore Menu
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-ink/10">
              {[
                { label: '30+ Years', sub: 'Legacy' },
                { label: '100% Halal', sub: 'Certified' },
                { label: '45 Mins', sub: 'Delivery' }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-serif font-black text-primary">{stat.label}</p>
                  <p className="text-xs uppercase tracking-widest text-olive font-bold">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=1200"
                alt="Signature Chicken Malai Handi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 text-accent">Signature Dish</p>
                <h3 className="text-3xl font-serif font-black">Chicken Malai Handi</h3>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-accent text-white p-8 rounded-full shadow-2xl flex flex-col items-center justify-center text-center w-40 h-40 border-4 border-white z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-2">
                <Flame size={20} />
              </div>
              <p className="text-xs font-bold uppercase tracking-tighter">Starting From</p>
              <p className="text-4xl font-black">Rs. 60</p>
              <p className="text-[10px] font-bold uppercase">Best Price</p>
            </motion.div>

            {/* Trust Badges */}
            <div className="absolute -bottom-6 -right-6 flex flex-col gap-3">
              {['Fresh BBQ', 'No App Fees'].map((tag) => (
                <div key={tag} className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">{tag}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
