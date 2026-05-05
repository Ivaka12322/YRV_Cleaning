import { Phone, Mail, MapPin, Globe, Instagram, Youtube, Send, User } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from '../components/Footer';
import Animate from '../components/Animate';

function InquiryForm() {
  const [state, handleSubmit] = useForm('mvzladae');

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-6">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: 'rgba(255,107,53,0.18)' }}
        >
          <Send size={28} color="#FF6B35" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ letterSpacing: '-0.01em' }}>
          Съобщението е изпратено!
        </h3>
        <p className="text-gray-400 leading-relaxed max-w-xs">
          Благодарим ви за запитването. Ще се свържем с вас в рамките на 24 часа.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2
        className="text-2xl md:text-3xl font-bold text-white mb-2"
        style={{ letterSpacing: '-0.01em' }}
      >
        Изпратете Запитване
      </h2>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed">
        Попълнете формуляра и ще се свържем с вас за безплатна консултация.
      </p>

      {/* Name */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#FF6B35', letterSpacing: '0.12em' }}>
          Три имена <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User size={16} color="#666" />
          </div>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Иван Иванов"
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 focus:border-orange-500"
            style={{
              background: '#1A1A1A',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#FF6B35'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          />
        </div>
        <ValidationError field="name" prefix="Три имена" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#FF6B35', letterSpacing: '0.12em' }}>
          Имейл адрес <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail size={16} color="#666" />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="ivan@example.com"
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
            style={{
              background: '#1A1A1A',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#FF6B35'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          />
        </div>
        <ValidationError field="email" prefix="Имейл" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      {/* Phone */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#FF6B35', letterSpacing: '0.12em' }}>
          Телефон <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone size={16} color="#666" />
          </div>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            placeholder="+359 88 123 4567"
            className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
            style={{
              background: '#1A1A1A',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onFocus={(e) => { e.currentTarget.style.borderColor = '#FF6B35'; }}
            onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          />
        </div>
        <ValidationError field="phone" prefix="Телефон" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      {/* Message */}
      <div className="mb-7">
        <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#FF6B35', letterSpacing: '0.12em' }}>
          Съобщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Опишете вашите нужди..."
          className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
          style={{
            background: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
          onFocus={(e) => { e.currentTarget.style.borderColor = '#FF6B35'; }}
          onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        />
        <ValidationError field="message" prefix="Съобщение" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
        style={{
          background: state.submitting ? '#cc5429' : '#FF6B35',
          color: '#fff',
          boxShadow: '0 4px 24px rgba(255,107,53,0.35)',
        }}
      >
        <Send size={16} />
        {state.submitting ? 'Изпращане...' : 'Изпрати Запитване'}
      </button>
    </form>
  );
}

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
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Left — Contact Info Card */}
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
                        href="tel:+359892426296"
                        className="text-base font-semibold text-white hover:text-orange-500 transition-colors"
                      >
                        +359 892 426 296
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
                        href="mailto:Office@yrv-proclean.bg"
                        className="text-base font-medium text-white hover:text-orange-500 transition-colors"
                      >
                        Office@yrv-proclean.bg
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
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
                    <MapPin size={20} color="#FF6B35" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: '#FF6B35', letterSpacing: '0.14em' }}
                    >
                      Адрес
                    </p>
                    <p className="text-sm text-white">гр.София жк. Кръстова вада, Ген. Иван Колев, 25</p>
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

            {/* Right — Inquiry Form */}
            <Animate type="fade-up" delay={250}>
              <div
                className="rounded-2xl p-6 md:p-10"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderLeft: '4px solid #FF6B35',
                }}
              >
                <InquiryForm />
              </div>
            </Animate>

          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </div>
  );
}
