import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  showButton?: boolean;
}

export default function ServiceCard({ service, showButton = true }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{
        background: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(255,107,53,0.25)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '240px' }}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)' }}
        />
        {/* Number Badge */}
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: '#FF6B35' }}
        >
          {String(service.id).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-lg font-semibold text-white mb-3 leading-snug" style={{ letterSpacing: '-0.01em' }}>
          {service.title}
        </h3>

        {/* Price Badge */}
        <div
          className="inline-block px-3 py-1.5 rounded-lg mb-3 text-xs font-semibold"
          style={{
            background: 'rgba(255,107,53,0.15)',
            color: '#FF6B35',
          }}
        >
          От {service.price}
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-6" style={{ lineHeight: '1.5' }}>
          {service.shortDescription}
        </p>

        {showButton && (
          <div className="space-y-3">
            <div
              className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-widest text-center transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                border: '1px solid rgba(255,107,53,0.5)',
                color: '#FF6B35',
              }}
            >
              Научете повече
              <ArrowRight size={14} />
            </div>
            <Link
              to="/contact"
              className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-widest text-center transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                color: '#ffffff',
                border: 'none',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              Заявете оферта
              <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </Link>
  );
}
