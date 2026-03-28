import Hero from '../components/Hero';
import Deals from '../components/Deals';
import MenuCategories from '../components/MenuCategories';
import FeaturedDishes from '../components/FeaturedDishes';
import Reviews from '../components/Reviews';
import WhyChooseUs from '../components/WhyChooseUs';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_NUMBER, ADDRESS, PHONE_NUMBER } from '../constants';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+from+Shah+Jee+Restaurant`;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Shah Jee Restaurant",
    "image": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    "url": window.location.origin,
    "telephone": PHONE_NUMBER,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS,
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "servesCuisine": ["Pakistani", "BBQ", "Chinese"],
    "priceRange": "Rs. 60 - Rs. 4,200"
  };

  return (
    <main>
      <Helmet>
        <title>Shah Jee Restaurant Karachi | Best Pakistani BBQ & Karahi</title>
        <meta name="description" content="Authentic Pakistani food in Karachi. Order Malai Boti, Karahi, Keema Fry & more directly on WhatsApp. No app commission, just great food." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Hero />
      <Deals />
      <MenuCategories />
      <WhyChooseUs />
      <FeaturedDishes />
      <Reviews />

      {/* Final CTA Banner */}
      <section className="py-24 bg-action text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight">
              Hungry Right Now? <br />
              Order in 60 Seconds on WhatsApp 🍽️
            </h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-action px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl"
            >
              <MessageSquare size={28} />
              Open WhatsApp & Order NOW
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
