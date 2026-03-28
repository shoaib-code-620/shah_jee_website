import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const RECENT_ORDERS = [
  { name: 'Ahmed', item: 'Chicken Cheez Malai Handi', time: '2 mins ago' },
  { name: 'Sara', item: 'Malai Boti (Chicken)', time: '5 mins ago' },
  { name: 'Zain', item: 'Dum Keema Fry', time: '1 min ago' },
  { name: 'Fatima', item: 'Chinese Rice & Shashlik', time: '8 mins ago' },
  { name: 'Bilal', item: 'Beef Malai Kabab Roll', time: '3 mins ago' },
];

export default function LiveOrderNotification() {
  const [currentOrder, setCurrentOrder] = useState<typeof RECENT_ORDERS[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomOrder = () => {
      const randomOrder = RECENT_ORDERS[Math.floor(Math.random() * RECENT_ORDERS.length)];
      setCurrentOrder(randomOrder);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showRandomOrder, 3000);

    // Repeat every 15-25 seconds
    const interval = setInterval(() => {
      showRandomOrder();
    }, Math.random() * 10000 + 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentOrder && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, scale: 0.8 }}
          className="fixed bottom-6 left-6 z-50 pointer-events-none"
        >
          <div className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-2xl rounded-2xl p-4 flex items-center gap-4 max-w-sm pointer-events-auto">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <ShoppingBag size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-primary">
                {currentOrder.name} <span className="font-normal text-gray-500">just ordered</span>
              </p>
              <p className="text-xs font-serif font-black text-action mt-0.5">
                {currentOrder.item}
              </p>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
                {currentOrder.time}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
