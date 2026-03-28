import { motion } from 'motion/react';
import { MessageSquare, Phone, MapPin, Clock, Send } from 'lucide-react';
import { WHATSAPP_NUMBER, PHONE_NUMBER, ADDRESS, OPENING_HOURS } from '../constants';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I+want+to+order+from+Shah+Jee+Restaurant`;

  return (
    <main className="min-h-screen bg-paper py-20">
      <Helmet>
        <title>Contact Us | Shah Jee Restaurant Karachi</title>
        <meta name="description" content="Get in touch with Shah Jee Restaurant Karachi. Order via WhatsApp, call us, or visit our location in Gulshan-e-Iqbal." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              Contact & Order Page
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Order directly via WhatsApp or phone. Get directions, check hours, and skip the delivery apps.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="card p-12 bg-white shadow-2xl border-4 border-accent/10">
              <h2 className="text-3xl font-serif font-black text-primary mb-10 leading-tight">
                Order Directly <br />
                <span className="text-accent italic">& Save 30%</span>
              </h2>
              
              <div className="space-y-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MessageSquare size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp Order</p>
                    <p className="text-2xl font-serif font-black text-primary tracking-tighter">{WHATSAPP_NUMBER}</p>
                  </div>
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-6 group hover:translate-x-2 transition-transform"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-2xl font-serif font-black text-primary tracking-tighter">{PHONE_NUMBER}</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-lg font-serif font-black text-primary leading-tight max-w-xs">{ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-paper text-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Clock size={32} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Opening Hours</p>
                    <p className="text-lg font-serif font-black text-primary tracking-tighter">{OPENING_HOURS}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card p-12 bg-white shadow-2xl">
              <h2 className="text-3xl font-serif font-black text-primary mb-10 leading-tight">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-paper focus:outline-none focus:ring-2 focus:ring-accent font-semibold text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="03XX-XXXXXXX"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-paper focus:outline-none focus:ring-2 focus:ring-accent font-semibold text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-paper focus:outline-none focus:ring-2 focus:ring-accent font-semibold text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl ${
                    formStatus === 'sent'
                      ? 'bg-[#25D366] text-white'
                      : 'bg-primary text-white hover:scale-[1.02]'
                  }`}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {formStatus === 'sent' && (
                    <>
                      <Send size={20} />
                      Message Sent!
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <section className="mb-32">
          <div className="card h-[500px] w-full bg-gray-200 overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115812.8357484307!2d67.0011364!3d24.8607343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1711550000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-8 left-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block">
              <h3 className="text-xl font-serif font-black text-primary mb-4">Visit Us</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                {ADDRESS}
              </p>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs hover:underline"
              >
                Get Directions
                <Send size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-primary">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'Does Shah Jee Restaurant deliver in Karachi?', a: 'Yes! We deliver directly across Karachi. Just WhatsApp us your order and address and we\'ll confirm delivery time and charges.' },
              { q: 'Why should I order directly instead of using foodpanda?', a: 'When you order directly, you get better prices, faster service, and exclusive deals that aren\'t available on third-party apps. Plus, your money goes directly to us — not to a commission.' },
              { q: 'Is the food at Shah Jee Restaurant halal?', a: '100% halal. All our meat is sourced from certified halal suppliers. We are committed to providing halal food for all our customers.' },
              { q: 'What payment methods are accepted?', a: 'We accept cash on delivery and bank transfer. Confirm at time of ordering via WhatsApp.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-8 bg-white"
              >
                <h4 className="text-lg font-serif font-black text-primary mb-4">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
