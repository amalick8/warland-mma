import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import PricingPage from './pages/PricingPage';
import SchedulePage from './pages/SchedulePage';
import ContactPage from './pages/ContactPage';
import IntakePage from './pages/IntakePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      <ScrollToTop />
      <SiteNav scrolled={scrolled} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/intake" element={<IntakePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <SiteFooter />
    </div>
  );
}
