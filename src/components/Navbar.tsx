import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Начало', path: '/' },
  { label: 'Услуги', path: '/services' },
  { label: 'За нас', path: '/about' },
  { label: 'Контакти', path: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.98)'
            : 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-orange-500 transition-colors duration-200">
              YRV
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path ||
                (link.path === '/services' && location.pathname.startsWith('/services'));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm font-medium uppercase tracking-widest transition-colors duration-200 pb-1"
                  style={{
                    color: isActive ? '#FF6B35' : '#ffffff',
                    letterSpacing: '0.1em',
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
                    style={{
                      width: isActive ? '100%' : '0%',
                      background: '#FF6B35',
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white uppercase tracking-wider transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                boxShadow: '0 4px 16px rgba(255,107,53,0.35)',
              }}
            >
              Заяви час
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Отвори меню"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-300"
        style={{
          background: 'rgba(10,10,10,0.98)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        <div className="flex items-center justify-between px-6 h-20">
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-white">YRV</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mt-0.5">Почистване</span>
          </Link>
          <button
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Затвори меню"
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="text-3xl font-bold uppercase tracking-widest transition-colors duration-200"
                style={{
                  color: isActive ? '#FF6B35' : '#ffffff',
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mt-4 px-8 py-4 rounded-full text-base font-bold text-white uppercase tracking-wider"
            style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)' }}
          >
            Заяви час
          </Link>
        </div>
      </div>
    </>
  );
}
