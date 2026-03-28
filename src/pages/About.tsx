import { motion } from 'motion/react';
import { CheckCircle2, Heart, Users, Flame, Utensils } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <main className="min-h-screen bg-paper py-20">
      <Helmet>
        <title>About Us | Shah Jee Restaurant Karachi</title>
        <meta name="description" content="Learn about Shah Jee Restaurant's 30-year journey of serving authentic Pakistani food in Karachi. Our passion, our kitchen, and our community." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              About Shah Jee Restaurant
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
              Our Story
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Authentic Pakistani food since 1995. Family recipes, fresh ingredients, and a passion for serving Karachi.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://picsum.photos/seed/restaurant/800/1000"
              alt="Restaurant Interior"
              className="w-full h-full object-cover rounded-[40px] shadow-2xl border-4 border-accent/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-3xl shadow-2xl text-ink max-w-[250px] border border-gray-100 hidden md:block">
              <p className="text-4xl font-serif font-black text-accent mb-2">30+</p>
              <p className="text-sm font-bold text-primary uppercase tracking-widest">Years of Culinary Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-serif font-black text-primary leading-tight">
              Karachi's Authentic <br />
              <span className="text-accent italic">Food Institution.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Shah Jee Restaurant is a proud Karachi food institution. After years of feeding customers through third-party platforms and watching commissions eat into profits, Shah Jee has taken back control. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This website is our direct line to the people of Karachi — no middleman, no commission, just great food and real connection. We believe in fresh ingredients, traditional recipes, and the smoky aroma of real BBQ.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              {[
                { title: '100% Halal', icon: CheckCircle2 },
                { title: 'Fresh Ingredients', icon: Heart },
                { title: 'Family Recipes', icon: Users },
                { title: 'Smoky BBQ', icon: Flame },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm">
                  <item.icon size={20} className="text-accent" />
                  {item.title}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why We Left the Apps */}
        <section className="py-24 bg-primary text-white rounded-[60px] shadow-2xl overflow-hidden relative mb-32">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <Utensils size={400} className="text-white absolute -top-20 -right-20" />
          </div>
          
          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">
                Why We Left the Apps
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                "We got tired of giving 30% to apps when we could give that value directly to you. By ordering directly from us, you get better prices, faster delivery, and a direct line to our kitchen. No middleman, just honest food."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-accent text-primary flex items-center justify-center font-black text-3xl font-serif mb-4 shadow-xl">
                  S
                </div>
                <h4 className="text-xl font-serif font-black text-accent uppercase tracking-widest">Shah Jee</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Founder & Head Chef</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { title: 'Our Philosophy', desc: 'Fresh ingredients, no shortcuts, halal, authentic recipes. We cook every dish as if it were for our own family.', icon: Heart },
            { title: 'Our Kitchen', desc: 'Clean, professional, and full of passion. We maintain the highest standards of hygiene and quality.', icon: Utensils },
            { title: 'Community', desc: 'How Shah Jee feeds Karachi. We are proud to be part of this vibrant city and its food culture.', icon: Users },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-12 bg-white text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-paper text-accent flex items-center justify-center mx-auto mb-8 shadow-sm">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-serif font-black text-primary mb-6">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
