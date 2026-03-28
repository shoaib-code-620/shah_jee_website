import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <main className="min-h-screen bg-paper py-20">
      <Helmet>
        <title>Terms & Conditions | Shah Jee Restaurant Karachi</title>
        <meta name="description" content="Read our terms and conditions for ordering food directly from Shah Jee Restaurant." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-serif font-black text-primary mb-6">
              Terms & Conditions
            </h1>
          </motion.div>
        </div>

        <div className="card p-12 bg-white space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif font-black text-primary mb-4">1. Direct Ordering</h2>
            <p>
              By ordering directly via WhatsApp or phone, you agree to provide accurate delivery information. 
              We are not responsible for delays caused by incorrect addresses or contact details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-primary mb-4">2. Pricing & Payments</h2>
            <p>
              All prices listed on the website are in Pakistani Rupees (Rs.). 
              We accept Cash on Delivery (COD) and Bank Transfers. 
              Prices are subject to change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-primary mb-4">3. Delivery Policy</h2>
            <p>
              Delivery times are estimates and may vary based on traffic, weather, and kitchen load. 
              Delivery charges may apply depending on your location in Karachi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-primary mb-4">4. Cancellations & Refunds</h2>
            <p>
              Orders can be cancelled within 5 minutes of placement via WhatsApp. 
              Refunds for bank transfers will be processed within 3-5 working days if the order is cancelled in time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-black text-primary mb-4">5. Privacy</h2>
            <p>
              We respect your privacy. Your contact information is only used for order fulfillment and 
              occasional promotional offers if you opt-in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
