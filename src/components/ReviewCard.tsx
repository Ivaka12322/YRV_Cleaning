import { Star } from 'lucide-react';

interface ReviewCardProps {
  quote: string;
  name: string;
  service: string;
  initials: string;
  rating?: number;
}

export default function ReviewCard({ quote, name, service, initials, rating = 5 }: ReviewCardProps) {
  return (
    <div
      className="flex-shrink-0 p-8 rounded-2xl"
      style={{
        background: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.08)',
        width: '380px',
        minWidth: '380px',
      }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} fill="#FF6B35" color="#FF6B35" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-gray-300 leading-relaxed mb-6 italic" style={{ lineHeight: '1.6' }}>
        "{quote}"
      </p>

      {/* Client */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)' }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-orange-500">{name}</p>
          <p className="text-xs text-gray-500">{service}</p>
        </div>
      </div>
    </div>
  );
}
