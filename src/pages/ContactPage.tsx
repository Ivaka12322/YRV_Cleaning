import { Phone, Mail, Clock, Globe, Instagram, Youtube } from 'lucide-react';
import Footer from '../components/Footer';
import Animate from '../components/Animate';

export default function ContactPage() {
  return (
    <div style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <section className="pt-36 pb-12 px-6 text-center" style={{ background: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto">
          <Animate type="fade-up">
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-5"
              style={{ letterSpacing: '-0.02em', lineHeight: '1.05' }}
            >
              Свържете се с нас
            </h1>
          </Animate>
          <Animate type="fade-up" delay={100}>
            <p className="text-gray-400 text-lg leading-relaxed">
              Готови сме да обсъдим вашите нужди за премиум почистване. Свържете се с нашия екип за индивидуална консултация.
            </p>
          </Animate>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 md:py-16 px-4 md:px-6 flex items-center justify-center md:min-h-[55vh]">
        <div className="max-w-2xl w-full">
          <Animate type="fade-up" delay={150}>
            <div
              className="rounded-2xl p-6 md:p-10"
              style={{
                background: '#161616',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '4px solid #FF6B35',
              }}
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
                style={{ letterSpacing: '-0.01em' }}
              >
                Контактна Информация
              </h2>

              {/* Phone + Email side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Phone box */}
                <div
                  className="flex flex-col items-center gap-3 p-5 rounded-xl text-center"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,107,53,0.18)' }}
                  >
                    <Phone size={20} color="#FF6B35" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: '#FF6B35', letterSpacing: '0.14em' }}
                    >
                      Телефон
                    </p>
                    <a
                      href="tel:+359888123456"
                      className="text-base font-semibold text-white hover:text-orange-500 transition-colors"
                    >
                      +359 888 123 456
                    </a>
                  </div>
                </div>

                {/* Email box */}
                <div
                  className="flex flex-col items-center gap-3 p-5 rounded-xl text-center"
                  style={{
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255,107,53,0.18)' }}
                  >
                    <Mail size={20} color="#FF6B35" />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: '#FF6B35', letterSpacing: '0.14em' }}
                    >
                      Имейл
                    </p>
                    <a
                      href="mailto:office@yrv.bg"
                      className="text-base font-medium text-white hover:text-orange-500 transition-colors"
                    >
                      office@yrv.bg
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours — full width box below */}
              <div
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-xl"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,53,0.18)' }}
                >
                  <Clock size={20} color="#FF6B35" />
                </div>
                <div className="text-center sm:text-left">
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-2"
                    style={{ color: '#FF6B35', letterSpacing: '0.14em' }}
                  >
                    Работно Време
                  </p>
                  <div className="flex flex-col sm:flex-row gap-x-8 gap-y-1">
                    <p className="text-sm text-white">Понеделник – Петък: 08:00 – 19:00</p>
                    <p className="text-sm text-gray-400">Събота: 09:00 – 14:00</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="my-7"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              />

              {/* Social */}
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4 text-center"
                  style={{ color: '#FF6B35', letterSpacing: '0.14em' }}
                >
                  Последвайте ни
                </p>
                <div className="flex gap-3 justify-center">
                  {[
                    { icon: <Globe size={18} />, href: '#' },
                    { icon: <Instagram size={18} />, href: '#' },
                    { icon: <Youtube size={18} />, href: '#' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#999999',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#FF6B35';
                        (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = '#999999';
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      <Footer variant="simple" />
    </div>
  );
}
