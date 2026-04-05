import { motion } from 'motion/react';

interface ContactSectionProps {
  id?: string;
  className?: string;
}

export default function ContactSection({ id = 'contact', className = 'py-24 bg-white' }: ContactSectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold mb-8">Get In <span className="text-brand-orange">Touch</span></h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Have questions about our programs or pricing? We're here to help. Reach out to us and start your martial arts journey today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-widest text-brand-orange">Our Location</h4>
                  <p className="text-gray-600">WARLAND MMA Training Center<br />5790 Rendon Bloodworth Rd, Fort Worth, TX 76140, Building D</p>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-widest text-brand-orange">Call Us</h4>
                  <p className="text-gray-600">(817) 736-7037</p>
                </div>
              </div>

              <div className="flex items-start">
                <div>
                  <h4 className="font-bold text-lg mb-1 uppercase tracking-widest text-brand-orange">Email Us</h4>
                  <p className="text-gray-600">info@warlandmma.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-80 bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden relative shadow-inner">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=5790%20Rendon%20Bloodworth%20Rd,%20Fort%20Worth,%20TX%2076140&t=&z=15&ie=UTF8&iwloc=&output=embed"
                title="WARLAND MMA Location"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                <input type="tel" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all" placeholder="(555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-gray-500">Your Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none" placeholder="Tell us about your goals..." />
              </div>
              <button type="submit" className="w-full py-5 bg-brand-orange text-white font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-sm active:scale-95 cursor-pointer hover:bg-orange-600">
                SEND MESSAGE
              </button>
              <p className="text-xs text-center text-gray-400">By submitting, you agree to our terms and privacy policy.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
