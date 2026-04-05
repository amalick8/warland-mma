import { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import { SCHEDULE } from '../data/siteData';

interface ScheduleSectionProps {
  id?: string;
  className?: string;
}

export default function ScheduleSection({ id = 'schedule', className = 'py-24 bg-white' }: ScheduleSectionProps) {
  const [activeDay, setActiveDay] = useState('Monday');

  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Weekly Schedule"
          subtitle="Plan your training sessions. We offer morning and evening classes to accommodate busy schedules."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(SCHEDULE).map((day) => (
            <button
              type="button"
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-6 py-3 font-display font-bold uppercase tracking-widest text-sm transition-all duration-300 rounded-sm cursor-pointer ${activeDay === day ? 'bg-brand-orange text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100"
          >
            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {SCHEDULE[activeDay].map((item, idx) => (
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
  );
}
