import { DEALS, WHATSAPP_NUMBER } from '../constants';
import { MessageSquare, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-paper py-20">
      <Helmet>
        <title>Special Offers & Deals | Shah Jee Restaurant Karachi</title>
        <meta name="description" content="Best food deals in Karachi. Save on BBQ, Karahi, and family platters by ordering directly from Shah Jee Restaurant." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              Best Food Deals in Karachi
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
              Special Offers
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Exclusive food deals only available on direct order from Shah Jee Restaurant Karachi. 
              Family deals, BBQ combos and more — order on WhatsApp.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {DEALS.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-full bg-white relative overflow-hidden"
            >
              <div className="md:w-1/2 aspect-square md:aspect-auto relative">
                <img
                  src={`https://picsum.photos/seed/${deal.id}/800/800`}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {deal.badge && (
                  <div className="absolute top-6 left-6 bg-accent text-primary px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase z-10 shadow-xl">
                    {deal.badge}
                  </div>
                )}
                <div className="absolute bottom-6 right-6 bg-action text-white px-6 py-3 rounded-2xl text-2xl font-serif font-black shadow-2xl">
                  Rs. {deal.price.toLocaleString()}
                </div>
              </div>
              
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-black text-primary mb-8 leading-tight group-hover:text-accent transition-colors">
                  {deal.title}
                </h3>
                
                <ul className="space-y-4 mb-10">
                  {deal.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-600 leading-snug">
                      <CheckCircle2 size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+${encodeURIComponent(deal.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl"
                >
                  <MessageSquare size={24} />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary text-white p-16 rounded-[60px] shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Star size={400} className="text-white absolute -top-40 -left-40" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">
              Why pay extra on foodpanda?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
              These deals are ONLY available when you order directly. We pass the savings from app commissions directly to you.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+a+deal`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-4"
            >
              <MessageSquare size={32} />
              Grab a Deal Now
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
