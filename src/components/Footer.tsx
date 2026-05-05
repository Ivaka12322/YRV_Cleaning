import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { services } from '../data/services';

type FooterVariant = 'simple' | 'expanded';

interface FooterProps {
  variant?: FooterVariant;
}

const navLinks = [
  { label: 'Начало', path: '/' },
  { label: 'За нас', path: '/about' },
  { label: 'Контакти', path: '/contact' },
];

function ServicesDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-xs text-gray-500 hover:text-orange-500 transition-colors"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        type="button"
      >
        Услуги
        <ChevronDown
          size={12}
          className="transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div
          className="absolute bottom-full left-0 mb-2 rounded-xl overflow-hidden z-50"
          style={{
            background: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 -8px 32px rgba(0,0,0,0.5)',
            minWidth: '260px',
          }}
        >
          <div className="p-2 max-h-72 overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,107,53,0.3) transparent' }}>
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-150"
                onClick={() => setOpen(false)}
              >
                <span
                  className="w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: 'rgba(255,107,53,0.15)', color: '#FF6B35' }}
                >
                  {service.id}
                </span>
                <span className="leading-snug">{service.title}</span>
              </Link>
            ))}
            <div className="mt-1 pt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <Link
                to="/services"
                className="flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150"
                style={{ color: '#FF6B35' }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,53,0.1)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                Всички услуги →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Footer({ variant = 'simple' }: FooterProps) {
  if (variant === 'expanded') {
    return (
      <footer
        style={{
          background: '#0D0D0D',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 -16px 48px rgba(255,107,53,0.08), 0 -8px 32px rgba(0,0,0,0.5)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold text-white mb-1">YRV</div>
              <p className="text-sm text-gray-500 leading-relaxed mt-3">
                Премиум стандарти в<br />професионалното почистване.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Връзки</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Начало</Link></li>
                <li>
                  <div className="relative group">
                    <Link to="/services" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Услуги</Link>
                    <ul className="mt-1 space-y-1 pl-3 border-l border-white/10">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="text-xs text-gray-600 hover:text-orange-500 transition-colors leading-snug block py-0.5"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li><Link to="/about" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">За нас</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Контакти</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Контакти</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:Office@yrv-proclean.bg" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                    Office@yrv-proclean.bg
                  </a>
                </li>
                <li>
                  <a href="tel:0892426296" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                    0892 426 296
                  </a>
                </li>
                <li className="text-sm text-gray-500">гр.София жк. Кръстова вада,<br />Ген. Иван Колев, 25</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="border-t px-6 py-5"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-600">© 2026 YRV Premium Cleaning. All rights reserved.</p>
            <p className="text-xs text-gray-600">
              Сайтът е изготвен от{' '}
              <a
                href="https://avltechsolutions.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                AVL Tech Solutions
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      style={{
        background: '#0D0D0D',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 -16px 48px rgba(255,107,53,0.08), 0 -8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xl font-bold text-white mb-1">YRV</div>
            <p className="text-xs text-gray-600">© 2026 YRV Premium Cleaning. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-gray-500 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ServicesDropdown />
          </div>
        </div>
        <div
          className="mt-6 pt-5 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-gray-600">
            Сайтът е изготвен от{' '}
            <a
              href="https://avltechsolutions.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              AVL Tech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
