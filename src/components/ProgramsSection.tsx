import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import ProgramCard from './ProgramCard';
import Button from './Button';
import type { Program } from '../data/siteData';

interface ProgramsSectionProps {
  programs: Program[];
  showMoreButton?: boolean;
  id?: string;
  className?: string;
}

export default function ProgramsSection({
  programs,
  showMoreButton = false,
  id = 'programs',
  className = 'py-24 bg-white',
}: ProgramsSectionProps) {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Programs"
          subtitle="Diverse training options designed for every age and skill level. Find the perfect class to start your journey."
        />

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <ProgramCard
              key={program.name}
              program={program}
              isExpanded={expandedProgram === program.name}
              isDeemphasized={expandedProgram !== null && expandedProgram !== program.name}
              onToggle={() => setExpandedProgram(expandedProgram === program.name ? null : program.name)}
              onTryClass={() => navigate('/intake', { state: { programName: program.name } })}
            />
          ))}
        </motion.div>

        {showMoreButton && (
          <div className="mt-12 text-center">
            <Button variant="outline" onClick={() => navigate('/programs')}>
              MORE PROGRAMS
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
