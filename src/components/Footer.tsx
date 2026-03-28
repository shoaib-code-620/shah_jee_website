import { Link } from 'react-router-dom';
import { MessageSquare, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER, ADDRESS, OPENING_HOURS } from '../constants';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+from+Shah+Jee+Restaurant`;

  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-3xl font-serif font-black text-white tracking-tighter">
                SHAH JEE<span className="text-accent">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Karachi's authentic food institution. Serving fresh BBQ, Karahi, and Chinese directly to your doorstep. No apps, no middleman, just great food.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-serif font-black uppercase tracking-widest text-accent">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Deals', 'Gallery', 'About', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Highlights */}
          <div className="space-y-8">
            <h4 className="text-lg font-serif font-black uppercase tracking-widest text-accent">
              Menu Highlights
            </h4>
            <ul className="space-y-4">
              {['Malai Boti', 'Dum Keema Fry', 'Chicken Karahi', 'Beef Degh', 'Seekh Kabab'].map((item) => (
                <li key={item}>
                  <Link
                    to="/menu"
                    className="text-gray-400 hover:text-white transition-colors text-sm font-semibold"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-lg font-serif font-black uppercase tracking-widest text-accent">
              Contact Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  {ADDRESS}
                </p>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MessageSquare size={20} className="text-accent flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold">
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={20} className="text-accent flex-shrink-0" />
                <p className="text-gray-400 text-sm font-semibold">
                  {OPENING_HOURS}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © 2026 Shah Jee Restaurant Karachi. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/terms" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
