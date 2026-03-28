import { DEALS, WHATSAPP_NUMBER } from '../constants';
import { MessageSquare, CheckCircle2, Gift, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Deals() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10 bg-[radial-gradient(#C0392B_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              Exclusive Savings
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-primary mb-6 leading-tight">
              Best Value <span className="italic-serif text-action underline decoration-accent/30 underline-offset-8">Deals</span> in Karachi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get these deals only when you order directly from us. 
              <span className="text-action font-bold italic ml-2 block sm:inline mt-2 sm:mt-0">
                <Sparkles size={16} className="inline mr-1" />
                Not available on third-party apps.
              </span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DEALS.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-premium h-full flex flex-col bg-white border-none shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent via-action to-primary" />
                
                {deal.badge && (
                  <div className="absolute top-6 right-6 bg-action text-white px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase z-10 shadow-lg flex items-center gap-1">
                    <Gift size={12} />
                    {deal.badge}
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-serif font-black text-primary mb-6 leading-tight group-hover:text-action transition-colors">
                    {deal.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-8">
                    {deal.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Rs.</span>
                    <span className="text-4xl font-serif font-black text-primary tracking-tighter">
                      {deal.price.toLocaleString()}
                    </span>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+${encodeURIComponent(deal.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 py-4 group/btn shadow-xl"
                  >
                    Order Now
                    <MessageSquare size={18} className="group-hover/btn:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            * Limited time offers. Prices subject to change.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
