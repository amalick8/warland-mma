/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Shield,
  Zap,
  Users,
  Trophy,
  Target,
  Heart
} from 'lucide-react';

// --- Data ---

const PROGRAMS = [
  { 
    name: "Boxing & Kickboxing",
    desc: "Professional instruction focused on technique, safety, and athletic growth.",
    details: "Our boxing and kickboxing program combines traditional striking techniques with modern athletic conditioning. You'll learn proper form, footwork, and combinations while building incredible cardiovascular endurance.",
    bullets: ["Technique-focused striking", "High-intensity conditioning", "All experience levels welcome", "Professional coaching"]
  },
  { 
    name: "Homeschool Fitness",
    desc: "Engaging physical education for homeschool students of all ages.",
    details: "A structured physical education program designed specifically for homeschool families. We focus on foundational movement, teamwork, and building a lifelong love for fitness in a fun, social environment.",
    bullets: ["Age-appropriate exercises", "Team building activities", "Social interaction", "Foundational fitness"]
  },
  { 
    name: "Tiny Warriors",
    desc: "Introduction to martial arts for our youngest students (ages 4-6).",
    details: "The perfect starting point for young children. We use martial arts as a tool to teach focus, respect, and basic motor skills through fun and engaging drills.",
    bullets: ["Focus and discipline", "Basic motor skills", "Fun, safe environment", "Confidence building"]
  },
  { 
    name: "Youth MMA",
    desc: "Comprehensive mixed martial arts training for children and teens.",
    details: "A well-rounded program teaching the fundamentals of striking, wrestling, and grappling. We emphasize technique, sportsmanship, and personal growth for the next generation of athletes.",
    bullets: ["Striking & Grappling", "Character development", "Safe, supervised training", "Skill progression"]
  },
  { 
    name: "Youth Judo",
    desc: "Traditional Judo training focused on throws, pins, and discipline.",
    details: "Led by Judo black belts, this program teaches the 'Gentle Way.' Students learn effective throws and ground control while developing exceptional balance and mental fortitude.",
    bullets: ["Olympic-style Judo", "Balance and coordination", "Respect and tradition", "Competitive opportunities"]
  },
  { 
    name: "Youth Sport Performance",
    desc: "Athletic conditioning to enhance speed, power, and agility.",
    details: "A science-based approach to athletic development. We help young athletes improve their performance in any sport by focusing on explosive power, speed, and injury prevention.",
    bullets: ["Speed and agility", "Strength development", "Injury prevention", "Sport-specific drills"]
  },
  { 
    name: "MMA Fundamentals",
    desc: "The building blocks of mixed martial arts for adult beginners.",
    details: "Start your MMA journey with a solid foundation. This class covers the essential techniques of striking, clinching, and grappling in a structured, beginner-friendly format.",
    bullets: ["Core MMA techniques", "Structured curriculum", "Beginner-friendly", "Safe environment"]
  },
  { 
    name: "Judo",
    desc: "World-class Judo instruction for adults of all skill levels.",
    details: "Train under 'Judo Thunder' and our expert staff. Master the art of throws, sweeps, and ground transitions while building incredible functional strength and technical proficiency.",
    bullets: ["Elite-level instruction", "Traditional techniques", "Functional strength", "All levels welcome"]
  },
  { 
    name: "Women’s Boxing and Kickboxing",
    desc: "Empowering striking classes designed specifically for women.",
    details: "A high-energy environment where women can learn effective striking techniques while getting in the best shape of their lives. Focus on empowerment, fitness, and community.",
    bullets: ["Empowering environment", "Full-body workout", "Self-defense skills", "Supportive community"]
  },
  { 
    name: "Boxing/Kickboxing Fundamentals",
    desc: "Master the essential striking techniques from the ground up.",
    details: "Perfect your jab, cross, hook, and kicks. This class focuses on the technical details of striking to ensure you have a strong foundation for advanced training or fitness.",
    bullets: ["Technical precision", "Footwork drills", "Proper striking form", "Foundational skills"]
  },
  { 
    name: "MMA Advanced",
    desc: "High-level training for experienced mixed martial artists.",
    details: "Take your skills to the next level. This class integrates complex combinations, advanced grappling transitions, and strategic sparring for the dedicated martial artist.",
    bullets: ["Advanced techniques", "Strategic sparring", "Competition prep", "Intense training"]
  },
  { 
    name: "MMA/Muay Thai Fundamentals",
    desc: "Combining the 'Art of Eight Limbs' with MMA basics.",
    details: "Learn to use your fists, elbows, knees, and shins effectively. This class blends traditional Muay Thai striking with the specific requirements of mixed martial arts.",
    bullets: ["Eight limbs striking", "Clinch work", "MMA integration", "Technical drills"]
  },
  { 
    name: "MMA Technique and Live Rounds",
    desc: "Refining skills through technical drills and live application.",
    details: "The bridge between drills and sparring. Focus on technical application in a live environment, allowing you to test your skills safely and effectively under pressure.",
    bullets: ["Live application", "Technical refinement", "Pressure testing", "Safe environment"]
  },
  { 
    name: "Open Mat",
    desc: "Unstructured training time to drill, roll, or spar with teammates.",
    details: "Your time to work on what you need. Whether it's drilling a specific technique, light rolling, or just getting extra rounds in, Open Mat is for self-directed improvement.",
    bullets: ["Self-directed training", "Drilling & Sparring", "Community building", "Extra mat time"]
  },
  { 
    name: "All Levels No Gi Judo",
    desc: "Adapting traditional Judo throws for No-Gi and MMA contexts.",
    details: "Learn how to apply powerful Judo throws without the traditional uniform. Essential for MMA and No-Gi grappling, focusing on overhooks, underhooks, and body locks.",
    bullets: ["No-Gi applications", "Clinch throws", "Grappling integration", "All levels welcome"]
  }
];

const PRICING = [
  {
    title: "Standard Pricing",
    tiers: [
      {
        category: "Adult",
        options: [
          { label: "1 Class Membership", price: "$125" },
          { label: "2 Class Membership", price: "$150" },
          { label: "Unlimited", price: "$175" }
        ]
      },
      {
        category: "Youth",
        options: [
          { label: "1 Class Membership", price: "$99" },
          { label: "2 Class Membership", price: "$125" },
          { label: "Unlimited", price: "$145" }
        ]
      },
      {
        category: "Family",
        options: [
          { label: "1 Class Membership", price: "$300" },
          { label: "2 Class Membership", price: "$350" },
          { label: "Unlimited", price: "$400" }
        ]
      }
    ]
  },
  {
    title: "Founding 50",
    tiers: [
      {
        category: "Adult",
        options: [
          { label: "1 Class Membership", price: "$100" },
          { label: "2 Class Membership", price: "$125" },
          { label: "Unlimited", price: "$150" }
        ]
      },
      {
        category: "Youth",
        options: [
          { label: "1 Class Membership", price: "$79" },
          { label: "2 Class Membership", price: "$100" },
          { label: "Unlimited", price: "$125" }
        ]
      },
      {
        category: "Family",
        options: [
          { label: "1 Class Membership", price: "$350" },
          { label: "2 Class Membership", price: "$400" },
          { label: "Unlimited", price: "$450" }
        ]
      }
    ]
  },
  {
    title: "Non-Recurring Payments",
    tiers: [
      {
        category: "Adult",
        options: [
          { label: "1 Class Membership", price: "$135" },
          { label: "2 Class Membership", price: "$160" },
          { label: "Unlimited", price: "$185" }
        ]
      },
      {
        category: "Youth",
        options: [
          { label: "1 Class Membership", price: "$109" },
          { label: "2 Class Membership", price: "$135" },
          { label: "Unlimited", price: "$155" }
        ]
      }
    ]
  }
];

const SCHEDULE = {
  "Monday": [
    { time: "10:00 - 10:50 AM", class: "Boxing & Kickboxing" },
    { time: "11:00 - 11:50 AM", class: "Homeschool Fitness" },
    { time: "OPEN", class: "OPEN" },
    { time: "3:45 - 4:20 PM", class: "Tiny Warriors - Boxing" },
    { time: "4:30 - 5:20 PM", class: "Youth MMA" },
    { time: "5:30 - 6:20 PM", class: "Youth Sport Performance" },
    { time: "6:30 - 7:30 PM", class: "MMA Fundamentals" },
    { time: "7:30 - 8:30 PM", class: "Judo" },
    { time: "8:30 - 9:00 PM", class: "Open Mat" }
  ],
  "Tuesday": [
    { time: "10:00 - 10:50 AM", class: "Women’s Boxing and Kickboxing" },
    { time: "11:00 - 11:50 AM", class: "Homeschool Fitness" },
    { time: "OPEN", class: "OPEN" },
    { time: "3:45 - 4:20 PM", class: "Tiny Warriors Kickboxing" },
    { time: "4:30 - 5:20 PM", class: "Youth Judo" },
    { time: "5:30 - 6:20 PM", class: "Youth Sport Performance" },
    { time: "6:30 - 7:30 PM", class: "Boxing/Kickboxing Fundamentals" },
    { time: "7:30 - 8:30 PM", class: "MMA Advanced" },
    { time: "8:30 - 9:00 PM", class: "Open Mat" }
  ],
  "Wednesday": [
    { time: "10:00 - 10:50 AM", class: "Boxing and Kickboxing" },
    { time: "11:00 - 11:50 AM", class: "Homeschool Fitness" },
    { time: "OPEN", class: "OPEN" },
    { time: "3:45 - 4:20 PM", class: "Tiny Warriors - No Gi Judo" },
    { time: "4:30 - 5:20 PM", class: "Youth MMA" },
    { time: "5:30 - 6:20 PM", class: "Youth Sport Performance" },
    { time: "6:30 - 7:30 PM", class: "MMA/Muay Thai Fundamentals" },
    { time: "7:30 - 8:30 PM", class: "Judo" },
    { time: "8:30 - 9:00 PM", class: "Open Mat" }
  ],
  "Thursday": [
    { time: "10:00 - 10:50 AM", class: "Women’s Boxing and Kickboxing" },
    { time: "11:00 - 11:50 AM", class: "Homeschool Fitness" },
    { time: "OPEN", class: "OPEN" },
    { time: "3:45 - 4:20 PM", class: "Tiny Warriors - Sport Performance" },
    { time: "4:30 - 5:20 PM", class: "Youth Judo" },
    { time: "5:30 - 6:20 PM", class: "Youth Sport Performance" },
    { time: "6:30 - 7:30 PM", class: "Boxing and Kickboxing Fundamentals" },
    { time: "7:30 - 8:30 PM", class: "MMA Advanced" },
    { time: "8:30 - 9:00 PM", class: "Open Mat" }
  ],
  "Friday": [
    { time: "10:00 - 10:50 AM", class: "-" },
    { time: "11:00 - 11:50 AM", class: "-" },
    { time: "OPEN", class: "OPEN" },
    { time: "3:45 - 4:20 PM", class: "-" },
    { time: "4:30 - 5:20 PM", class: "MMA Technique and Live Rounds" },
    { time: "5:30 - 6:20 PM", class: "Open Mat" },
    { time: "6:30 - 7:30 PM", class: "CLOSED" },
    { time: "7:30 - 8:30 PM", class: "CLOSED" },
    { time: "8:30 - 9:00 PM", class: "CLOSED" }
  ],
  "Saturday": [
    { time: "9:00 - 10:00 AM", class: "Youth Sport Performance" },
    { time: "10:00 - 11:00 AM", class: "All Levels No Gi Judo" },
    { time: "11:00 - 12:00 PM", class: "Open Mat" }
  ]
};

const BENEFITS = [
  {
    title: "Confidence",
    desc: "Build self-assurance through mastering techniques and overcoming challenges."
  },
  {
    title: "Discipline",
    desc: "Develop focus and self-control that translates from the mat to everyday life."
  },
  {
    title: "Fitness",
    desc: "Achieve peak physical condition with high-intensity athletic training."
  },
  {
    title: "Community",
    desc: "Join a supportive family of athletes dedicated to mutual growth and respect."
  },
  {
    title: "Youth Development",
    desc: "Empowering the next generation with life skills through martial arts."
  },
  {
    title: "Skill Progression",
    desc: "Structured learning paths for all levels, from beginners to advanced athletes."
  }
];

// --- Components ---

const SectionHeader = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-brand-black'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-24 h-1 bg-brand-orange mx-auto mt-6"
    />
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline', 
  className?: string,
  onClick?: () => void
}) => {
  const variants = {
    primary: 'bg-brand-orange text-white hover:bg-orange-600',
    secondary: 'bg-white text-brand-black hover:bg-gray-100',
    outline: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white'
  };

  return (
    <button 
      onClick={onClick}
      className={`px-8 py-4 font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-sm active:scale-95 ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

interface Program {
  name: string;
  desc: string;
  details: string;
  bullets: string[];
}

interface ProgramCardProps {
  program: Program;
  isExpanded: boolean;
  onToggle: () => void;
  isDeemphasized: boolean;
  key?: string | number;
}

const ProgramCard = ({ 
  program, 
  isExpanded, 
  onToggle, 
  isDeemphasized 
}: ProgramCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        layout: { duration: 0.35, ease: "easeInOut" },
        opacity: { duration: 0.2 }
      }}
      className={`relative group p-8 rounded-2xl transition-all duration-300 cursor-default overflow-hidden
        ${isExpanded 
          ? 'bg-brand-black border-brand-orange border-2 shadow-2xl md:col-span-2' 
          : 'bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1'
        }
        ${isDeemphasized ? 'opacity-60 scale-[0.98]' : 'opacity-100'}
      `}
    >
      {isExpanded && (
        <button 
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={24} />
        </button>
      )}

      <motion.h3 
        layout="position"
        className={`text-xl font-bold mb-3 transition-colors ${isExpanded ? 'text-white text-2xl' : 'text-brand-black group-hover:text-brand-orange'}`}
      >
        {program.name}
      </motion.h3>

      {isExpanded && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="w-12 h-1 bg-brand-orange mb-6 origin-left"
        />
      )}

      <motion.p 
        layout="position"
        className={`text-sm leading-relaxed transition-colors ${isExpanded ? 'text-gray-300 mb-6' : 'text-gray-500 group-hover:text-gray-600'}`}
      >
        {program.desc}
      </motion.p>

      <AnimatePresence mode="wait">
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              {program.details}
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button variant="primary" className="w-full sm:w-auto">TRY A CLASS</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <button 
          onClick={onToggle}
          className="mt-6 flex items-center text-brand-orange font-bold text-xs uppercase tracking-widest hover:text-orange-600 transition-colors"
        >
          Learn More <ChevronRight size={14} className="ml-1" />
        </button>
      )}
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState("Monday");
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-brand-black py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-display font-bold text-white tracking-tighter">
            WARLAND <span className="text-brand-orange">MMA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="py-2.5 px-6 text-sm">TRY A CLASS</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-brand-black border-t border-gray-800 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                {navLinks.map(link => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest text-white hover:text-brand-orange"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="primary" className="w-full">TRY A CLASS</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center overflow-hidden bg-brand-black">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
            alt="Gym Hero" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
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
                <Button variant="primary">TRY A CLASS</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-black">VIEW SCHEDULE</Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-brand-orange rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- Programs Section --- */}
      <section id="programs" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Our Programs" 
            subtitle="Diverse training options designed for every age and skill level. Find the perfect class to start your journey."
          />
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROGRAMS.map((program) => (
              <ProgramCard 
                key={program.name}
                program={program}
                isExpanded={expandedProgram === program.name}
                isDeemphasized={expandedProgram !== null && expandedProgram !== program.name}
                onToggle={() => setExpandedProgram(expandedProgram === program.name ? null : program.name)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Head Coach Section --- */}
      <section id="coach" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://ais-dev-spgyn4xfq3pc3znjtotgnu-202469982842.us-west2.run.app/api/files/file-2" 
                    alt="Abdul Razak Alhassan Portrait" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4 mt-12">
                  <div className="aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://ais-dev-spgyn4xfq3pc3znjtotgnu-202469982842.us-west2.run.app/api/files/file-1" 
                      alt="Abdul Razak Alhassan Action" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop" 
                      alt="Abdul Razak Alhassan Pro" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-orange rounded-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-4 block">Head Coach & Founder</span>
              <h2 className="text-5xl font-bold mb-6">Abdul Razak <span className="text-brand-orange">Alhassan</span></h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-brand-black">
                  Known as "Judo Thunder," Abdul Razak Alhassan is a world-class martial artist and UFC veteran.
                </p>
                <p>
                  Born in Accra, Ghana, Abdul has dedicated over 22 years to the art of Judo, earning his black belt and establishing himself as a formidable force in the Octagon. His professional career is defined by explosive power and elite-level technique, boasting a record of 12 wins—all by knockout.
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

      {/* --- Why Train With Us --- */}
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
                <p className="text-gray-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Membership Pricing" 
            subtitle="Transparent pricing options for individuals and families. Choose the plan that fits your lifestyle."
          />

          <div className="space-y-16">
            {PRICING.map((group, groupIdx) => (
              <div key={group.title} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <h3 className="text-2xl font-bold text-brand-black">{group.title}</h3>
                  <div className="flex-grow h-px bg-gray-200" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.tiers.map((tier, tierIdx) => (
                    <motion.div
                      key={tier.category}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500"
                    >
                      <h4 className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-6">{tier.category}</h4>
                      <div className="space-y-6">
                        {tier.options.map((option) => (
                          <div key={option.label} className="flex justify-between items-center pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                            <span className="font-medium text-gray-700">{option.label}</span>
                            <span className="text-2xl font-display font-bold text-brand-black">{option.price}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="primary" className="w-full mt-8 py-3 text-sm">SELECT PLAN</Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Schedule Section --- */}
      <section id="schedule" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Weekly Schedule" 
            subtitle="Plan your training sessions. We offer morning and evening classes to accommodate busy schedules."
          />

          {/* Day Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(SCHEDULE).map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 font-display font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm ${activeDay === day ? 'bg-brand-orange text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Schedule Table */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100"
            >
              <div className="grid grid-cols-1 divide-y divide-gray-200">
                {SCHEDULE[activeDay as keyof typeof SCHEDULE].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 transition-colors ${item.class === 'CLOSED' ? 'bg-red-50/30' : item.class === 'OPEN' ? 'bg-green-50/30' : 'hover:bg-white'}`}
                  >
                    <div className="flex items-center mb-2 sm:mb-0">
                      <span className="font-display font-bold text-lg text-brand-black">{item.time}</span>
                    </div>
                    <div className={`text-xl font-bold ${item.class === 'CLOSED' ? 'text-red-600' : item.class === 'OPEN' ? 'text-green-600' : 'text-brand-black'}`}>
                      {item.class}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA Banner --- */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join WARLAND MMA today and experience elite training in a supportive environment. Your first class is on us!
          </p>
          <Button variant="secondary" className="text-lg px-12 py-5">CLAIM YOUR FREE TRIAL</Button>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-8">Get In <span className="text-brand-orange">Touch</span></h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Have questions about our programs or pricing? We're here to help. Reach out to us and start your martial arts journey today.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold text-lg mb-1 uppercase tracking-widest text-brand-orange">Our Location</h4>
                    <p className="text-gray-600">WARLAND MMA Training Center<br />17265 Rendon Rd, Crowley, TX 76028</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold text-lg mb-1 uppercase tracking-widest text-brand-orange">Call Us</h4>
                    <p className="text-gray-600">+1 (612) 447-2554</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold text-lg mb-1 uppercase tracking-widest text-brand-orange">Email Us</h4>
                    <p className="text-gray-600">info@warlandmma.com</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="mt-12 h-80 bg-gray-100 rounded-3xl border border-gray-200 overflow-hidden relative shadow-inner">
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src="https://maps.google.com/maps?q=17265%20Rendon%20Rd,%20Crowley,%20TX%2076028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="WARLAND MMA Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
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
                  <textarea rows={4} className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                <Button variant="primary" className="w-full py-5">SEND MESSAGE</Button>
                <p className="text-xs text-center text-gray-400">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-brand-black text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div className="space-y-6">
              <a href="#" className="text-3xl font-display font-bold tracking-tighter">
                WARLAND <span className="text-brand-orange">MMA</span>
              </a>
              <p className="text-gray-400 leading-relaxed">
                Premium martial arts training for all ages. Building confidence, discipline, and elite fitness through expert instruction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Facebook size={20} /></a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-gray-400">
                {navLinks.map(link => (
                  <li key={link.name}><a href={link.href} className="hover:text-brand-orange transition-colors">{link.name}</a></li>
                ))}
                <li><a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Our Programs</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#programs" className="hover:text-brand-orange transition-colors">Youth MMA</a></li>
                <li><a href="#programs" className="hover:text-brand-orange transition-colors">Boxing & Kickboxing</a></li>
                <li><a href="#programs" className="hover:text-brand-orange transition-colors">Judo Fundamentals</a></li>
                <li><a href="#programs" className="hover:text-brand-orange transition-colors">Women's Classes</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Newsletter</h4>
              <p className="text-gray-400 mb-6">Stay updated with our latest news and class schedules.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-sm focus:outline-none focus:border-brand-orange w-full" />
                <button className="bg-brand-orange px-4 py-2 rounded-r-sm hover:bg-orange-600 transition-colors"><ChevronRight /></button>
              </div>
            </div>

          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} WARLAND MMA. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed for Champions.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
