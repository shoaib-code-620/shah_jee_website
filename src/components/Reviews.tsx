import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Reviews() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              What Karachi Says About Shah Jee
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-black text-primary mb-6">
              Real Food, Real Reviews
            </h2>
            <div className="flex items-center justify-center gap-2 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
              <span className="text-primary font-black ml-2 text-sm tracking-widest uppercase">
                Rated 4.8 Stars on Google
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-10 bg-paper relative group hover:shadow-2xl transition-all duration-300"
            >
              <Quote size={40} className="text-accent/20 absolute top-8 right-8 group-hover:scale-110 transition-transform" />
              
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              <p className="text-lg text-gray-700 italic leading-relaxed mb-8 font-medium">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl font-serif">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="text-primary font-black text-sm uppercase tracking-widest">
                    {review.name}
                  </h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {review.area}, Karachi
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:text-accent transition-colors group"
          >
            Leave a Review on Google
            <Star size={18} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
