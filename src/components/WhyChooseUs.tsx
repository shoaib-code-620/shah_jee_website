import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Heart, Award, Leaf, Zap } from 'lucide-react';

const REASONS = [
  {
    icon: ShieldCheck,
    title: '100% Halal & Fresh',
    description: 'We source only the finest, freshest ingredients and follow strict Halal standards.',
    color: 'text-primary',
    bg: 'bg-primary/10'
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description: 'Our dedicated riders ensure your food reaches you hot and fresh within 45 minutes.',
    color: 'text-action',
    bg: 'bg-action/10'
  },
  {
    icon: Award,
    title: '30+ Years Legacy',
    description: 'A tradition of taste passed down through generations, perfected for your palate.',
    color: 'text-accent',
    bg: 'bg-accent/10'
  },
  {
    icon: Leaf,
    title: 'Pure Spices',
    description: 'No artificial additives. We use our own secret blend of hand-ground spices.',
    color: 'text-olive',
    bg: 'bg-olive/10'
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every dish is prepared with passion, ensuring a homemade taste in every bite.',
    color: 'text-action',
    bg: 'bg-action/10'
  },
  {
    icon: Zap,
    title: 'Direct Savings',
    description: 'Order direct and save up to 20% compared to third-party delivery apps.',
    color: 'text-primary',
    bg: 'bg-primary/10'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-paper relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block"
          >
            The Shah Jee Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight mb-6"
          >
            Why Foodies <span className="italic-serif text-action">Love</span> Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            We don't just serve food; we serve memories. Discover why we've been Karachi's favorite for over three decades.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-accent/30 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${reason.bg} ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <reason.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-black text-primary mb-4 group-hover:text-action transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
