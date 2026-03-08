import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyChooseUs />
        <Services />

        {/* CTA Section */}
        <section className="py-24 bg-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl text-white mb-8"
            >
              Ready to Feel the Difference?
            </motion.h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              Schedule your service today and get $50 off your first repair.
              Don't let the heat win.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Schedule Now
              </motion.button>
              <motion.a
                href="tel:+14806166587"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Call (480) 616-6587
              </motion.a>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
