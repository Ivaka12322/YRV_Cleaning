import { Link } from 'react-router-dom';
import { services } from '../data/services';
import Footer from '../components/Footer';
import Animate from '../components/Animate';

export default function ServicesPage() {
  return (
    <div style={{ background: '#0A0A0A' }}>
      {/* Page Header */}
      <section className="pt-36 pb-16 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto text-center">
          <Animate type="fade-up">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#FF6B35', letterSpacing: '0.18em' }}
            >
              Нашите услуги
            </p>
          </Animate>
          <Animate type="fade-up" delay={100}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.05' }}
            >
              Професионални<br />почистващи решения
            </h1>
          </Animate>
          <Animate type="fade-up" delay={200}>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed mx-auto">
              Разгледайте пълното ни портфолио от специализирани услуги, създадени да отговорят на най-високите стандарти за чистота и хигиена във всяка среда.
            </p>
          </Animate>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Animate key={service.id} type="fade-up" delay={(idx % 3) * 80 + 80}>
                <div
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(255,107,53,0.2)';
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
                    <div
                      className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: '#FF6B35' }}
                    >
                      {service.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <h3
                      className="text-xl font-semibold text-white mb-3 leading-snug"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-7">
                      {service.shortDescription}
                    </p>
                    <div className="space-y-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
                        style={{
                          border: '1px solid rgba(255,107,53,0.4)',
                          color: '#FF6B35',
                          letterSpacing: '0.12em',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = '#FF6B35';
                          (e.currentTarget as HTMLElement).style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = 'transparent';
                          (e.currentTarget as HTMLElement).style.color = '#FF6B35';
                        }}
                      >
                        Научете повече
                      </Link>
                      <Link
                        to="/contact"
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
                        style={{
                          background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                          color: '#ffffff',
                          border: 'none',
                          letterSpacing: '0.12em',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity = '0.9';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.opacity = '1';
                        }}
                      >
                        Заявете оферта
                      </Link>
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </div>
  );
}
