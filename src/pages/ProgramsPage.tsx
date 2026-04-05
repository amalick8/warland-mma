import ProgramsSection from '../components/ProgramsSection';
import { PROGRAMS } from '../data/siteData';

export default function ProgramsPage() {
  return <ProgramsSection programs={PROGRAMS} className="pt-40 pb-24 bg-white" />;
}
