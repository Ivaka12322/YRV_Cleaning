import { CheckCircle2, Award, Clock, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Animate from '../components/Animate';

export default function AboutPage() {
  return (
    <div style={{ background: '#0A0A0A' }}>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Animate type="fade-up">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#FF6B35', letterSpacing: '0.18em' }}
            >
              Опознайте ни
            </p>
          </Animate>
          <Animate type="fade-up" delay={100}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.05' }}
            >
              За YRV - Професионално{' '}
              <span style={{ color: '#FF6B35' }}>почистване</span>
            </h1>
          </Animate>
          <Animate type="fade-up" delay={200}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mt-6">
              Ние сме посветени на предоставянето на най-висок клас почистващи услуги, комбинирайки иновативни технологии с безкомпромисно внимание към детайла.
            </p>
          </Animate>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Animate type="slide-left">
              <div
                className="p-10 rounded-2xl"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: '4px solid #FF6B35',
                }}
              >
                <h2
                  className="text-2xl font-bold text-white mb-5"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Кои сме ние
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm mb-5">
                  Основана с визията да трансформира стандартите в индустрията за почистване, YRV е синоним на прецизност, надеждност и премиум качество. Нашата мисия е да създаваме безупречно чисти и здравословни среди за нашите клиенти, независимо дали става въпрос за корпоративен офис или уютен дом.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm mb-8">
                  Вярваме, че чистотата не е просто задача, а изкуство. Затова инвестираме в най-добрите екипи, най-модерното оборудване и екологично чисти препарати, за да гарантираме резултати, които надминават очакванията.
                </p>
                <div className="flex flex-wrap gap-5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} color="#10B981" />
                    <span className="text-sm text-white font-medium">Сертифицирани експерти</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} color="#10B981" />
                    <span className="text-sm text-white font-medium">Еко продукти</span>
                  </div>
                </div>
              </div>
            </Animate>

            <Animate type="slide-right">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: '480px', boxShadow: '0 16px 48px rgba(0,0,0,0.5)' }}
              >
                <img
                  src="/2.jpg"
                  alt="YRV Екип - Професионални почистващи услуги"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 60%)' }}
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto">
          <Animate type="fade-up">
            <h2
              className="text-4xl md:text-5xl font-bold text-white text-center mb-14"
              style={{ letterSpacing: '-0.02em' }}
            >
              Защо да изберете нас
            </h2>
          </Animate>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award size={26} />,
                title: 'Безкомпромисно качество',
                desc: 'Всеки детайл е от значение. Нашият процес на контрол гарантира перфектни резултати при всяко посещение.',
              },
              {
                icon: <Clock size={26} />,
                title: 'Точност и гъвкавост',
                desc: 'Уважаваме вашето време. Работим по график, съобразен изцяло с вашите нужди и изисквания.',
              },
              {
                icon: <Shield size={26} />,
                title: 'Пълна дискретност',
                desc: 'Вашето спокойствие е приоритет. Нашите екипи са преминали строг подбор и обучение за конфиденциалност.',
              },
            ].map((item, idx) => (
              <Animate key={item.title} type="fade-up" delay={idx * 100}>
                <div
                  className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-default"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(255,107,53,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(255,107,53,0.15)' }}
                  >
                    <span style={{ color: '#FF6B35' }}>{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div
              className="text-center p-12 rounded-2xl"
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(255,107,53,0.15)' }}
              >
                <Users size={32} color="#FF6B35" />
              </div>
              <h2
                className="text-4xl font-bold text-white mb-6"
                style={{ letterSpacing: '-0.02em' }}
              >
                Нашият екип
              </h2>
              <p className="text-gray-400 leading-relaxed text-base max-w-2xl mx-auto mb-4">
                В сърцето на YRV стоят нашите хора. Ние сме внимателно подбран екип от професионалисти, обединени от страстта към съвършенството. Всяко лице зад нашата марка преминава през интензивни програми за обучение, гарантиращи не само техническа компетентност, но и високо ниво на клиентско обслужване.
              </p>
              <p className="text-gray-400 leading-relaxed text-base max-w-2xl mx-auto">
                Гордеем се с нашата култура на уважение, интегритет и непрекъснато усъвършенстване.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6"
        style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)' }}
      >
        <Animate type="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5"
              style={{ letterSpacing: '-0.02em' }}
            >
              Готови за безупречна чистота?
            </h2>
            <p className="text-white/90 text-xl mb-10">Свържете се с нас още днес!</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-orange-500 bg-white transition-all duration-200 hover:scale-105 uppercase tracking-wider text-sm"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
            >
              Свържете се с нас
            </Link>
          </div>
        </Animate>
      </section>

      <Footer variant="expanded" />
    </div>
  );
}
