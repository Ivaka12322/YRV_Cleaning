import { Link } from 'react-router-dom';
import { services } from '../data/services';

type FooterVariant = 'simple' | 'expanded';

interface FooterProps {
  variant?: FooterVariant;
}

const navLinks = [
  { label: 'Начало', path: '/' },
  { label: 'Услуги', path: '/services' },
  { label: 'За нас', path: '/about' },
  { label: 'Контакти', path: '/contact' },
];

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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
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
                <li><Link to="/services" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Услуги</Link></li>
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
                <li className="text-sm text-gray-500">гр.София жк. Кръстова вада, Ген. Иван Колев, 25</li>
              </ul>
            </div>

            {/* Services Preview */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Услуги</h4>
              <ul className="space-y-1">
                {services.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs text-gray-500 hover:text-orange-500 transition-colors leading-relaxed truncate"
                      title={service.title}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* All Services Row */}
          <div
            className="py-6 mb-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-xs font-semibold text-white uppercase tracking-widest mb-3">Всички услуги</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="text-xs text-gray-500 hover:text-orange-500 transition-colors leading-relaxed truncate"
                  title={service.title}
                >
                  {service.title}
                </Link>
              ))}
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
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top row: brand + nav */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-xl font-bold text-white mb-1">YRV</div>
            <p className="text-xs text-gray-600">Премиум почистващи услуги в София</p>
          </div>
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-gray-500 hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services section */}
        <div
          className="pt-6 pb-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Услуги</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="text-xs text-gray-500 hover:text-orange-500 transition-colors leading-relaxed truncate"
                title={service.title}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
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
