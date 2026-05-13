import { useParams, Navigate } from 'react-router-dom';
import {
  Phone, Mail, Settings, CheckCircle2,
  UtensilsCrossed, Square, Sparkles, Bath, LayoutGrid,
  Trash, ChefHat, Wind, PlusCircle, Maximize, Minus,
  Sofa, Grid2x2, BedDouble, Home, Droplets, Hammer, CheckCircle,
  ArrowUp, DoorOpen, ListChecks, ClipboardList, Droplet,
  Flame, Shield, Car, ChevronsDown, Building2, Trash2,
  Layers, TreePine, Gem, FlaskConical, ShieldCheck, Package,
  ShoppingBag, Monitor, DoorClosed, Users, Frame
} from 'lucide-react';
import { getServiceBySlug } from '../data/services';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';

const iconMap: Record<string, JSX.Element> = {
  shower: <Bath size={18} color="#FF6B35" />,
  utensils: <UtensilsCrossed size={18} color="#FF6B35" />,
  square: <Square size={18} color="#FF6B35" />,
  sparkles: <Sparkles size={18} color="#FF6B35" />,
  bath: <Bath size={18} color="#FF6B35" />,
  layout: <LayoutGrid size={18} color="#FF6B35" />,
  trash: <Trash size={18} color="#FF6B35" />,
  'chef-hat': <ChefHat size={18} color="#FF6B35" />,
  wind: <Wind size={18} color="#FF6B35" />,
  'plus-circle': <PlusCircle size={18} color="#FF6B35" />,
  frame: <Frame size={18} color="#FF6B35" />,
  maximize: <Maximize size={18} color="#FF6B35" />,
  minus: <Minus size={18} color="#FF6B35" />,
  sofa: <Sofa size={18} color="#FF6B35" />,
  grid: <Grid2x2 size={18} color="#FF6B35" />,
  bed: <BedDouble size={18} color="#FF6B35" />,
  home: <Home size={18} color="#FF6B35" />,
  droplets: <Droplets size={18} color="#FF6B35" />,
  hammer: <Hammer size={18} color="#FF6B35" />,
  'cooking-pot': <UtensilsCrossed size={18} color="#FF6B35" />,
  'check-circle': <CheckCircle size={18} color="#FF6B35" />,
  stairs: <ArrowUp size={18} color="#FF6B35" />,
  'arrow-up': <ArrowUp size={18} color="#FF6B35" />,
  'door-open': <DoorOpen size={18} color="#FF6B35" />,
  'list-checks': <ListChecks size={18} color="#FF6B35" />,
  'clipboard-list': <ClipboardList size={18} color="#FF6B35" />,
  droplet: <Droplet size={18} color="#FF6B35" />,
  flame: <Flame size={18} color="#FF6B35" />,
  shield: <Shield size={18} color="#FF6B35" />,
  car: <Car size={18} color="#FF6B35" />,
  'chevrons-down': <ChevronsDown size={18} color="#FF6B35" />,
  'building-2': <Building2 size={18} color="#FF6B35" />,
  'trash-2': <Trash2 size={18} color="#FF6B35" />,
  layers: <Layers size={18} color="#FF6B35" />,
  'tree-pine': <TreePine size={18} color="#FF6B35" />,
  gem: <Gem size={18} color="#FF6B35" />,
  'flask-conical': <FlaskConical size={18} color="#FF6B35" />,
  'shield-check': <ShieldCheck size={18} color="#FF6B35" />,
  package: <Package size={18} color="#FF6B35" />,
  'shopping-bag': <ShoppingBag size={18} color="#FF6B35" />,
  monitor: <Monitor size={18} color="#FF6B35" />,
  'door-closed': <DoorClosed size={18} color="#FF6B35" />,
  toilet: <DoorClosed size={18} color="#FF6B35" />,
  users: <Users size={18} color="#FF6B35" />,
};

function getIcon(iconName: string) {
  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{ background: 'rgba(255,107,53,0.18)' }}
    >
      {iconMap[iconName] ?? <Settings size={18} color="#FF6B35" />}
    </div>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div style={{ background: '#0A0A0A' }}>
      {/* Hero */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: '#0A0A0A', minHeight: '50vh' }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.95) 40%, transparent 100%)' }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#FF6B35', letterSpacing: '0.18em' }}
          >
            Специализирани услуги
          </p>

          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ letterSpacing: '-0.02em', lineHeight: '1.05', maxWidth: '700px' }}
          >
            {service.title}
          </h1>

          <p
            className="text-lg text-gray-400 leading-relaxed"
            style={{ maxWidth: '600px', lineHeight: '1.6' }}
          >
            {service.heroDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">

            {/* Left: Subsections */}
            <div className="space-y-5">
              {service.subsections.map((sub, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl"
                  style={{
                    background: '#161616',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderLeft: '4px solid #FF6B35',
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    {getIcon(sub.icon)}
                    <div>
                      <h3
                        className="text-xl font-semibold text-white"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        {sub.title}
                      </h3>
                    </div>
                  </div>

                  {sub.description && (
                    <p className="text-sm text-gray-400 leading-relaxed mb-5 ml-14">
                      {sub.description}
                    </p>
                  )}

                  {sub.checklist.length > 0 && (
                    <ul className="space-y-3 ml-14">
                      {sub.checklist.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="flex-shrink-0 mt-0.5"
                            color="#10B981"
                          />
                          <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Sticky Contact Card */}
            <div ref={stickyRef} className="lg:sticky lg:top-28">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                  boxShadow: '0 8px 40px rgba(255,107,53,0.45)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <Settings size={22} color="white" />
                </div>

                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Заявете {service.title.split(' ')[0].toLowerCase() === 'дезинфекция' ? 'дезинфекция' : 'услугата'}
                </h3>

                {/* Price Display */}
                <div className="mb-5 p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.12)' }}>
                  <p className="text-xs text-white/70 mb-1">Начална цена:</p>
                  <p className="text-lg font-bold text-white" style={{ letterSpacing: '-0.01em' }}>
                    {service.price}
                  </p>
                </div>

                <p className="text-sm text-white/80 mb-7 leading-relaxed">
                  Свържете се с нас за безплатен оглед и индивидуална оферта, съобразена с вашите нужди.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-7">
                  <a
                    href="tel:+359 892 426 296"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <Phone size={16} color="white" />
                    </div>
                    <span className="text-lg font-semibold">+359 892 426 296</span>
                  </a>

                  <a
                    href="mailto:Office@yrv-proclean.bg"
                    className="flex items-center gap-3 text-white hover:text-white/80 transition-colors"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,255,255,0.2)' }}
                    >
                      <Mail size={16} color="white" />
                    </div>
                    <span className="text-base">Office@yrv-proclean.bg</span>
                  </a>
                </div>

                {/* Divider */}
                <div className="mb-7" style={{ borderTop: '1px solid rgba(255,255,255,0.25)' }} />

                {/* CTA Button */}
                <a
                  href="tel:+359 892 426 296"
                  className="w-full py-4 rounded-xl font-bold text-orange-500 bg-white flex items-center justify-center transition-all duration-200 hover:bg-white/90 text-sm uppercase tracking-widest"
                  style={{ letterSpacing: '0.08em' }}
                >
                  Поискай Оферта
                </a>

                <p className="text-center text-xs text-white/60 mt-4">
                  Отговаряме в рамките на 2 часа
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Fixed Bottom Bar */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-4 py-4"
        style={{
          background: 'rgba(10,10,10,0.97)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex gap-3">
          <a
            href="tel:+359 892 426 296"
            className="flex-1 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-sm"
            style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)' }}
          >
            <Phone size={16} />
            +359 892 426 296
          </a>
          <a
            href="mailto:Office@yrv-proclean.bg"
            className="px-5 py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-sm"
            style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <Footer variant="simple" />
    </div>
  );
}
