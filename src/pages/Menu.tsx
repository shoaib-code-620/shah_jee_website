import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MENU_ITEMS, WHATSAPP_NUMBER } from '../constants';
import { MessageSquare, Search, Filter, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const CATEGORIES = [
  'All',
  'Pakistani Mains',
  'BBQ Corner',
  'Chinese Corner',
  'Rolls & Wraps',
  'Desserts',
  'Beverages',
  'Healthy Food',
];

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchParams({ category });
  };

  return (
    <main className="min-h-screen bg-paper py-20">
      <Helmet>
        <title>Menu & Prices | Shah Jee Restaurant Karachi</title>
        <meta name="description" content="Explore our full menu of Pakistani BBQ, Karahi, Chinese, and Desserts. View prices and order directly on WhatsApp." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              Shah Jee Restaurant Menu & Prices
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
              Our Full Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Authentic flavors, fresh ingredients, and affordable prices. 
              Order directly on WhatsApp for the best experience.
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="sticky top-20 z-40 bg-paper/80 backdrop-blur-md py-6 mb-12 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent bg-white shadow-sm font-semibold text-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full no-scrollbar pb-2 lg:pb-0">
              <Filter size={18} className="text-primary flex-shrink-0 mr-2" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-primary border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card group hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-white relative"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image || `https://picsum.photos/seed/${item.id}/600/400`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.isBestseller && (
                    <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase z-10 shadow-sm flex items-center gap-1">
                      <Star size={10} fill="currentColor" />
                      Bestseller
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-black shadow-lg">
                    Rs. {item.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-2xl font-serif font-black text-primary leading-tight group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                <div className="p-8 pt-0 mt-auto border-t border-gray-50">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg"
                  >
                    <MessageSquare size={18} />
                    Order on WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40">
            <h3 className="text-2xl font-serif font-black text-primary mb-4">No dishes found</h3>
            <p className="text-gray-500">Try searching for something else or changing the category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-8 text-accent font-black uppercase tracking-widest text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        <div className="mt-24 text-center bg-primary text-white p-12 rounded-[40px] shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-6">Can't decide?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            WhatsApp us and we'll recommend the best combo for you! 😋
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+need+some+recommendations+for+my+order`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 inline-flex"
          >
            <MessageSquare size={24} />
            Ask for Recommendations
          </a>
        </div>
      </div>
    </main>
  );
}
