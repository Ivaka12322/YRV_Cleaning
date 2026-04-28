import { ReactNode } from 'react';

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div
      className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-default"
      style={{
        background: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(255,107,53,0.2)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: 'rgba(255,107,53,0.15)' }}
      >
        <span style={{ color: '#FF6B35' }}>{icon}</span>
      </div>
      <h3 className="text-base font-semibold text-white mb-3 leading-snug">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
