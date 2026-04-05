import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import ProgramsSection from '../components/ProgramsSection';
import ContactSection from '../components/ContactSection';
import { BENEFITS, PROGRAMS } from '../data/siteData';

export default function HomePage() {
  const navigate = useNavigate();
  const featuredPrograms = PROGRAMS.slice(0, 6);

  return (
    <>
      <section className="relative h-screen flex items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-background.png"
            alt="Professional MMA bout inside the octagon"
            className="h-full w-full object-cover brightness-[1.05] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/25" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block px-4 py-1 bg-brand-orange text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">
                Elite Martial Arts Training
              </span>
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6">
                Master Your <span className="text-brand-orange">Potential</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Build confidence, discipline, and elite fitness in a community-driven environment. From youth fundamentals to advanced MMA, we train champions for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={() => navigate('/intake')}>TRY A CLASS</Button>
                <button
                  type="button"
                  onClick={() => navigate('/schedule')}
                  className="inline-flex items-center justify-center px-8 py-4 font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-sm active:scale-95 cursor-pointer border-2 border-white text-white hover:bg-white hover:text-brand-black text-center"
                >
                  VIEW SCHEDULE
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-brand-orange rounded-full" />
          </div>
        </motion.div>
      </section>

      <ProgramsSection programs={featuredPrograms} showMoreButton />

      <section id="coach" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/coach-abdul.png" alt="Abdul Razak Alhassan" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-orange rounded-3xl -z-10" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Head Coach & Founder</span>
              <h2 className="text-5xl font-bold mb-6">Abdul Razak <span className="text-brand-orange">Alhassan</span></h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-brand-black">
                  Known as "Judo Thunder," Abdul Razak Alhassan is a world-class martial artist and UFC veteran.
                </p>
                <p>
                  Born in Accra, Ghana, Abdul has dedicated over 22 years to the art of Judo, earning his black belt and establishing himself as a formidable force in the Octagon. His professional career is defined by explosive power and elite-level technique, boasting a record of 12 wins, all by knockout.
                </p>
                <p>
                  At WARLAND MMA, Coach Abdul brings his extensive experience from the UFC, Bellator, and Legacy Fighting Championship to help students of all levels master their potential. His style blends world-class Judo with high-level Muay Thai, creating a comprehensive training environment.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div>
                  <h4 className="font-display font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-1">Rank</h4>
                  <p className="text-brand-black font-bold">Black Belt (Judo)</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-1">Wins</h4>
                  <p className="text-brand-black font-bold">12 (12 KOs)</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-1">Division</h4>
                  <p className="text-brand-black font-bold">Middleweight</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-1">Height</h4>
                  <p className="text-brand-black font-bold">5' 10"</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-1">Reach</h4>
                  <p className="text-brand-black font-bold">73 in</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-gray-400 text-[10px] uppercase tracking-widest mb-1">Style</h4>
                  <p className="text-brand-black font-bold">Judo / Muay Thai</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-black rounded-2xl flex items-center justify-between">
                <div className="text-white">
                  <h4 className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Professional Record</h4>
                  <p className="text-lg font-bold">12 - 7 - 0 (1 NC)</p>
                  <p className="text-[10px] text-gray-400 mt-1">12 Wins by KO | 7 Losses (2 KO, 1 Sub, 4 Dec)</p>
                </div>
                <div className="text-right">
                  <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">UFC Veteran</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionHeader
            title="Why Train With Us"
            subtitle="We are more than just a gym. We are a community dedicated to building stronger individuals through martial arts."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 border border-white/5 rounded-3xl hover:border-brand-orange/30 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join WARLAND MMA today and experience elite training in a supportive environment. Your first class is on us!
          </p>
          <Button variant="secondary" className="text-lg px-12 py-5" onClick={() => navigate('/intake')}>
            CLAIM YOUR FREE TRIAL
          </Button>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
