import { ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/siteData';

export default function SiteFooter() {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter cursor-pointer">
              WARLAND <span className="text-brand-orange">MMA</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Premium martial arts training for all ages. Building confidence, discipline, and elite fitness through expert instruction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors cursor-pointer"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-brand-orange transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                </li>
              ))}
              <li><a href="#" className="hover:text-brand-orange transition-colors cursor-pointer">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Our Programs</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/programs" className="hover:text-brand-orange transition-colors cursor-pointer">Youth MMA</Link></li>
              <li><Link to="/programs" className="hover:text-brand-orange transition-colors cursor-pointer">Boxing & Kickboxing</Link></li>
              <li><Link to="/programs" className="hover:text-brand-orange transition-colors cursor-pointer">Judo Fundamentals</Link></li>
              <li><Link to="/programs" className="hover:text-brand-orange transition-colors cursor-pointer">Women's Classes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 mb-6">Stay updated with our latest news and class schedules.</p>
            <div className="flex">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-sm focus:outline-none focus:border-brand-orange w-full" />
              <button type="button" className="bg-brand-orange px-4 py-2 rounded-r-sm hover:bg-orange-600 transition-colors cursor-pointer" aria-label="Subscribe to newsletter"><ChevronRight /></button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} WARLAND MMA. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed for Champions.</p>
        </div>
      </div>
    </footer>
  );
}
