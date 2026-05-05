import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, ShieldCheck, Clock, Eye, Star,
  ChevronLeft, ChevronRight, ChevronDown, Award, Gem,
  MessageSquare, Calendar, Mail, MapPin, Sparkles
} from 'lucide-react';
import { services } from '../data/services';
import Footer from '../components/Footer';
import Animate from '../components/Animate';

const reviews = [
  {
    quote: 'Изключителен професионализъм! Екипът пристигна точно навреме и се справи блестящо с почистването след ремонта. Апартаментът блести, а в него дори не се усеща мирис на боя.',
    name: 'Мария Иванова',
    service: 'Клиент от София',
    initials: 'М',
  },
  {
    quote: 'Използвам абонаментното почистване вече 6 месеца и съм напълно доволна. Екипът е внимателен, пунктуален и резултатите са безупречни всеки път.',
    name: 'Петър Георгиев',
    service: 'Клиент от София',
    initials: 'П',
  },
  {
    quote: 'Прозорците ми изглеждат като нови! Никога не съм имал толкова чисти прозорци. Препоръчвам на всички.',
    name: 'Елена Стойнова',
    service: 'Клиент от Пловдив',
    initials: 'Е',
  },
  {
    quote: 'Машинното изпиране на килимите направи чудеса. Старите петна изчезнаха напълно. Изключително доволна от резултата!',
    name: 'Диана Николова',
    service: 'Клиент от София',
    initials: 'Д',
  },
  {
    quote: 'Почистването на входа ни изглежда перфектно. Съседите са впечатлени. Определено ще продължим с услугата.',
    name: 'Иван Петров',
    service: 'Клиент от Варна',
    initials: 'И',
  },
];

const faqs = [
  { q: 'Какви препарати използвате?', a: 'Използваме сертифицирани, екологично чисти препарати, безопасни за деца, домашни любимци и алергично чувствителни хора. Всички продукти отговарят на европейските стандарти за безопасност.' },
  { q: 'Трябва ли да присъствам по време на почистването?', a: 'Не е задължително. Много от нашите клиенти ни предоставят ключ или код за достъп. Работим с пълна дискретност и отговорност.' },
  { q: 'Как мога да платя за услугата?', a: 'Приемаме плащания в брой, по банков път или чрез ПОС терминал. Издаваме фактура при поискване.' },
  { q: 'Носите ли собствено оборудване?', a: 'Да, нашият екип идва с цялото необходимо оборудване и препарати. Не е нужно да осигурявате нищо.' },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (dir: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 420;
    carouselRef.current.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
  };

  const previewServices = services.slice(0, 6);

  return (
    <div style={{ background: '#0A0A0A' }}>
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-20"
        style={{ background: '#0A0A0A' }}
      >
        {/* Subtle bg glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(255,107,53,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Contact Info Bubble */}
        <div className="w-full px-4 sm:px-6 pt-3 pb-1 relative z-30 flex justify-center">
          <div
            className="rounded-full px-4 sm:px-6 py-2.5"
            style={{
              background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
              boxShadow: '0 4px 20px rgba(255,107,53,0.35)',
            }}
          >
            {/* Desktop: single row with separators */}
            <div className="hidden sm:flex items-center justify-center gap-0 text-white text-xs font-medium flex-wrap">
              <a href="mailto:Office@yrv-proclean.bg" className="flex items-center gap-1.5 hover:text-white/80 transition-colors px-3 py-0.5">
                <Mail size={13} />
                <span>Office@yrv-proclean.bg</span>
              </a>
              <span className="text-white/50 select-none">|</span>
              <a href="tel:0892426296" className="flex items-center gap-1.5 hover:text-white/80 transition-colors px-3 py-0.5">
                <Phone size={13} />
                <span>0892 426 296</span>
              </a>
              <span className="text-white/50 select-none">|</span>
              <span className="flex items-center gap-1.5 px-3 py-0.5">
                <MapPin size={13} />
                <span>гр.София жк. Кръстова вада, Ген. Иван Колев, 25</span>
              </span>
            </div>
            {/* Mobile: stacked compact */}
            <div className="sm:hidden flex flex-col items-center gap-1 text-white text-xs font-medium py-0.5">
              <a href="mailto:Office@yrv-proclean.bg" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                <Mail size={12} />
                <span>Office@yrv-proclean.bg</span>
              </a>
              <div className="flex items-center gap-3">
                <a href="tel:0892426296" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
                  <Phone size={12} />
                  <span>0892 426 296</span>
                </a>
              </div>
              <span className="flex items-center gap-1.5 text-center leading-tight">
                <MapPin size={12} className="flex-shrink-0" />
                <span>жк. Кръстова вада, Ген. Иван Колев, 25</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 w-full py-20 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start h-full">
            {/* Left: Character Image — z-5 places the figure behind the benefits box (z-20) */}
            <div className="relative order-2 lg:order-1 flex justify-center items-start lg:mt-0" style={{ zIndex: 5 }}>
              <div className="relative" style={{ filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.6))' }}>
                <img
                  src="public/New_hero_character_no_bg.png"
                  alt="YRV Почистване - Работник с принадлежности"
                  className="object-contain"
                  style={{ maxHeight: '550px', width: 'auto' }}
                />
              </div>

              {/* Floating Badge: Online Booking */}
              <div
                className="absolute top-12 -left-6 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,53,0.2)' }}
                >
                  <Calendar size={16} color="#FF6B35" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Бърз</p>
                  <p className="text-xs text-gray-500 leading-none mt-0.5">Отговор</p>
                </div>
              </div>

              {/* Floating Badge: Trusted */}
              <div
                className="absolute top-1/3 -right-6 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,53,0.2)' }}
                >
                  <ShieldCheck size={16} color="#FF6B35" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Доверени</p>
                  <p className="text-xs text-gray-500 leading-none mt-0.5">Професионалисти</p>
                </div>
              </div>

              {/* Floating Badge: Premium Quality - bottom left */}
              <div
                className="absolute bottom-36 -left-6 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                  zIndex: 6,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,107,53,0.2)' }}
                >
                  <Sparkles size={16} color="#FF6B35" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">10+</p>
                  <p className="text-xs text-gray-500 leading-none mt-0.5">Години опит</p>
                </div>
              </div>
            </div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2 flex flex-col justify-start lg:items-center">
              <Animate type="fade-up">
                <h1
                  className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-center"
                  style={{ letterSpacing: '-0.02em', lineHeight: '1.05' }}
                >
                  Професионално<br />почистване
                </h1>
              </Animate>
              <Animate type="fade-up" delay={100}>
                <p className="text-lg text-gray-400 leading-relaxed mb-10 text-center" style={{ maxWidth: '480px' }}>
                  Спокойният начин да резервирате почистваща услуга, от която се нуждаете, за минути.
                </p>
              </Animate>

              <Animate type="fade-up" delay={200}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                      boxShadow: '0 4px 20px rgba(255,107,53,0.4)',
                      fontSize: '15px',
                    }}
                  >
                    Към услуги
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </Animate>

              {/* Trust Stats */}
              <Animate type="fade-up" delay={300}>
              <div className="flex flex-wrap gap-8">
                {[
                  { label: '500+', sub: 'Доволни клиенти' },
                  { label: '24/7', sub: 'Бърза реакция' },
                  { label: '100%', sub: 'Kачество' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: '#FF6B35' }}
                    >
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
              </Animate>
            </div>
          </div>
        </div>

        {/* BENEFIT ITEMS
             z-index layering: hero image column = z-20, this box = z-10.
             The large negative margin-top pulls the box up into the hero section.
             The character sits on top because its parent has a higher z-index,
             creating the "emerging from the box" effect. */}
        <div
          className="w-full relative z-20"
          style={{ marginTop: '-130px', paddingBottom: '4rem' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              className="rounded-3xl px-6 pt-8 pb-6"
              style={{ background: 'rgba(30,30,30,0.88)', backdropFilter: 'blur(10px)' }}
            >
            {/* Section heading — centered horizontally and vertically */}
            <div className="flex items-center justify-center mb-6">
              <h2
                className="text-2xl md:text-3xl font-bold text-white text-center"
                style={{ letterSpacing: '-0.02em' }}
              >
                Защо да изберете нас
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: <Award size={24} />,
                  title: 'Премиум качество',
                  desc: 'Използваме най-висок клас материали и техники, без компромис с качеството.',
                },
                {
                  icon: <Clock size={24} />,
                  title: 'Точност и Време',
                  desc: 'Ценим вашето време. Екипите пристигат навреме и завършват в уговорения час.',
                },
                {
                  icon: <Eye size={24} />,
                  title: 'Дискретност',
                  desc: 'Пълна конфиденциалност и уважение към личното ви пространство.',
                },
                {
                  icon: <Gem size={24} />,
                  title: 'Детайлност',
                  desc: 'Почистваме там, където другите не поглеждат. Съвършеното е във всеки ъгъл.',
                },
              ].map((benefit, idx) => (
                <Animate key={benefit.title} type="fade-up" delay={idx * 80}>
                <div
                  className="p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default border"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(16,11,20,0.85) 100%)',
                    borderColor: 'rgba(255,107,53,0.2)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#FF6B35';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 48px rgba(255,107,53,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,107,53,0.2)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)';
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(255,107,53,0.15)' }}
                  >
                    <span style={{ color: '#FF6B35' }}>{benefit.icon}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2" style={{ letterSpacing: '-0.01em' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{benefit.desc}</p>
                </div>
                </Animate>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}

      {/* SERVICES PREVIEW */}
      <section className="py-24 relative" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <Animate type="fade-up">
              <h2
                className="text-4xl md:text-5xl font-bold text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                Нашите Услуги
              </h2>
            </Animate>
            <Animate type="fade-up" delay={100}>
              <p className="text-gray-500 mt-4 text-base">
                Открийте перфектното решение за вашите нужди с нашето богато портфолио от премиум услуги.
              </p>
            </Animate>
          </div>

          {/* Grid with fade - Desktop: show all with opacity/blur, Mobile: show 3 with blur on 3rd and button */}
          <div className="relative">
            {/* Desktop view */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {previewServices.map((service, index) => {
                const opacity = index < 3 ? 1 : index < 5 ? 0.5 : 0.25;
                const blur = index < 3 ? 0 : index < 5 ? 2 : 4;
                return (
                  <Animate key={service.id} type="fade-up" delay={(index % 3) * 80 + 80}>
                  <div
                    style={{
                      opacity,
                      filter: blur > 0 ? `blur(${blur}px)` : 'none',
                      transition: 'opacity 0.3s',
                      pointerEvents: opacity === 1 ? 'auto' : 'none',
                    }}
                  >
                    <div
                      className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                      style={{
                        background: '#1A1A1A',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="relative overflow-hidden" style={{ height: '200px' }}>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)' }}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-base font-semibold text-white mb-2 leading-snug">{service.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{service.shortDescription}</p>
                      </div>
                    </div>
                  </div>
                  </Animate>
                );
              })}
            </div>

            {/* Mobile view - exactly 3 services */}
            <div className="md:hidden space-y-4">
              {previewServices.slice(0, 3).map((service, index) => (
                <Animate key={service.id} type="fade-up" delay={index * 80 + 80}>
                  {/* 3rd card (index 2) is a container with relative positioning to overlay button */}
                  <div
                    style={{
                      position: index === 2 ? 'relative' : 'static',
                    }}
                  >
                    <div
                      style={{
                        filter: index === 2 ? 'blur(4px)' : 'none',
                        opacity: index === 2 ? 0.6 : 1,
                        transition: 'opacity 0.3s, filter 0.3s',
                        pointerEvents: index === 2 ? 'none' : 'auto',
                      }}
                    >
                      <div
                        className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300"
                        style={{
                          background: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <div className="relative overflow-hidden" style={{ height: '200px' }}>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div
                            className="absolute inset-0"
                            style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)' }}
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="text-base font-semibold text-white mb-2 leading-snug">{service.title}</h3>
                          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{service.shortDescription}</p>
                        </div>
                      </div>
                    </div>

                    {/* Button overlay on 3rd card only */}
                    {index === 2 && (
                      <div
                        className="absolute inset-0 rounded-2xl flex items-center justify-center"
                        style={{
                          pointerEvents: 'auto',
                        }}
                      >
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105"
                          style={{
                            background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                            boxShadow: '0 4px 16px rgba(255,107,53,0.4)',
                          }}
                        >
                          Към всички услуги
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    )}
                  </div>
                </Animate>
              ))}
            </div>

            {/* Gradient fade overlay - desktop only */}
            <div
              className="hidden md:block absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: '260px',
                background: 'linear-gradient(to bottom, transparent 0%, #111111 100%)',
              }}
            />

            {/* CTA Button - desktop only */}
            <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                  boxShadow: '0 8px 32px rgba(255,107,53,0.45)',
                  fontSize: '13px',
                  letterSpacing: '0.05em',
                }}
              >
                КЛИКНЕТЕ ЗА ПОВЕЧЕ ИНФОРМАЦИЯ ЗА УСЛУГИТЕ
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <Animate type="fade-up">
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  style={{ letterSpacing: '-0.02em', lineHeight: '1.1' }}
                >
                  Често задавани<br />въпроси
                </h2>
                <p className="text-gray-500 text-base mb-10 leading-relaxed">
                  Имате въпроси? Ето отговорите на най-често задаваните от нашите клиенти въпроси.
                </p>
              </Animate>

              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden transition-all duration-200"
                    style={{
                      background: '#1A1A1A',
                      border: `1px solid ${openFaq === i ? '#FF6B35' : 'rgba(255,255,255,0.08)'}`,
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-sm font-medium text-white">{faq.q}</span>
                      <ChevronDown
                        size={18}
                        color="#FF6B35"
                        className="flex-shrink-0 ml-4 transition-transform duration-200"
                        style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-4">
                        <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: FAQ image card */}
            <div className="lg:sticky lg:top-28">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ height: '420px' }}
              >
                <img
                  src="/6.jpeg"
                  alt="FAQ - Често задавани въпроси"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)' }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">Винаги на ваше разположение</h3>
                  <p className="text-sm text-gray-400">Свържете се с нас, ако имате други въпроси.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24" style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start justify-between mb-12">
            <Animate type="fade-up">
              <div>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-3"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Какво казват клиентите
                </h2>
                <p className="text-gray-500 text-base">
                  Реални отзиви от доволни клиенти, които се довериха на нашите услуги.
                </p>
              </div>
            </Animate>
            <div className="hidden md:flex gap-3 mt-2">
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)' }}
                onClick={() => scrollCarousel('left')}
              >
                <ChevronLeft size={20} color="#FF6B35" />
              </button>
              <button
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)' }}
                onClick={() => scrollCarousel('right')}
              >
                <ChevronRight size={20} color="#FF6B35" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollPaddingLeft: '0',
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 p-7 rounded-2xl snap-start"
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.08)',
                  width: '100%',
                  minWidth: 'calc(100% - 2rem)',
                  maxWidth: '380px',
                }}
              >
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} fill="#FF6B35" color="#FF6B35" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">"{review.quote}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)' }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#FF6B35' }}>{review.name}</p>
                    <p className="text-xs text-gray-500">{review.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Compact mobile view */}
      <section
        className="py-12 md:py-20 px-6"
        style={{ background: '#111111' }}
      >
        <Animate type="fade-up">
        <div
          className="max-w-5xl mx-auto rounded-3xl px-6 md:px-10 py-8 md:py-16 text-center"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)' }}
        >
          <h2
            className="text-2xl md:text-5xl font-bold text-white mb-3 md:mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            Готови за перфектна чистота?
          </h2>
          <p className="text-white/90 text-base md:text-xl mb-6 md:mb-12">Свържете се с нас за безплатен оглед и оферта</p>

          {/* Desktop: 3 columns, Mobile: hidden for compact view */}
          <div className="hidden md:grid grid-cols-3 gap-5 mb-12">
            {[
              { icon: <Phone size={24} />, label: 'Обадете се', info: '+359 892 426 296' },
              { icon: <MessageSquare size={24} />, label: 'Пишете ни', info: 'Office@yrv-proclean.bg' },
              { icon: <MapPin size={24} />, label: 'Адрес', info: 'жк. Кръстова вада, Ген. Иван Колев, 25' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-2xl text-white"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="text-xs uppercase tracking-widest text-white/70 mb-1">{item.label}</p>
                <p className="font-semibold">{item.info}</p>
              </div>
            ))}
          </div>

          {/* Mobile: compact contact info */}
          <div className="md:hidden mb-6 space-y-2 text-sm text-white/90">
            <p>Обадете се: <span className="font-semibold">+359 892 426 296</span></p>
            <p>Имейл: <span className="font-semibold">Office@yrv-proclean.bg</span></p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-6 md:px-10 py-3 md:py-5 rounded-full font-bold text-orange-500 bg-white transition-all duration-200 hover:scale-105 uppercase tracking-wider text-xs md:text-sm"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}
          >
            Заявете час
            <ArrowRight size={16} />
          </Link>
        </div>
        </Animate>
      </section>

      <Footer variant="simple" />
    </div>
  );
}