import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import { NAV_LINKS } from '../data/siteData';

interface SiteNavProps {
  scrolled: boolean;
}

export default function SiteNav({ scrolled }: SiteNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const shouldUseDarkNav = !isHomePage || scrolled;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${shouldUseDarkNav ? 'bg-brand-black py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold text-white tracking-tighter cursor-pointer">
          WARLAND <span className="text-brand-orange">MMA</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-widest transition-colors cursor-pointer ${isActive ? 'text-brand-orange' : 'text-white hover:text-brand-orange'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button variant="primary" className="py-2.5 px-6 text-sm" onClick={() => navigate('/intake')}>
            TRY A CLASS
          </Button>
        </div>

        <button type="button" className="lg:hidden text-white cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-black border-t border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-lg font-bold uppercase tracking-widest cursor-pointer ${isActive ? 'text-brand-orange' : 'text-white hover:text-brand-orange'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  closeMenu();
                  navigate('/intake');
                }}
              >
                TRY A CLASS
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
