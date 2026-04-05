import { AnimatePresence, motion } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import Button from './Button';
import type { Program } from '../data/siteData';

interface ProgramCardProps {
  program: Program;
  isExpanded: boolean;
  onToggle: () => void;
  isDeemphasized: boolean;
  onTryClass?: () => void;
  key?: string | number;
}

export default function ProgramCard({ program, isExpanded, onToggle, isDeemphasized, onTryClass }: ProgramCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        layout: { duration: 0.35, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      }}
      className={`relative group p-8 rounded-2xl transition-all duration-300 overflow-hidden
        ${isExpanded
          ? 'cursor-default bg-brand-black border-brand-orange border-2 shadow-2xl md:col-span-2'
          : 'bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1'
        }
        ${isDeemphasized ? 'opacity-60 scale-[0.98]' : 'opacity-100'}
      `}
    >
      {isExpanded && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10 cursor-pointer"
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
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} className="w-12 h-1 bg-brand-orange mb-6 origin-left" />
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
            <p className="text-gray-400 text-sm leading-relaxed">{program.details}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button variant="primary" className="w-full sm:w-auto" onClick={onTryClass}>
                TRY A CLASS
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && (
        <button
          type="button"
          onClick={onToggle}
          className="mt-6 flex items-center text-brand-orange font-bold text-xs uppercase tracking-widest hover:text-orange-600 transition-colors cursor-pointer"
        >
          Learn More <ChevronRight size={14} className="ml-1" />
        </button>
      )}
    </motion.div>
  );
}
