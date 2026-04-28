import { Link } from 'react-router-dom';

type FooterVariant = 'simple' | 'expanded';

interface FooterProps {
  variant?: FooterVariant;
}

const footerLinks = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Careers', path: '/careers' },
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
                <li><Link to="/privacy" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Terms of Service</Link></li>
                <li><Link to="/faq" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">FAQ</Link></li>
                <li><Link to="/careers" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Контакти</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@yrv.bg" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                    info@yrv.bg
                  </a>
                </li>
                <li>
                  <a href="tel:+359881234567" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">
                    +359 88 123 4567
                  </a>
                </li>
                <li className="text-sm text-gray-500">София, България</li>
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
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
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
